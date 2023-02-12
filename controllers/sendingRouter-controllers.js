import nodemailer from "nodemailer";
import Recruiters from "../models/emails.js";
import * as dotenv from "dotenv";


dotenv.config();

async function main() {
    try {
        let config = {
            service: "gmail",
            auth: {
                user:process.env.EMAIL_ID,
                pass:process.env.APP_KEY,
            },
        };

        let transporter = nodemailer.createTransport(config);

        const RecruiterDocs = await Recruiters.find();

        for (let i = 0; i < RecruiterDocs.length; i++) {
            const { emailID, companyName, subject, title } = RecruiterDocs[i];

            let info = await transporter.sendMail({
                from: 'harshitdudani8@gmail.com', 
                to: `${emailID}`, 
                subject: `${subject}`, 
                // text: ``, 
                html: `
                <p>Hello ${title}, hoping to find you in good health.</p>
                </br>
                <p>I'm a pre-final year computer science student. I'd really love to work at ${companyName}.<p>
                </br>
                <p>I'm highly interested for summer internship role for this summer. Could you please have a look at my resume, if you find me to be a good fit, then please consider me. I'd really appreaciate your help.</p>
                </br>
                <p>Please find my resume attached.</p>
                    `, 

                attachments: [
                    {
                        filename:"Harshit-Dudani-Resume.pdf",
                        path: "./Harshit-Dudani-Resume.pdf",
                    }
                ]
            })
        }

    }
    catch (err) {
        throw new Error(err);
    }
}

const sendEmails = async (req, res) => {
    try {
        await main();
        res.status(200).json({ message: "sent mail succesfully" });
    } catch (err) {
        console.log(err);
        res.status(406).json({ msg: err.message });
    }
}

export { sendEmails };