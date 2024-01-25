import { vehiculoRepository } from "../../domain/interface/vehiculo-repository";
import { Vehiculo } from "../../domain/entities/vehiculo";
export class getAllVehiculos {
    constructor(readonly vehiculoRepository: vehiculoRepository) { }
    async run(): Promise<Vehiculo[] | null> {
        try {
            const result = await this.vehiculoRepository.getAllVehiculos();
            console.log(result)
            return result
        } catch (error) {
            return null
        }
    }
}