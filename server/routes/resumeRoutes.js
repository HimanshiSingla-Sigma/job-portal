// import express from "express";
// import axios from "axios";
// import pdfParse from "pdf-parse";
// import mammoth from "mammoth";
// import OpenAI from "openai";

// const router = express.Router();
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // set in .env
// });

// // Helper: download file buffer
// const downloadFile = async (url) => {
//   const response = await axios.get(url, { responseType: "arraybuffer" });
//   return response.data;
// };

// // Extract text from PDF
// const extractTextFromPDF = async (buffer) => {
//   const data = await pdfParse(buffer);
//   return data.text;
// };

// // Extract text from DOCX
// const extractTextFromDOCX = async (buffer) => {
//   const { value } = await mammoth.extractRawText({ buffer });
//   return value;
// };

// // Route: Analyze Resume
// router.post("/analyze-resume", async (req, res) => {
//   try {
//     const { resumeUrl, jobDescription } = req.body;

//     if (!resumeUrl || !jobDescription) {
//       return res.json({ success: false, message: "Resume URL & Job Description required" });
//     }

//     // 1. Download resume
//     const buffer = await downloadFile(resumeUrl);

//     // 2. Extract text depending on file type
//     let resumeText = "";
//     if (resumeUrl.endsWith(".pdf")) {
//       resumeText = await extractTextFromPDF(buffer);
//     } else if (resumeUrl.endsWith(".docx")) {
//       resumeText = await extractTextFromDOCX(buffer);
//     } else {
//       return res.json({ success: false, message: "Unsupported resume format" });
//     }

//     if (!resumeText.trim()) {
//       return res.json({ success: false, message: "Unable to extract resume text" });
//     }

//     // 3. Send to OpenAI for analysis
//     const prompt = `
//       You are a resume analyzer. Analyze the following resume text against the given job description.

//       Job Description:
//       ${jobDescription}

//       Resume:
//       ${resumeText}

//       Provide JSON response with:
//       - summary: short candidate summary
//       - skills: array of main skills
//       - matchScore: percentage match with job description (0-100)
//       - strengths: array of key strengths
//       - weaknesses: array of key weaknesses
//     `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.4,
//     });

//     let analysis;
//     try {
//       analysis = JSON.parse(response.choices[0].message.content);
//     } catch (err) {
//       return res.json({ success: false, message: "Failed to parse AI response" });
//     }

//     res.json({ success: true, analysis });
//   } catch (error) {
//     console.error("Resume analysis error:", error.message);
//     res.json({ success: false, message: error.message });
//   }
// });

// export default router;

// import express from "express";
// import axios from "axios";
// import pdfParse from "pdf-parse";
// import mammoth from "mammoth";
// import OpenAI from "openai";

// const router = express.Router();
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // set in .env
// });

// // Helper: download file buffer
// const downloadFile = async (url) => {
//   const response = await axios.get(url, { responseType: "arraybuffer" });
//   return response.data;
// };

// // Extract text from PDF
// const extractTextFromPDF = async (buffer) => {
//   const data = await pdfParse(buffer);
//   return data.text;
// };

// // Extract text from DOCX
// const extractTextFromDOCX = async (buffer) => {
//   const { value } = await mammoth.extractRawText({ buffer });
//   return value;
// };

// // Route: Analyze Resume
// router.post("/analyze-resume", async (req, res) => {
//   try {
//     const { resumeUrl, jobDescription } = req.body;

//     if (!resumeUrl || !jobDescription) {
//       return res.json({ success: false, message: "Resume URL & Job Description required" });
//     }

//     // 1. Download resume
//     const buffer = await downloadFile(resumeUrl);

//     // 2. Extract text depending on file type
//     let resumeText = "";
//     if (resumeUrl.endsWith(".pdf")) {
//       resumeText = await extractTextFromPDF(buffer);
//     } else if (resumeUrl.endsWith(".docx")) {
//       resumeText = await extractTextFromDOCX(buffer);
//     } else {
//       return res.json({ success: false, message: "Unsupported resume format" });
//     }

//     if (!resumeText.trim()) {
//       return res.json({ success: false, message: "Unable to extract resume text" });
//     }

//     // 3. Send to OpenAI for analysis
//     const prompt = `
//       You are a resume analyzer. Analyze the following resume text against the given job description.

//       Job Description:
//       ${jobDescription}

//       Resume:
//       ${resumeText}

//       Provide JSON response with:
//       - summary: short candidate summary
//       - skills: array of main skills
//       - matchScore: percentage match with job description (0-100)
//       - strengths: array of key strengths
//       - weaknesses: array of key weaknesses
//     `;

//     const response = await openai.responses.create({
//       model: "gpt-4.1-mini",
//       input: prompt,
//       temperature: 0.4,
//     });

//     // Extract text output
//     const rawText = response.output[0].content[0].text;

//     let analysis;
//     try {
//       analysis = JSON.parse(rawText);
//     } catch (err) {
//       return res.json({ success: false, message: "Failed to parse AI response", rawText });
//     }

//     res.json({ success: true, analysis });
//   } catch (error) {
//     console.error("Resume analysis error:", error.message);
//     res.json({ success: false, message: error.message });
//   }
// });

// export default router;
