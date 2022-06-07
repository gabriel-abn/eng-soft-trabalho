import express from "express";
import { atleticaRoutes } from "./routes/atletica.routes";
import { eventoRoutes } from "./routes/evento.routes";
import { membroRoutes } from "./routes/membro.routes";
import { modalidadeRoutes } from "./routes/modalidade.routes";

const app = express();

app.use(express.json());
app.use([atleticaRoutes, membroRoutes, eventoRoutes, modalidadeRoutes]);

app.listen(3333, () => console.log("Server running..."));
