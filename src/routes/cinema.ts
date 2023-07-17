import { Router } from 'express'
import { createCinema } from '../controller/cinema';
const CinemaRouter = Router()

CinemaRouter.post('/',createCinema);
// CinemaRouter.post('/:cinemaId/seats/:seatNumber/purchase', purchaseSeat);
// CinemaRouter.post('/:cinemaId/seats/purchase-consecutive',purchaseConsecutiveSeats);

export default CinemaRouter;