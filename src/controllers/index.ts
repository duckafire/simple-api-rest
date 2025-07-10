import {default as helloWorld}         from "./hello-world/";
import {default as inexistentEndpoint} from "./inexistent-endpoint";

const main = {
	helloWorld,
	defaults: {
		inexistentEndpoint,
	}
}

export default main;
