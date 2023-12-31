import express, { Application, Request, Response } from "express";
import { loadInformation as github } from "./api/github/controller";
import { loadInformation as stackoverflow } from "./api/stackoverflow/controller";

const app: Application = express();

app.use("/github/user/:id", github);
app.use("/stackoverflow/user/:id", stackoverflow);

app.listen(8080, () => console.log("Server is running!"));
