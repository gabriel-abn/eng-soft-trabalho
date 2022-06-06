import { Router } from "express";
import { CadastrarMembroController } from "../controllers/CadastrarMembro";

export const membroRoutes = Router();

membroRoutes.post("/membro/", new CadastrarMembroController().handler);
