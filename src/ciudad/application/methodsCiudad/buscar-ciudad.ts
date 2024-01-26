import { Ciudad } from "../../domain/entities/ciudad";
import { ciudadRepository } from "../../domain/interface/ciudad-repository";
export class buscarCiudad {
    constructor(readonly ciudadRepository: ciudadRepository) { }
    async run(): Promise<Ciudad[] | null> {
        try {
            const result = await this.ciudadRepository.buscarCiudad();
            console.log(result)
            return result
        } catch (error) {
            return null
        }
    }
}