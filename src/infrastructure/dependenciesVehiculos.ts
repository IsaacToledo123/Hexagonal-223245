import { createVehiculosController } from "./createProductos";
import { getAllVehiculosController } from "./getAllVehiculos";
import { InMemoryVehiculo } from "./in-memory-vehiculo";
import { getAllVehiculos } from "../application/getAllVehiculos";
import { createVehiculos } from "../application/create-vehiculo";

export const inMemoryVehiculo = new InMemoryVehiculo
export const GetAllVehiculos= new getAllVehiculos(inMemoryVehiculo) 
export const CreateVehiculo=new createVehiculos(inMemoryVehiculo)
export const CreateVehiculosController =new createVehiculosController(CreateVehiculo)
export const GetAllVehiculosController=new getAllVehiculosController(GetAllVehiculos)
