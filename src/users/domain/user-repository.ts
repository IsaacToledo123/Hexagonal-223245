import { User } from "./user";

 export interface UserRepository{
    getById(userId:number):Promise <User | null> ;
    getAllUsers():Promise < User[] | null>;
}