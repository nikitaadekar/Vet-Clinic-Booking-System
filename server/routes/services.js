import Express from "express";
import Service from '../models/service.js';

const router = Express.Router();

//Get request
/**
 * @swagger
 * /services:
 *  
 *  get:
 *      description: Use to request all services.
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - services
 */
router.get('/', async (req, res) => {
    try{
        const services = await Service.find();
        res.json(services);

    } catch(err) {
        res.json({ message: err});
    }
});

//Post Service request
/**
 * @swagger
 * /services:
 *  post:
 *      description: Use to post all services.
 *      responses:
 *          '200':
 *              description: A successful response. 
 *      tags: 
 *          - services
 */
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
/**
 * @swagger
 * /services/{serviceId}:
 *  get:
 *      description: Use to request all services by Id.
 *      parameters:
 *         - in: path
 *           name: serviceId   
 *           required: true
 *           schema:
 *                  type: string
 *                  minimum: 1
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - services
 */
router.get('/:serviceId', async(req,res) => {
    try{ 
        const service = await Service.findById(req.params.serviceId);
        res.json(service);
    } catch(err){
        res.json({message: err});
    }
    

});

//Delete service
/**
 * @swagger
 * /services/{serviceId}:
 *  delete:
 *      description: Use to delete services.
 *      parameters:
 *         - in: path
 *           name: serviceId   
 *           required: true
 *           schema:
 *                  type: string
 *                  minimum: 1
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - services
 */
router.delete('/:serviceId', async (req, res) => {
    try{
        const removedService = await Service.remove({_id: req.params.serviceId});
        res.json(removedService);

    }catch(err){
        res.json({message: err});
    
    }
});

//Update service 
/**
 * @swagger
 * /services/{serviceId}:
 *  patch:
 *      description: Use to update a service.
 *      parameters:
 *         - in: path
 *           name: serviceId   
 *           required: true
 *           schema:
 *                  type: string
 *                  minimum: 1
 *      responses:
 *          '200':
 *              description: A successful response.
 *      tags: 
 *          - services
 */
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

