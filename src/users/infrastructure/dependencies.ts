import { welcomeEmailSender } from "../app/methodsUser/welcome-email-sender";
import { userController } from "./controllers/user-controller";
import { getAllUser } from "../app/methodsUser/getAllUsers";
import { InMemoryUserRepository } from "./repository/in-memory-user-Repository";
import { getAllUserControllers } from "./controllers/getAllUser-controller";

export const inMemoryUserRepository =new InMemoryUserRepository
export const GetAllUser= new getAllUser(inMemoryUserRepository)
export const WelcomeEmailSender = new welcomeEmailSender(inMemoryUserRepository);
export const UserController = new userController(WelcomeEmailSender);
export const GetAllUserControllers= new getAllUserControllers(GetAllUser)