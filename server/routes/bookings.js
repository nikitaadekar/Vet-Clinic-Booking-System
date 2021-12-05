import Express from "express";
import Booking from '../models/Booking.js';
import Verifier from "./verifyToken.js";


const router = Express.Router();

//Get request
/**
 * @swagger
 * /bookings:
 *  
 *  get:
 *      description: Use to request all bookings.
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - bookings
 */
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);

    } catch (err) {
        res.json({ message: err });
    }
});

//Post Booking request
/**
 * @swagger
 * /bookings:
 *  post:
 *      description: Use to post all bookings.
 *      responses:
 *          '200':
 *              description: A successful response. 
 *      tags: 
 *          - bookings
 */
router.post('/', async (req, res) => {
    const booking = new Booking({
        serviceId: req.body.serviceId,
        clientInformation: req.body.clientInformation,
        bookedTime: req.body.bookedTime,
        serviceName: req.body.serviceName,


    });
    try {
        const savedBooking = await booking.save()
        res.json(savedBooking);

    } catch (err) {
        res.json({ message: err });
    }


});


//Get Booking by id
/**
 * @swagger
 * /bookings/{bookingId}:
 *  get:
 *      description: Use to request all bookings by Id.
 *      parameters:
 *         - in: path
 *           name: bookingId   
 *           required: true
 *           schema:
 *                  type: string
 *                  minimum: 1
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - bookings
 */
//protected
router.get('/:bookingId', Verifier, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.bookingId);
        res.json(booking);
    } catch (err) {
        res.json({ message: err });
    }


});

//Delete booking
/**
 * @swagger
 * /bookings/{bookingId}:
 *  delete:
 *      description: Use to delete a booking.
 *      parameters:
 *         - in: path
 *           name: bookingId   
 *           required: true
 *           schema:
 *                  type: string
 *                  minimum: 1
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - bookings
 */
//protected
router.delete('/:bookingId', Verifier, async (req, res) => {
    try {
        const removedBooking = await Booking.remove({ _id: req.params.bookingId });
        res.json(removedBooking);

    } catch (err) {
        res.json({ message: err });

    }
});

//Update booking 
/**
 * @swagger
 * /bookings/{bookingId}:
 *  patch:
 *      description: Use to update a booking.
 *      parameters:
 *         - in: path
 *           name: bookingId   
 *           required: true
 *           schema:
 *                  type: string
 *                  minimum: 1
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - bookings
 */

//protected
router.patch('/:bookingId', Verifier, async (req, res) => {
    try {
        const updatedBooking = await Booking.updateOne({ _id: req.params.bookingId },
            {
                $set: {
                    serviceId: req.body.serviceId,
                    clientInformation: req.body.clientInformation,
                    bookedTime: req.body.bookedTime,
                    status: req.body.status
                }
            });
        res.json(updatedBooking);

    } catch (err) {
        res.json({ message: err });

    }

});

// exporting router
//module.exports = router;

export default router;

