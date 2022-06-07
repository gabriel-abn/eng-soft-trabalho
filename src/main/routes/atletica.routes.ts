import { Router } from "express";
import { CriarAtleticaController } from "../controllers/CriarAtletica";
import { ProcurarAtleticaController } from "../controllers/ProcurarAtletica";
import { ProcurarTodasAtleticasController } from "../controllers/ProcurarTodasAtleticas";

export const atleticaRoutes = Router();

atleticaRoutes.post("/atletica/", new CriarAtleticaController().handler);

atleticaRoutes.get(
  "/atletica/all",
  new ProcurarTodasAtleticasController().handler
);
atleticaRoutes.get("/atletica/:id", new ProcurarAtleticaController().handler);
