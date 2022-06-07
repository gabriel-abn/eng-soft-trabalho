import express from "express";
import { atleticaRoutes } from "./routes/atletica.routes";
import { eventoRoutes } from "./routes/evento.routes";
import { membroRoutes } from "./routes/membro.routes";
import { modalidadeRoutes } from "./routes/modalidade.routes";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use([atleticaRoutes, membroRoutes, eventoRoutes, modalidadeRoutes]);

app.listen(PORT, () => console.log("Server running..."));
