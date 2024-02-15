import { User } from "./user";

 export interface UserRepository{
    createUser(
        id: number,
        email: String,
        password:string
      ): Promise<User | null>;  
    getById(userId:number):Promise <User | null> ;
    getAllUsers():Promise < User[] | null>;
}