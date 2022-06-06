import express from "express";
import { atleticaRoutes } from "./routes/atletica.routes";
import { membroRoutes } from "./routes/membro.routes";

const app = express();

app.use(express.json());
app.use([atleticaRoutes, membroRoutes]);

app.listen(3333, () => console.log("Server running..."));
