import "./load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { router } from "./infrastructure/routes/router-user";
import { vehiculoRouter } from "./infrastructure/routes/router-vehiculo";
import { ciudadRouter } from "./infrastructure/routes/router-ciudad";

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
