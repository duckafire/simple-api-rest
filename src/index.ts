import express from "express";
import dotenv  from "dotenv";

import {default as router} from "./routes";

dotenv.config();

if(process.env.PORT === undefined)
	throw new Error("PORT not defined");

const server = express();

server.use(express.json());
server.use(router);

server.listen(process.env.PORT, () => {
	console.log("[simple-api-rest] STARTED! At " + new Date());
});

