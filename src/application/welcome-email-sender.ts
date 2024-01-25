import { UserRepository } from "../domain/user-repository"
export class welcomeEmailSender{

constructor(private readonly userRepository: UserRepository){
}

async run (userId:number){
    console.log("user",userId)

    const user= await this.userRepository.getById(userId)

    if(!user){
        throw new Error(`id no existe ${userId}`)
    }
    console.log("user",user.email)

}
}