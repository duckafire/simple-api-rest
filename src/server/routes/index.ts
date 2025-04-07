import { Router } from "express";

import { Controllers } from "../controllers";

const router = Router();

router.post("/students/create", Controllers.students.create.validations, Controllers.students.create.run);
router.use(Controllers.inexistentEndpoint);

export { router };
