import { createVehiculosController } from "./controllers/createVehiculosController";
import { getAllVehiculosController } from "./controllers/getAllVehiculos";
import { InMemoryVehiculo } from "./repository/in-memory-vehiculo";
import { getAllVehiculos } from "../app/methodsVehiculos/getAllVehiculos";
import { createVehiculos } from "../app/methodsVehiculos/create-vehiculo";

export const inMemoryVehiculo = new InMemoryVehiculo
export const GetAllVehiculos= new getAllVehiculos(inMemoryVehiculo) 
export const CreateVehiculo=new createVehiculos(inMemoryVehiculo)
export const CreateVehiculosController =new createVehiculosController(CreateVehiculo)
export const GetAllVehiculosController=new getAllVehiculosController(GetAllVehiculos)