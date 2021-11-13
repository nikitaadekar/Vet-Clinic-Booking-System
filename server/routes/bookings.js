import Express from "express";
import Booking from '../models/booking.js';

const router = Express.Router();

//Get request
router.get('/', async (req, res) => {
    try{
        const bookings = await Booking.find();
        res.json(bookings);

    } catch(err) {
        res.json({ message: err});
    }
});

//Post Booking request
router.post('/', async (req, res) => {
    const booking = new Booking({
        serviceId: req.body.serviceId,
        clientInformation: req.body.clientInformation,
        bookedTime: req.body.bookedTime,
        status: req.body.status

    });
    try {
        const savedBooking = await booking.save()
        res.json(savedBooking);

    } catch (err) {
        res.json({ message: err });
    }


});


//Get Booking by id
router.get('/:bookingId', async(req,res) => {
    try{ 
        const booking = await Booking.findById(req.params.serviceId);
        res.json(booking);
    } catch(err){
        res.json({message: err});
    }
    

});

//Delete booking
router.delete('/:bookingId', async (req, res) => {
    try{
        const removedBooking = await Booking.remove({_id: req.params.bookingId});
        res.json(removedBooking);

    }catch(err){
        res.json({message: err});
    
    }
});

//Update booking 
router.patch('/:bookingId', async (req, res) => {
    try{
        const updatedBooking = await Booking.updateOne({_id: req.params.bookingId}, 
            {$set: {serviceId: req.body.serviceId, 
                clientInformation: req.body.clientInformation, 
                bookedTime: req.body.bookedTime,
                status: req.body.status
            }});
        res.json(updatedBooking);

    }catch(err){
        res.json({message: err});
    
    }

});

// exporting router
//module.exports = router;

export default router;

