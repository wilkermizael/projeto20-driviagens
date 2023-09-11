import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaTravels from "../schemas/travelsSchema.js";
import { choiceTravels, getTravels } from "../controllers/travelsController.js";
const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(schemaTravels), choiceTravels);
travelsRouter.get("/travels", getTravels);

export default travelsRouter