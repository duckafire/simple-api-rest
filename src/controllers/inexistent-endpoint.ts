import {Request, Response} from "express";
import StatusCode from "http-status-codes";

const main = (_: Request, res: Response): Response => {
	return res.status(StatusCode.NOT_FOUND).json({
		error: "inexistent endpoint"
	});
};

export default main;
