import express from "express";
import { GetAllUserControllers, UserController } from "./dependencies";

 
export const router=express.Router()

router.get('/:id/welcome',UserController.run.bind(UserController));
router.get('/',GetAllUserControllers.run.bind(GetAllUserControllers))

