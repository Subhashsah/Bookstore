import express from 'express'
import { addBook, getBook } from '../controllers/getBook.controllers.js';
import { login, registerUser } from '../controllers/user.controller.js';
const router = express.Router();
router.route("/getBook").get(getBook)
router.route("/addBook").post(addBook)
router.route("/registerUser").post(registerUser)
router.route("/login").post(login)
export {router}