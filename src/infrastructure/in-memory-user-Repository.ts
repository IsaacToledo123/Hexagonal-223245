import { query } from "../dataBase/mysql";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export class InMemoryUserRepository implements UserRepository {

    async getById(userId: number): Promise<User | null> {
        const sql = "SELECT * FROM usuarios WHERE id = ?";
        try {
            const [usuario]: any = await query(sql, [userId]);
            if (!usuario) {
                return null;
            }
            return new User(usuario.id, usuario.email);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

//
async getAllUsers(): Promise<User[] | null> {
    const sql = "SELECT * FROM usuarios"
    try {
      const [data]: any = await query(sql, [])
      const dataVehiculos = Object.values(JSON.parse(JSON.stringify(data)));
      return dataVehiculos.map(
        (product: any) =>
          new User(
            product.id,
            product.email,
          )
      );
    } catch (error) {
      return null
    }
  }
}
