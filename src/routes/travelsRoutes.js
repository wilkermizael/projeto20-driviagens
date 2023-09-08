import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaTravels from "../schemas/travelsSchema.js";
import { choiceTravels } from "../controllers/travelsController.js";
const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(schemaTravels), choiceTravels);

export default travelsRouter