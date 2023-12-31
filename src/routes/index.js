import { Router } from "express"
import passengerRouter from "./passengerRoutes.js"
import citiesRouter from "./citiesRoutes.js"
import flightsRouter from "./flightsRoutes.js"
import travelsRouter from "./travelsRoutes.js"

const router = Router()

router.use(passengerRouter)
router.use(citiesRouter)
router.use(flightsRouter)
router.use(travelsRouter);
export default router