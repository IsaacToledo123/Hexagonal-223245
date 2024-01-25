import { Ciudad } from "../domain/ciudad";
import { ciudadRepository } from "../domain/ciudad-repository";
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