import { Request, Response } from "express";
import StatusCode from "http-status-codes";

const err = '{ "error": "Inexistent endpoint" }';

export const inexistentEndpoint = (_: Request, response: Response) => {
	return response.status(StatusCode.BAD_REQUEST).json(err);
}
