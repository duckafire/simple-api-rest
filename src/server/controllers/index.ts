import { Request, Response } from "express";

import { students } from "./students";
import { inexistentEndpoint } from "./inexistentEndpoint"

interface IStructure {
	students: any;
	inexistentEndpoint(_: Request, res: Response): Response;
}

export const Controllers: IStructure = {
	students: {...students},
	inexistentEndpoint,
};
