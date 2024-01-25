import { welcomeEmailSender } from "../application/welcome-email-sender";
import { userController } from "./user-controller";
import { getAllUser } from "../application/getAllUsers";
import { InMemoryUserRepository } from "./in-memory-user-Repository";
import { getAllUserControllers } from "./getAllUser-controller";

export const inMemoryUserRepository =new InMemoryUserRepository
export const GetAllUser= new getAllUser(inMemoryUserRepository)
export const WelcomeEmailSender = new welcomeEmailSender(inMemoryUserRepository);
export const UserController = new userController(WelcomeEmailSender);
export const GetAllUserControllers= new getAllUserControllers(GetAllUser)