import { Router } from "express";
import { CriarEventoController } from "../controllers/CriarEvento";

export const eventoRoutes = Router();

eventoRoutes.post("/evento/", new CriarEventoController().handler);

eventoRoutes.get("/evento/:id");
eventoRoutes.get("/evento/all");
