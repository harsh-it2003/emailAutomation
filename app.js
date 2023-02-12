import express from "express";
import mongoose from "mongoose";
import sendingRouter from "./routers/sendingRouter.js"
import manipulateRouter from "./routers/manipulateRouter.js";
import * as dotenv from "dotenv";


dotenv.config();

const app = express();
const Port=process.env.Port || 5000;


app.use(express.json());
app.use("/sendEmails", sendingRouter);
app.use("/manipulateEmails", manipulateRouter);


mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://admin:harshit.dudani@cluster0.lahslzn.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => app.listen(Port, () => console.log('Connection successful & listening to the port 5000')))
  .catch((err) => console.log(err));
