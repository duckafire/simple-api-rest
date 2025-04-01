import { Router } from "express";

import { Controllers } from "./../controllers";

const router = Router();

router.post(
	"/students/create",
	Controllers.students.validBody,
	Controllers.students.create
);

router.use(Controllers.inexistentEndpoint);

export { router };
