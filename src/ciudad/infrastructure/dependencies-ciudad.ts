import { agregarCiudadController } from "./controllers/agregarCiudad-controller";
import { buscarCiudadController } from "./controllers/buscarCiudad-controller";
import { InMemoryCiudad } from "./repository/in-memory-ciudad";
import { agregarCiudad } from "../application/methodsCiudad/Agregar-ciudad";
import { buscarCiudad } from "../application/methodsCiudad/Buscar-ciudad";

export const inMemoryCiudad = new InMemoryCiudad
export const BuscarCiudad= new buscarCiudad(inMemoryCiudad) 
export const AgregarCiudad=new agregarCiudad(inMemoryCiudad)
export const AgregarCiudadController =new agregarCiudadController(AgregarCiudad)
export const BuscarCiudadController=new buscarCiudadController(BuscarCiudad)