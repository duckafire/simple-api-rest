import { Request, Response } from "express";
import StatusCode from "http-status-codes";

export const inexistentEndpoint = (_: Request, res: Response) => {
	return res.status(StatusCode.BAD_REQUEST).json({ error: "Inexistent endpoint" });
}
