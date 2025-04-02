import { Request, Response, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { SchemaOf, ValidationError } from "yup";

export interface IValidation {
	(field: "body"|"header"|"params"|"query", schema: SchemaOf<any>): RequestHandler;
}

export const validation: IValidation = (field, schema) => {
	return async (req: Request, res: Response, next: any) => {

		try{
			await schema.validate(req[field], { abortEarly: false });
			return next();
		
		}catch(err){
			const yupError = err as ValidationError;
			const errorList: Record<string, string> = {};

			yupError.inner.forEach((error) => {
				if(error.path === undefined)
					return;

				errorList[error.path] = error.message;
			});

			return res.status(StatusCodes.BAD_REQUEST).json(errorList);
		}

	}
}
