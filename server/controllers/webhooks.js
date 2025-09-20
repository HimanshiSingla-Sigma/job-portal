// for managing clerk webhooks

import { Webhook } from "svix";
import User from "../models/User.js";

//API controller function to manage clerk user with database
// export const clerkWebhooks = async (req, res) => {
//   try {
//     // create a svix instance with clerk webhook secret
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//     // verifying headers
//     await whook.verify(JSON.stringify(req.body), {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     });

//     // getting data from request body
//     const { data, type } = req.body;

//     // switch cases for different events
//     switch (type) 
//     {
//       case "user.created":{
//         const userData = {
//             _id: data.id,
//             email: data.email_addresses[0].email_address,
//             name: data.first_name + " " + data.last_name,
//             image: data.image_url,
//             resume: "",
//           };
//           await User.create(userData);
//           res.json({});
//           break;
//       }
//       case "user.updated":{
//         const userData = {
//             email: data.email_addresses[0].email_address,
//             name: data.first_name + " " + data.last_name,
//             image: data.image_url,
//         }
//         await User.findByIdAndUpdate(data.id, userData)
//         res.json({});
//         break; 
//       }
//       case "user.deleted" : {
//         await User.findByIdAndDelete(data.id);
//         res.json({});
//         break;
//       }
//       default:
//         break;
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success : false , message : "Webhooks Error"});
//   }
// };


export const clerkWebhooks = async (req, res) => {
  try {
    const payload = req.body.toString(); // raw string
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    whook.verify(payload, headers); // verify signature first

    const { data, type } = JSON.parse(payload); // parse JSON after verify

    switch (type) {
      case "user.created":
        await User.create({
          _id: data.id,
          email: data.email_addresses[0]?.email_address,
          name: `${data.first_name ?? ""} ${data.last_name ?? ""}`,
          image: data.image_url ?? "",
          resume: "",
        });
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, {
          email: data.email_addresses[0]?.email_address,
          name: `${data.first_name ?? ""} ${data.last_name ?? ""}`,
          image: data.image_url ?? "",
        });
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
      default:
        console.log(`Unhandled Clerk event: ${type}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: "Webhook error" });
  }
};
