import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const bodyType = async (req: Request, res: Response, next: any) => {
	if(req.body !== null && typeof req.body == "object" && !Array.isArray(req.body))
		return next();
	else
		return res.status(StatusCodes.BAD_REQUEST).json({ error: "the body must be an object" });
}
