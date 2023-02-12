import Router from "express";
const sendingRouter = Router();
import { sendEmails } from "../controllers/sendingRouter-controllers.js";


sendingRouter.get("/",sendEmails);

export default sendingRouter;