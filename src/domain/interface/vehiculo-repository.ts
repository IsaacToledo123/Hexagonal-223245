import { Vehiculo } from "../entities/vehiculo";

 export interface vehiculoRepository{
    createVehiculos(
        id: number,
        marca: String,
      ): Promise<Vehiculo | null>;
    getAllVehiculos():Promise < Vehiculo[] | null>
}