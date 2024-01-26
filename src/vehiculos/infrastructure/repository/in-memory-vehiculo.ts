import { query } from "../../../dataBase/mysql";
import { Vehiculo } from "../../domain/vehiculo";
import { vehiculoRepository } from "../../domain/vehiculo-repository";

export class InMemoryVehiculo implements vehiculoRepository {

  async createVehiculos(id: number, marca: String): Promise<Vehiculo | null> {
    const sql =
      "INSERT INTO vehiculos (id,marca) VALUES (?, ?)";
    const params: any[] = [id, marca];
    try {
      const [result]: any = await query(sql, params);
      return new Vehiculo(result.id, result.marca );
    } catch (error) {
      return null;
    }
  }


  async getAllVehiculos(): Promise<Vehiculo[] | null> {
    const sql = "SELECT * FROM vehiculos"
    try {
      const [data]: any = await query(sql, [])
      const dataVehiculos = Object.values(JSON.parse(JSON.stringify(data)));
      return dataVehiculos.map(
        (product: any) =>
          new Vehiculo(
            product.id,
            product.marca,
          )
      );
    } catch (error) {
      return null
    }
  }
}
