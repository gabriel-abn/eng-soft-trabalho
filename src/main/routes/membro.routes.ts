import { Router } from "express";
import { CadastrarMembroController } from "../controllers/CadastrarMembro";
import {
  ProcurarMembrosAtleticaController,
  ProcurarTodosMembros,
} from "../controllers/ProcurarMembro";

export const membroRoutes = Router();

membroRoutes.post("/membro/", new CadastrarMembroController().handler);
// membroRoutes.get("/membro/:rg", new ProcurarMembroRGController().handler);
membroRoutes.get(
  "/membro/:atletica",
  new ProcurarMembrosAtleticaController().handler
);

membroRoutes.get("/membro/all", new ProcurarTodosMembros().handler);
