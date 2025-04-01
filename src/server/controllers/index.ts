import { students } from "./students";
import { inexistentEndpoint } from "./inexistentEndpoint"

interface anything {
	students: any;
	inexistentEndpoint: any;
}

export const Controllers: anything = {
	students: {...students},
	inexistentEndpoint,
};
