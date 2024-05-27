import path from 'path';
import PlanModel from '../models/plan.model.js';
export default class PlanController{

        getPlans(req, res){
            let plans = PlanModel.get();
            console.log(plans);
            res.render("index", {plans:plans})
            // return res.sendFile(path.join(path.resolve(), "src", "views", "public", "index.html"))
        }

        getAddForm(req, res){
            return res.render("contact", {})
        }

}