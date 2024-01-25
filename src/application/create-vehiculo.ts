import { Vehiculo } from "../domain/vehiculo";
import { vehiculoRepository } from "../domain/vehiculo-repository";

export class createVehiculos {
  constructor(readonly vehiculoRepository: vehiculoRepository) {}

  async run(
    id: number,
    marca: string,
  ): Promise<Vehiculo | null> {
    try {
      const vehiculo = await this.vehiculoRepository.createVehiculos(
        id,
        marca,
      );
      return vehiculo;
    } catch (error) {
      return null;
    }
  }
}
