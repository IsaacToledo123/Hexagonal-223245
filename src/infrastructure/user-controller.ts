import { Request ,Response } from "express";
import { welcomeEmailSender } from "../application/welcome-email-sender";

export class userController{
    constructor(private readonly WelcomeEmailSender:welcomeEmailSender){
    }
async run(req:Request,res:Response){
    const userId = parseInt(req.params.id);
    await this.WelcomeEmailSender.run(userId)
    res.status(200).send();

}
}