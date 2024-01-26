import express from "express";
import { BuscarCiudadController } from "../dependencies-ciudad";
import { AgregarCiudadController } from "../dependencies-ciudad";
export const ciudadRouter = express.Router();

ciudadRouter.get(
  "/",
  BuscarCiudadController.run.bind(BuscarCiudadController)
);

ciudadRouter.post(
  "/",
  AgregarCiudadController.run.bind(AgregarCiudadController)
);
