import express from 'express';
import { protectAdmin } from '../middlewares/auth.js';
import { getAllBookings, getAllShows, getDashboardData } from '../controllers/admin.controller.js';
import { isAdmin } from '../controllers/admin.controller.js';
const adminRouter=express.Router();
adminRouter.get('/is-admin',protectAdmin,isAdmin)
adminRouter.get('/dashboard',protectAdmin,getDashboardData)
adminRouter.get('/all-shows',protectAdmin,getAllShows)// console.log(user.privateMetadata);
adminRouter.get('/all-bookings',protectAdmin,getAllBookings)
export default adminRouter;