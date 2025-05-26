import Joi from 'joi';
const taskSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'O campo title é obrigatório.',
    'any.required': 'O campo title é obrigatório.',
  }),
  description: Joi.string().allow('', null), // Permite que a descrição seja uma string vazia ou nula
  status: Joi.boolean().optional() // Adicionando o campo status como opcional
});
export function validateTask(req, res, next) {
  const { error } = taskSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      details: error.details.map((err) => ({
        message: err.message,
        field: err.context.key,
      })),
    });
  }
  next();
}