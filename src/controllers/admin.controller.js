import path from 'path';
import ContactModel from '../models/admin.model.js';
export default class AdminController{

        getContacts(req, res){
            let contacts = ContactModel.get();
            console.log(contacts);
            res.render("admin", {contacts:contacts})
            // return res.sendFile(path.join(path.resolve(), "src", "views", "public", "index.html"))
        }

        getAdmin(req, res){
            return res.render("admin", {})
        }

        addContactInfo(req, res){
            console.log(req.body);
            ContactModel.add(req.body)
            // let contacts = ContactModel.get()
            // res.render('admin', {contacts:contacts})
            return res.redirect('/'); 
        }
}