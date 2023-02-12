import Recruiters from "../models/emails.js";

const addEmailIDs = async (req, res) => {
    try {
        const { emailID, companyName, subject, title } = req.body;
        let RecruiterDoc = await new Recruiters({ emailID, companyName, subject, title });
        await RecruiterDoc.save();
        return res.status(201).json({ RecruiterDoc });
    } catch (err) {
        console.log(err);
        res.status(406).json({ message: err.message });
    }
}

const deleteAllIDs = async (req, res) => {
    try {
        await Recruiters.deleteMany({});
        res.status(201).json({ message: "all the data deleted" });
    } catch (err) {
        console.log(err);
        res.status(406).json({ message: err.message });
    }
}

const addManyEmailIDs = async (req, res) => {
    try {
        const { emailIDs, companyNames, subjects, titles } = req.body;
        for (let i = 0; i < emailIDs.length; i++) {
            let RecruiterDoc = await new Recruiters({ emailID: emailIDs[i], companyName: companyNames[i], subject: subjects[0], title: titles[i] });
            RecruiterDoc.save();
        }
        res.status(200).json({ msg: "Added successfully" });
    } catch (err) {
        console.log(err);
        res.status(406).json({ message: err.message });
    }
}

const getEmailIDs = async (req, res) => {
    try {
        const RecruiterDocs = await Recruiters.find();
        res.status(200).json({ RecruiterDocs });
    } catch (err) {
        console.log(err);
        res.status(406).json({ message: err.message });
    }
}

export { addEmailIDs, deleteAllIDs, addManyEmailIDs, getEmailIDs };