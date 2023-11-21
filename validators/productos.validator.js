import { check } from 'express-validator'
import productoMiddleware from '../middlewares/productos.middleware.js'

const productoDeleteValidator = [
    // Tengo que tener un array de Middleware
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado producto'),
    productoMiddleware // Este middleware decide = si pasa || no pasa (si no cumple o hay errores)
]

const productoCreateValidator = [

    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es obligatorio')
        .isLength({ max: 20 })
        .withMessage('Maximo 20 caracteres'),
    check('detalles')
        .notEmpty()
        .trim()
        .withMessage('Los detalles son obligatorios')
        .isLength({ max: 300 })
        .withMessage('El maximo es 300 caracteres'),
    // check('foto')
    //     .isURL(),
    check('precio')
        .notEmpty()
        .withMessage('Ingrese un número de precio')
        // .isNumeric()
        // .withMessage('El precio debe ser un número')
        .isFloat({ gt: 0 })
        .withMessage('Ingrese un número de precio (mayor a cero)')
         .isLength({ max: 10 })
         .withMessage('Maximo 10 caracteres'),
    check('stock')
        .notEmpty()
        .withMessage('Ingrese un número de stock')
        // .isNumeric()
        // .withMessage('El stock debe ser un número')
        .isInt({ gt: -1 })
        .withMessage('Ingrese un valor de stock (mayor o igual a cero)')
         .isLength({ max: 10 })
         .withMessage('Maximo 10 caracteres'),
    check('marca')
        .notEmpty()
        .trim()
        .withMessage('La marca es obligatoria')
        .isLength({ max: 30 })
        .withMessage('Maximo 30 caracteres'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoría es obligatoria')
        .isLength({ max: 30 })
        .withMessage('Maximo 30 caracteres'),
    check('envio')
        .isBoolean()
        .withMessage('El campo envío debe ser un valor booleano (true or false)'),
    productoMiddleware
]


const productoUpdateValidator = [

    check('id')
        .isMongoId()
        .withMessage('El ID del producto no es válido para la actualización del producto'),
    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es obligatorio')
        .isLength({ max: 20 })
        .withMessage('Maximo 20 caracteres'),
    check('detalles')
        .notEmpty()
        .trim()
        .withMessage('Los detalles son obligatorios')
        .isLength({ max: 300 })
        .withMessage('El maximo es 300 caracteres'),
    check('precio')
        .notEmpty()
        .withMessage('Ingrese un número de precio')
        .isFloat({ gt: 0 })
        .withMessage('Ingrese un número de precio (mayor a cero)')
        .isLength({ max: 10 })
        .withMessage('Maximo 10 caracteres'),
    check('stock')
        .notEmpty()
        .withMessage('Ingrese un número de stock')
        .isInt({ gt: -1 })
        .withMessage('Ingrese un valor de stock (mayor o igual a cero)')
        .isLength({ max: 10 })
        .withMessage('Maximo 10 caracteres'),
    check('marca')
        .notEmpty()
        .trim()
        .withMessage('La marca es obligatoria')
        .isLength({ max: 30 })
        .withMessage('Maximo 30 caracteres'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoría es obligatoria')
        .isLength({ max: 30 })
        .withMessage('Maximo 30 caracteres'),
    check('envio')
        .isBoolean()
        .withMessage('El campo envío debe ser un valor booleano (true or false)'),
    productoMiddleware
]

const productoReadOneValidator = [
    check('id')
        .isMongoId()
        .withMessage('El ID del producto que estas buscando no existe'),
    productoMiddleware
];

export default {
    productoDeleteValidator,
    productoCreateValidator,
    productoReadOneValidator,
    productoUpdateValidator
}