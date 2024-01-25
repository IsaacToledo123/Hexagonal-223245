import "./load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { router } from "./infrastructure/router-user";
import { vehiculoRouter } from "./infrastructure/router-vehiculo";


function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use('/users',router)
  app.use('/vehiculo',vehiculoRouter)
  

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
