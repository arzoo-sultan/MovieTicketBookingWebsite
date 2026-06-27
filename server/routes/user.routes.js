import { requireAuth } from '@clerk/express';
import express from 'express'
import { getFavourites, getUserBookings, updateFavourite } from '../controllers/user.controller.js';
const userRouter=express.Router();
userRouter.get('/bookings',getUserBookings)
userRouter.get('/update-favourite',updateFavourite)
userRouter.get('/favourites',requireAuth(),getFavourites)
export default userRouter;