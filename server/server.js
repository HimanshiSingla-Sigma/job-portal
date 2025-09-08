import './config/instrument.js'
import express from "express"
import cors from "cors"
import 'dotenv/config'
import mongoose from "mongoose";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';
import connectDB from './config/db.js';
import companyRoutes from "./routes/companyRoutes.js"
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from "./routes/jobRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import {clerkMiddleware} from "@clerk/express"
// import resumeRoutes from "./routes/resumeRoutes.js";

// initialize express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

// connect to database
await connectDB()
await connectCloudinary()

// routes
app.get('/',(req,res)=> res.send("API working"));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks);
app.use('/api/company',companyRoutes);
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)
// app.use("/api/resume", resumeRoutes);

// port 
const PORT = process.env.PORT || 5050;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

 