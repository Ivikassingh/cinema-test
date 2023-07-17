import { Request, Response } from 'express';
import { Transaction } from 'sequelize'; // Import the Transaction type from your ORM
import { Seat } from '../models/seat';
import { Cinema } from '../models/cinema';
import sequelize from '../config/db';

export async function createCinema(req: Request, res: Response) {
  const totalSeats = req.body.totalSeats;
  const cinema = await Cinema.create({ totalSeats });

  for (let i = 0; i < totalSeats; i++) {
    await Seat.create({ cinemaId: cinema.id, seatNumber: i + 1, isPurchased: false });
  }

  res.json({ cinemaId: cinema.id });
}

// export async function purchaseSeat(req: Request, res: Response) {
//   const { cinemaId, seatNumber } = req.params;

//   // Start a transaction
//   const transaction: Transaction = await sequelize.transaction();

//   try {
//     // Find the seat
//     const seat = await Seat.findOne({ where: { cinemaId, seatNumber } });

//     // If the seat is already purchased, return an error
//     if (seat.isPurchased) {
//       return res.status(400).json({ error: 'Seat is already purchased' });
//     }

//     // Otherwise, purchase the seat
//     seat.isPurchased = true;
//     await seat.save({ transaction });

//     // Commit the transaction
//     await transaction.commit();

//     res.json({ seat });
//   } catch (error) {
//     // If there's an error, rollback the transaction
//     await transaction.rollback();

//     res.status(500).json({ error: 'An error occurred while purchasing the seat' });
//   }
// }

// export async function purchaseConsecutiveSeats(req: Request, res: Response) {
//   const { cinemaId } = req.params;

//   // Start a transaction
//   const transaction: Transaction = await sequelize.transaction();

//   try {
//     // Find all the seats in the cinema that are not purchased
//     const seats = await Seat.findAll({ where: { cinemaId, isPurchased: false } });

//     // Sort the seats by seatNumber
//     seats.sort((a, b) => a.seatNumber - b.seatNumber);

//     // Find two consecutive seats
//     let consecutiveSeats = null;
//     for (let i = 0; i < seats.length - 1; i++) {
//       if (seats[i].seatNumber + 1 === seats[i + 1].seatNumber) {
//         consecutiveSeats = [seats[i], seats[i + 1]];
//         break;
//       }
//     }

//     // If there are no two consecutive seats available, return an error
//     if (!consecutiveSeats) {
//       return res.status(400).json({ error: 'No two consecutive seats available' });
//     }

//     // Otherwise, purchase the seats
//     for (const seat of consecutiveSeats) {
//       seat.isPurchased = true;
//       await seat.save({ transaction });
//     }

//     // Commit the transaction
//     await transaction.commit();

//     res.json({ seats: consecutiveSeats });
//   } catch (error) {
//     // If there's an error, rollback the transaction
//     await transaction.rollback();

//     res.status(500).json({ error: 'An error occurred while purchasing the seats' });
//   }
// }
