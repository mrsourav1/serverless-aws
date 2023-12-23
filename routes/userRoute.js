import express from "express"
// const { user } = require("../controllers/user");
import {user} from "../controllers/user.js"
const router = express.Router()

router.post("/first",user)

export default router;