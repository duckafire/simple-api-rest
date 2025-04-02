import * as create from "./create";

interface IStructure {
	create: any;
}

export const students: IStructure = {
	create: {...create},
}
