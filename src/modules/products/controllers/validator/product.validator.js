import joi from "joi";

export const CreateProductValidator = joi.object({
  id: joi.number().optional(),
  title: joi.string().required(),
  description: joi.string().optional(),
  price: joi.number().optional().default(0),
});

export const UpdateProductValidator = joi.object({
  title: joi.string().required(),
  description: joi.string().optional(),
  price: joi.number().required()
});

export const FindByTitleProductValidator = joi.object({
  title: joi.string().required()
});

