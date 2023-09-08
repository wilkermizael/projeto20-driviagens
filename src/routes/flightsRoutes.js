import { Router } from "express";
import createFlights from "../controllers/flightsController.js";
import dateSchema from "../middlewares/dateSchema.js";
import schemaFlights from "../schemas/flightSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";


const flightsRouter = Router()

flightsRouter.post('/flights',dateSchema(),validateSchema(schemaFlights),createFlights)

export default flightsRouter