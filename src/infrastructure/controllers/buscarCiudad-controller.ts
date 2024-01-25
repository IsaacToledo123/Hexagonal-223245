import { Request, Response } from "express";
import { buscarCiudad } from "../../application/methodsCiudad/buscar-ciudad";

 export class buscarCiudadController {

    constructor(private readonly buscarCiudad:buscarCiudad){}
    async run(req: Request, res: Response){
        try {
            const vehiculo = await this.buscarCiudad.run()
            console.log(vehiculo)
            if (vehiculo) {
                res.status(200).send({
                    status: "success",
                    data: vehiculo.map((user: any) => {
                      return {
                        id: user.id,
                        nombre: user.nombre,
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