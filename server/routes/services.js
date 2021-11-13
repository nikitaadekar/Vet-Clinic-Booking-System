import Express from "express";
import Service from '../models/service.js';

const router = Express.Router();

//Get request
router.get('/', async (req, res) => {
    try{
        const services = await Service.find();
        res.json(services);

    } catch(err) {
        res.json({ message: err});
    }
});

//Post Service request
router.post('/', async (req, res) => {
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
    });
    try {
        const savedService = await service.save()
        res.json(savedService);

    } catch (err) {
        res.json({ message: err });
    }


});


//Get Service by id
router.get('/:serviceId', async(req,res) => {
    try{ 
        const service = await Service.findById(req.params.serviceId);
        res.json(service);
    } catch(err){
        res.json({message: err});
    }
    

});

//Delete service
router.delete('/:serviceId', async (req, res) => {
    try{
        const removedService = await Service.remove({_id: req.params.serviceId});
        res.json(removedService);

    }catch(err){
        res.json({message: err});
    
    }
});

//Update service 
router.patch('/:serviceId', async (req, res) => {
    try{
        const updatedService = await Service.updateOne({_id: req.params.serviceId}, 
            {$set: {name: req.body.name, description: req.body.description, cost: req.body.cost}});
        res.json(updatedService);

    }catch(err){
        res.json({message: err});
    
    }

});

// exporting router
//module.exports = router;

export default router;

