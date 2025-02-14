import { Router } from "express";
import express from 'express'
const router = express.Router()

import { postSignup, postLogin } from "../controller/user.controller.js"


router.post("/signup", postSignup)
router.get("/login", postLogin)

export default router



