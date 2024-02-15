import { query } from "../../../dataBase/mysql";
import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";


export class InMemoryUserRepository implements UserRepository {

    async getById(userId: number): Promise<User | null> {
        const sql = "SELECT * FROM usuarios WHERE id = ?";
        const params:any[]=[userId]
        try {
            const [usuario]: any = await query(sql, params);
         
            return new User(
              usuario[0].id,
              usuario[0].email,
              usuario[0].password
            )
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
            product.password
          )
      );
    } catch (error) {
      return null
    }
  }

  async createUser(id: number, email: String,password:string): Promise<User | null> {
    const sql =
      "INSERT INTO usuarios (id,marca) VALUES (?, ?,?)";
    const params: any[] = [id, email,password];
    try {
      const [result]: any = await query(sql, params);
      return new User(result.id, result.email,result.password );
    } catch (error) {
      return null;
    }
  }

}
