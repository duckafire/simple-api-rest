import { server } from "./server";

const PORT = (process.env.PORT || 7777);

server.listen(PORT, () => {
	console.log("Running at the port: " + PORT);
});
