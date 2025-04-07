import { Request, Response, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { SchemaOf, ValidationError } from "yup";

type TProperty      = "body" | "header" | "params" | "query";
type TAllSchemas    = Record<TProperty, SchemaOf<any>>;
type TGetSchema     = <T>(schema: SchemaOf<T>) => SchemaOf<T>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation    = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req: Request, res: Response, next: any) => {
	const schemas = getAllSchemas(schema => schema);

	const totalErrors: Record<string, Record<string, string>> = {};

	Object.entries(schemas).forEach(( [field, schema] ) => {
		try{
			schema.validateSync(req[field as TProperty], { abortEarly: false });
		
		}catch(err){
			const yupError = err as ValidationError;
			const errorList: Record<string, string> = {};

			yupError.inner.forEach((error) => {
				if(error.path === undefined)
					return;

				errorList[error.path] = error.message;
			});

			totalErrors[field] = errorList;
		}
	});

	if(Object.entries(totalErrors).length == 0)
		return next();

	return res.status(StatusCodes.BAD_REQUEST).json(totalErrors);
}
