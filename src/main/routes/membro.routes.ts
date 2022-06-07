import { Router } from "express";
import { CadastrarMembroController } from "../controllers/CadastrarMembro";

export const membroRoutes = Router();

membroRoutes.post("/membro/", new CadastrarMembroController().handler);
membroRoutes.get("/membro/:rg");
membroRoutes.get("/membro/:atletica");
