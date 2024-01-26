import "./load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { router } from "./users/infrastructure/routes/router-user";
import { vehiculoRouter } from "./vehiculos/infrastructure/routes/router-vehiculo";
import { ciudadRouter } from "./ciudad/infrastructure/routes/router-ciudad";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use('/users',router)
  app.use('/vehiculo',vehiculoRouter)
  app.use('/ciudad',ciudadRouter)

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
