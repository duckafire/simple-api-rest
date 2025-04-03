import { Request, Response } from "express";

import { students } from "./students";
import { inexistentEndpoint } from "./inexistentEndpoint";
import { home } from "./home";

interface IStructure {
	home: any;
	students: any;
	inexistentEndpoint(_: Request, res: Response): Response;
}

export const Controllers: IStructure = {
	students: {...students},
	home,
	inexistentEndpoint,
};
