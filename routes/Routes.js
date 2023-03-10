import { Router } from "express";
import { controller } from "../controllers/controller.js";
const route = Router();

route.post('/contact', controller.postForm);

export default route;