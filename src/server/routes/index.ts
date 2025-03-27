import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, response) => {
	return response.send("Hello world!");
});

router.get("/foo", (_, response) => {
	return response.send("Hello world 2: the enemy now is other!");
});

router.post("/foo/post", (request, response) => {
	return response.status(StatusCodes.OK).json(request.body);
});

export { router };
