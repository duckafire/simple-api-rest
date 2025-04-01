import { server } from "./server";

server.listen(process.env.PORT || 7777, () => console.log("Running!"));
