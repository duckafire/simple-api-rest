import {Router} from "express";

import {default as cnt} from "./controllers/";

const main = Router();

main.get("/hello-world/message", cnt.helloWorld.message);
main.use(cnt.defaults.inexistentEndpoint);

export default main;
