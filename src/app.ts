import express from "express";
import "./database/ormconfig";
import "./shared/container";

import { Routes } from "./routes";

const app = express();
app.use(express.json());
Routes(app);

export default app;
