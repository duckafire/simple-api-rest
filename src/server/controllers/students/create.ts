import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IStudent {
	name: string;
	birthday: string;
	classId: string;
};

const studentValidation: yup.SchemaOf<IStudent> = yup.object().shape({
	name:     yup.string().matches(/^[a-zA-Z]{3}[a-zA-Z ]*$/).required(),
	birthday: yup.string().matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).required(),
	classId:  yup.string().matches(/^[1-3][A-G]$/).required(),
});

export const validBody: RequestHandler = async (request:Request<{}, {}, IStudent>, response: Response, next: any) => {
	try {
		await studentValidation.validate(request.body, {abortEarly: false});
		return next();

	}catch(err){
		const yupError = err as yup.ValidationError;
		const errorList: Record<string, string> = {};

		yupError.inner.forEach(error => {
			if(error.path === undefined)
				return;

			errorList[error.path] = error.message;
		});

		return response.status(StatusCodes.BAD_REQUEST).json(errorList);
	}
}

export const create = (request: Request, response: Response) => {
	const ok = { message: "work in progress" };
	return response.status(StatusCodes.OK).json(ok);
}
