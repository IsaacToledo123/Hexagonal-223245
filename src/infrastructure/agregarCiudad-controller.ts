import { Request, Response } from "express";
import { agregarCiudad } from "../application/agregar-ciudad";

export class agregarCiudadController {
  constructor(readonly agregarCiudad: agregarCiudad) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const vehiculo = await this.agregarCiudad.run(
        data.id,
        data.nombre,
      );

      if (vehiculo)
        res.status(201).send({
          status: "success",
          data: {
            id: vehiculo?.id,
            marca: vehiculo?.nombre,
        
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        mesagges: error,
      });
    }
  }
}
