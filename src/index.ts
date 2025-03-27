import { server } from "./server/index";

server.listen(process.env.PORT || 7777, () => console.log("Running!"));
