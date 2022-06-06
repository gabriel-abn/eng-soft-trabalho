import { Router } from "express";
import { CriarAtleticaController } from "../controllers/CriarAtletica";

export const atleticaRoutes = Router();

atleticaRoutes.post("/atletica/", new CriarAtleticaController().handler);
