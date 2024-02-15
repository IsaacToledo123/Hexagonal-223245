import { UserRepository } from "../../domain/user-repository";
import {User  } from "../../domain/user";

export class createUser {
  constructor(readonly vehiculoRepository: UserRepository) {}

  async run(
    id: number,
    email: string,
    password:string
  ): Promise<User | null> {
    try {
      const vehiculo = await this.vehiculoRepository.createUser(
        id,
        email,
        password
      );
      return vehiculo;
    } catch (error) {
      return null;
    }
  }
}
