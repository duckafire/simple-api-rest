import { Router } from "express";

import { Controllers } from "../controllers";
import { Midlewares } from "../shared/midlewares/"

const router = Router();

router.post("/students/create", Midlewares.bodyType, Controllers.students.create.validations, Controllers.students.create.run);
router.use(Controllers.inexistentEndpoint);

export { router };
