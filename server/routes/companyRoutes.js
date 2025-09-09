import express from "express";
import axios from "axios";
import {
  ChangeJobApplicationsStatus,
  changeVisibilty,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/companyController.js";
import upload from "../config/multer.js";
import { protectCompany } from "../middleware/authMiddleware.js";

import { OpenAI } from "openai";
import extract from "pdf-extraction";

const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Uses your environment variable
// });

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

// register a company
router.post("/register", upload.single("image"), registerCompany);

// company login
router.post("/login", loginCompany);

// get company data
router.get("/company", protectCompany, getCompanyData);

// post a job
router.post("/post-job", protectCompany, postJob);

// get applicants data of company
router.get("/applicants", protectCompany, getCompanyJobApplicants);

// get company job list
router.get("/list-jobs", protectCompany, getCompanyPostedJobs);

// change applications status
router.post("/change-status", protectCompany, ChangeJobApplicationsStatus);

// change applications visibility
router.post("/change-visibility", protectCompany, changeVisibilty);

// router.post("/analyze-resume", async (req, res) => {
//   const { resumeUrl } = req.body;

//   if (!resumeUrl) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Resume URL is required." });
//   }

//   try {
//     // Log the URL to confirm it's being received
//     console.log("Received resume URL:", resumeUrl);

//     // 1. Fetch the resume file
//     const response = await axios.get(resumeUrl, {
//       responseType: "arraybuffer",
//     });
//     const dataBuffer = response.data;

//     // Log the buffer size to confirm the file was fetched
//     console.log("Fetched PDF buffer size:", dataBuffer.byteLength);

//     // 2. Parse the text from the PDF using pdf-extraction
//     const { text: resumeText } = await extract(dataBuffer);

//     // Log the parsed text to see if anything was extracted
//     console.log("Parsed resume text:", resumeText);

//     // If the parsed text is empty, return an early error
//     if (!resumeText.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Could not extract text from the provided PDF. The file may be an image-only PDF.",
//       });
//     }

//     // 3. Craft the Gemini API payload with the resume text and a JSON schema
//     const payload = {
//       contents: [{
//         role: "user",
//         parts: [{ text: `As a professional recruiter, analyze the following resume and provide a structured hiring report in JSON format. The report should include a hiring recommendation, a concise summary for a hiring manager, and bulleted lists of strengths and weaknesses. The content should be strictly based on the provided resume text.

//         Resume Text:
//         """
//         ${resumeText}
//         """

//         JSON Output:` }]
//       }],
//       generationConfig: {
//         responseMimeType: "application/json",
//         responseSchema: {
//           type: "OBJECT",
//           properties: {
//             hiring_recommendation: {
//               type: "STRING",
//               description: "A professional recommendation for hiring, e.g., 'Strongly Recommend', 'Recommend', 'Consider', 'Not Recommended'."
//             },
//             summary: {
//               type: "STRING",
//               description: "A concise summary of the candidate's profile for a hiring manager."
//             },
//             strengths: {
//               type: "ARRAY",
//               description: "A list of the candidate's key strengths based on the resume.",
//               items: { type: "STRING" }
//             },
//             weaknesses: {
//               type: "ARRAY",
//               description: "A list of potential weaknesses or areas for improvement.",
//               items: { type: "STRING" }
//             }
//           },
//           required: ["hiring_recommendation", "summary", "strengths", "weaknesses"]
//         }
//       }
//     };

//     // 4. Send the text to the Gemini API
//     const geminiResponse = await fetch(`${GEMINI_API_URL}${GEMINI_API_KEY}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });

//     const geminiResult = await geminiResponse.json();
//     const feedback = JSON.parse(geminiResult?.candidates?.[0]?.content?.parts?.[0]?.text || "{}");

//     // 5. Send the structured feedback back to the client
//     res.json({ success: true, feedback });
//   } catch (error) {
//     console.error("Error analyzing resume:", error);
//     res.status(500).json({
//       success: false,
//       message: "An error occurred during resume analysis. Check server logs for details.",
//     });
//   }
// });

router.post("/analyze-resume", async (req, res) => {
  const { resumeUrl } = req.body;

  if (!resumeUrl) {
    return res
      .status(400)
      .json({ success: false, message: "Resume URL is required." });
  }

  try {
    console.log("Received resume URL:", resumeUrl);

    // Fetch PDF
    const response = await axios.get(resumeUrl, {
      responseType: "arraybuffer",
    });
    const dataBuffer = response.data;
    console.log("Fetched PDF buffer size:", dataBuffer.byteLength);

    // Extract text
    const { text: resumeText } = await extract(dataBuffer);
    if (!resumeText.trim()) {
      return res.status(400).json({
        success: false,
        message: "No text found in resume (may be image-only PDF).",
      });
    }

    // Build Gemini payload
    // const payload = {
    //   contents: [{
    //     role: "user",
    //     parts: [{
    //       text: `Analyze the resume below and return JSON with:
    //       - hiring_recommendation
    //       - summary
    //       - strengths[]
    //       - weaknesses[]

    //       Resume:
    //       """
    //       ${resumeText}
    //       """`
    //     }]
    //   }],
    //   generationConfig: {
    //     responseMimeType: "application/json",
    //     responseSchema: {
    //       type: "object",
    //       properties: {
    //         hiring_recommendation: { type: "string" },
    //         summary: { type: "string" },
    //         strengths: { type: "array", items: { type: "string" } },
    //         weaknesses: { type: "array", items: { type: "string" } }
    //       },
    //       required: ["hiring_recommendation", "summary", "strengths", "weaknesses"]
    //     }
    //   }
    // };

    // Build Gemini payload
    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Analyze the resume below and return JSON with:
      - hiring_recommendation (string)
      - summary (string)
      - strengths[] (list of strings)
      - weaknesses[] (list of strings)
      - ratings (object with 0–10 scores) for:
          - technical_skills
          - communication
          - experience
          - overall_fit

      Resume:
      """
      ${resumeText}
      """`,
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            hiring_recommendation: { type: "string" },
            summary: { type: "string" },
            strengths: { type: "array", items: { type: "string" } },
            weaknesses: { type: "array", items: { type: "string" } },
            ratings: {
              type: "object",
              properties: {
                technical_skills: { type: "integer" },
                communication: { type: "integer" },
                experience: { type: "integer" },
                overall_fit: { type: "integer" },
              },
              required: [
                "technical_skills",
                "communication",
                "experience",
                "overall_fit",
              ],
            },
          },
          required: [
            "hiring_recommendation",
            "summary",
            "strengths",
            "weaknesses",
            "ratings",
          ],
        },
      },
    };

    // Send request to Gemini
    const geminiResponse = await fetch(`${GEMINI_API_URL}${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const geminiResult = await geminiResponse.json();

    // Parse response safely
    let feedback = {};
    try {
      const rawText =
        geminiResult?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
      feedback = JSON.parse(rawText);
    } catch (err) {
      console.error("Gemini JSON parsing error:", err, geminiResult);
      return res
        .status(500)
        .json({ success: false, message: "Failed to parse Gemini output." });
    }

    res.json({ success: true, feedback });
  } catch (error) {
    console.error("Error analyzing resume:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred during resume analysis.",
    });
  }
});

export default router;
