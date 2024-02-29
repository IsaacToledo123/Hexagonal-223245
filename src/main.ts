import "./load-env-vars";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors"; // Importa el paquete cors

import { config } from "./config";
import { router } from "./users/infrastructure/routes/router-user";
import { vehiculoRouter } from "./vehiculos/infrastructure/routes/router-vehiculo";
import { ciudadRouter } from "./ciudad/infrastructure/routes/router-ciudad";

function bootstrap() {
  const app = express();

  // Aplica CORS
  app.use(cors());

  app.use(bodyParser.json());
  app.use('/users', router);
  app.use('/vehiculo', vehiculoRouter);
  app.use('/ciudad', ciudadRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

bootstrap();
