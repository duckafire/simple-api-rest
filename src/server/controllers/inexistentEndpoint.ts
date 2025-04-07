import { Request, Response } from "express";
import StatusCode from "http-status-codes";

export const inexistentEndpoint = (_: Request, res: Response) => {
	return res.status(StatusCode.NOT_FOUND).json({ error: "inexistent endpoint" });
};
