import { Vehiculo } from "../../domain/vehiculo";
import { vehiculoRepository } from "../../domain/vehiculo-repository";
import { INotificacionServices } from "../services/INotificacionService";

export class createVehiculos {
  constructor(readonly vehiculoRepository: vehiculoRepository  ,readonly notificacion: INotificacionServices) {}

  async run(
    id: number,
    marca: string,
  ): Promise<Vehiculo | null> {
    try {
      const vehiculo:any = await this.vehiculoRepository.createVehiculos(
        id,
        marca,///
      );
      this.notificacion.run(vehiculo)
      return vehiculo;
    } catch (error) {
      return null;
    }
  }
}
