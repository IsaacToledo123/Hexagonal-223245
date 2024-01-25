import { Ciudad } from "../domain/ciudad";
import { ciudadRepository } from "../domain/ciudad-repository";

export class agregarCiudad {
  constructor(readonly ciudadRepository: ciudadRepository) {}

  async run(
    id: number,
    nombre: string,
  ): Promise<Ciudad | null> {
    try {
      const ciudad = await this.ciudadRepository.agregarCiudad(
        id,
        nombre,
      );
      return ciudad;
    } catch (error) {
      return null;
    }
  }
}
