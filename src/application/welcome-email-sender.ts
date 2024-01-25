import { UserRepository } from "../domain/interface/user-repository"
export class welcomeEmailSender {

    constructor( readonly userRepository: UserRepository) {
    }

    async run(userId: number) {
        console.log("user", userId)
        try {
            const user = await this.userRepository.getById(userId)
            return user
        } catch (error) {
            return null
        }


    }
}