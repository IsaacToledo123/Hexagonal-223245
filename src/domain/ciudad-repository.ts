import { Ciudad } from "./ciudad";
 export interface ciudadRepository{
    agregarCiudad(
        id: number,
        nombre: String,
      ): Promise<Ciudad | null>;
    buscarCiudad():Promise < Ciudad[] | null>
}