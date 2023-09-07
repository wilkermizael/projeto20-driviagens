import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaCities from "../schemas/citiesSchema.js";
import choiceCities from "../controllers/citiesController.js";

const citiesRouter = Router()

citiesRouter.post('/cities',validateSchema(schemaCities),choiceCities)

export default citiesRouter