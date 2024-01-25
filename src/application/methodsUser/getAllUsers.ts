import { UserRepository } from "../../domain/interface/user-repository";
import { User } from "../../domain/entities/user";
export class getAllUser {
    constructor(readonly userRepository: UserRepository) { }
    async run(): Promise<User[] | null> {
        try {
            const result = await this.userRepository.getAllUsers();
            console.log(result)
            return result
        } catch (error) {
            return null
        }
    }
}//