import { Request, Response } from "express";
import { welcomeEmailSender } from "../../application/welcome-email-sender";

export class userController {
    constructor(readonly WelcomeEmailSender: welcomeEmailSender) {
    }
    async run(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
     try {
       const user= await this.WelcomeEmailSender.run(userId)
       if (user) {
        res.status(200).send({
            status:"success",
            data:{
                id:user.id,
                email:user.email
            }
        })
       }
     } catch (error) {
        
     }


    }
}