import { Request, Response } from "express";
import { getAllUser } from "../application/getAllUsers";

 export class getAllUserControllers {

    constructor(private readonly getAllVehiculos:getAllUser){}
    async run(req: Request, res: Response){
        try {
            const vehiculo = await this.getAllVehiculos.run()
            console.log(vehiculo)
            if (vehiculo) {
                res.status(200).send({
                    status: "success",
                    data: vehiculo.map((user: any) => {
                      return {
                        id: user.id,
                        marca: user.marca,
                      };
                    }),
                  });
            }else{
                res.status(400).send({
                    status: "error",
                    msn: "Ocurrio algún problema",
                  });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
              });
        }
    }
 }