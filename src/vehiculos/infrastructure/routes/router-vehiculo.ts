import express from "express";

import { CreateVehiculosController } from "../dependenciesVehiculos";
import { GetAllVehiculosController } from "../dependenciesVehiculos";
export const vehiculoRouter = express.Router();

vehiculoRouter.get(
  "/",
  GetAllVehiculosController.run.bind(GetAllVehiculosController)
);

vehiculoRouter.post(
  "/",
  CreateVehiculosController.run.bind(CreateVehiculosController)
);
