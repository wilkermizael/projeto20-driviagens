import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaPassenger from "../schemas/passengerSchema.js";
import { createPassenger } from "../controllers/passengerController.js";

const passengerRouter = Router()

passengerRouter.post('/passenger',(validateSchema(schemaPassenger)), createPassenger )

export default passengerRouter