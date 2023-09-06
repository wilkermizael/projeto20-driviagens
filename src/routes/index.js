import { Router } from "express"
import passengerRouter from "./passengerRoutes.js"

const router = Router()

router.use(passengerRouter)
export default router