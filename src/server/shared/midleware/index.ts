import { validation, IValidation } from "./validation";

interface IStructure {
	validation: IValidation;
}

export const Midlewares: IStructure = {
	validation,
};
