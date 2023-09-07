import { Router } from "express"
import passengerRouter from "./passengerRoutes.js"
import citiesRouter from "./citiesRoutes.js"
import flightsRouter from "./flightsRoutes.js"

const router = Router()

router.use(passengerRouter)
router.use(citiesRouter)
router.use(flightsRouter)
export default router