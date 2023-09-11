import { Router } from "express";
import {createFlights,  getFlights } from "../controllers/flightsController.js";
import dateSchema from "../middlewares/dateSchema.js";

const flightsRouter = Router()

flightsRouter.post('/flights',dateSchema(),createFlights)
flightsRouter.get('/flights', getFlights)

export default flightsRouter

