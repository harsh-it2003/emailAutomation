import Router from "express";
import {addEmailIDs, addManyEmailIDs, deleteAllIDs, getEmailIDs} from "../controllers/manipulateRouter-controllers.js"

const manipulateRouter=Router();

manipulateRouter.post("/add",addEmailIDs);
manipulateRouter.delete("/deleteAll",deleteAllIDs);
manipulateRouter.post("/addMany",addManyEmailIDs);
manipulateRouter.get("/getAllRecruiters",getEmailIDs);


export default manipulateRouter;