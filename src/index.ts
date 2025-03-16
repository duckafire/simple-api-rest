import express from "express";

const server = express();

server.get("/", (request, response) => {
	return response.send("Hello world!");
});

server.listen(process.env.PORT || 7777, () => console.log("Running!"));
