import { Router } from "express";
import createFlights from "../controllers/flightsController.js";


const flightsRouter = Router()

flightsRouter.post('/flights',createFlights)

export default flightsRouter