import { body } from 'express-validator';
import carritoMiddleware from '../middlewares/carritos.middleware.js';

const carritoValidator = [
  body()
      .isArray()
      .withMessage('El carrito debe ser un array de productos'),
  carritoMiddleware
]

export default {
  carritoValidator
}