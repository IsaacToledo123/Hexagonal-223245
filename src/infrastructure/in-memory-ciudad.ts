import { query } from "../dataBase/mysql";
import { Ciudad } from "../domain/ciudad";
import { ciudadRepository } from "../domain/ciudad-repository";

export class InMemoryCiudad implements ciudadRepository {

    
  async agregarCiudad(id: number, nombre: String): Promise<Ciudad | null> {
    const sql =
      "INSERT INTO ciudad (id,nombre) VALUES (?, ?)";
    const params: any[] = [id, nombre];
    try {
      const [result]: any = await query(sql, params);
      return new Ciudad(result.id, result.nombre );
    } catch (error) {
      return null;
    }
  }


  async buscarCiudad(): Promise<Ciudad[] | null> {
    const sql = "SELECT * FROM ciudad"
    try {
      const [data]: any = await query(sql, [])
      const dataCiudad = Object.values(JSON.parse(JSON.stringify(data)));
      return dataCiudad.map(
        (product: any) =>
          new Ciudad(
            product.id,
            product.nombre,
          )
      );
    } catch (error) {
      return null
    }
  }
}
