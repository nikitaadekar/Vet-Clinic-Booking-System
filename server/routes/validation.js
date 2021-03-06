//validation
import Joi from "joi";


//Register Validation

export const registerValidation = (data) => {
    const schema = Joi.object(
        {   name: Joi.string().required(),
            email: Joi.string() .required() .email(),
            password: Joi.string() .min(8) .required()
         });
         return schema.validate(data);

};

//Login Validation

export const loginValidation = (data) => {
    const schema = Joi.object(
        {   email: Joi.string().required() .email(),
            password: Joi.string() .min(8) .required()
         });
         return schema.validate(data);

};





