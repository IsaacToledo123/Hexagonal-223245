import { UserRepository } from "../../domain/user-repository";
import { User } from "../../domain/user";
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