import { Request, Response } from "express";
import { createUser } from "../../app/methodsUser/createUser";

export class createUserController {
  constructor(readonly createUser: createUser) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const vehiculo = await this.createUser.run(
        data.id,
        data.email,
        data.password
      );

      if (vehiculo)
        res.status(201).send({
          status: "success",
          data: {
            id: vehiculo?.id,
            email: vehiculo?.email,
            password:vehiculo?.password
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
