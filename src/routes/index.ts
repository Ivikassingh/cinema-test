import { Router } from 'express'
import CinemaRouter from "./cinema"
const router = Router()

router.use('/cinema', CinemaRouter)

export default router

