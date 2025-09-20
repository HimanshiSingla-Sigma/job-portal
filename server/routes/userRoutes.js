import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js'
import upload from "../config/multer.js"
const router = express.Router()
import { clerkMiddleware } from '@clerk/express';

// get user data
router.get("/user",clerkMiddleware(),getUserData)

// apply for a job
router.post("/apply",clerkMiddleware(),applyForJob)

// get applied jobs data 
router.get("/applications",clerkMiddleware(),getUserJobApplications)

// update user profile (resume)
router.post("/update-resume",clerkMiddleware(),upload.single('resume'),updateUserResume)

export default router;