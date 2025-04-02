import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { Midlewares } from "../../shared/midleware";

interface IStudent {
	name: string;
	birthday: string;
	classId: string;
}

const bodyValidation: yup.SchemaOf<IStudent> = yup.object().shape({
	name:     yup.string().matches(/^[a-zA-Z]{3}[a-zA-Z ]*$/).required(),
	birthday: yup.string().matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).required(),
	classId:  yup.string().matches(/^[1-3][A-G]$/).required(),
});

export const validateBody = Midlewares.validation("body", bodyValidation);

export const run = (request: Request, response: Response) => {
	const ok = { message: "work in progress" };
	return response.status(StatusCodes.OK).json(ok);
}
