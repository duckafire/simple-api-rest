import {Request, Response} from "express";
import StatusCode from "http-status-codes";

const main = (_: Request, res: Response): Response => {
	return res.status(StatusCode.OK).json({
		message: "Hello world!"
	});
};

export default main;
