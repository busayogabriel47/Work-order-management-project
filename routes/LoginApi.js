import express from "express";
import { getAllUser, signup, login } from "../controllers/LoginUser.js";


const route = express.Router();

route.get('/', getAllUser );

route.post('/signup', signup);

route.post('/login', login);

export default route;



