import { agregarCiudadController } from "./agregarCiudad-controller";
import { buscarCiudadController } from "./buscarCiudad-controller";
import { InMemoryCiudad } from "./in-memory-ciudad";
import { agregarCiudad } from "../application/agregar-ciudad";
import { buscarCiudad } from "../application/buscar-ciudad";

export const inMemoryCiudad = new InMemoryCiudad
export const BuscarCiudad= new buscarCiudad(inMemoryCiudad) 
export const AgregarCiudad=new agregarCiudad(inMemoryCiudad)
export const AgregarCiudadController =new agregarCiudadController(AgregarCiudad)
export const BuscarCiudadController=new buscarCiudadController(BuscarCiudad)