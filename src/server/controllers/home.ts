import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const home = (req: Request, res: Response) => {
	return res.status(StatusCodes.OK).json({ "home-message": "Hello world!" });
};
