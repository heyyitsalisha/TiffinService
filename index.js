// Entry Point
import express from'express'
import ejsLayouts from 'express-ejs-layouts'
import PlanController from './src/controllers/plan.controller.js'
import path from 'path';
import AdminController from './src/controllers/admin.controller.js';

const server = express();

//parse form data
server.use(express.urlencoded());

//setup view engine
server.set("view engine", "ejs")
server.set("views", path.join(path.resolve(), 'src', 'views', 'public'))

// server.use(ejsLayouts)

const planController = new PlanController();
const adminController = new AdminController();
// server.use(express.static('src/views/public'));

server.get("/", planController.getPlans);
server.get("/contact", planController.getAddForm)

server.get("/admin", adminController.getContacts);
server.get("/admin", adminController.getAdmin)
server.post("/admin", adminController.addContactInfo)



server.use(express.static('src/views/public'));

server.listen(3000);
console.log("listening on port 3000")