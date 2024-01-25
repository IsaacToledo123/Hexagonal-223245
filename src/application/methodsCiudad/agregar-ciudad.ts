import { Ciudad } from "../../domain/entities/ciudad";
import { ciudadRepository } from "../../domain/interface/ciudad-repository";

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
