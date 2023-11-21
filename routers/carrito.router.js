import express from 'express'
import controller from '../controllers/carrito.controller.js'
import validator from '../validators/carrito.validator.js'

const routerCarrito = express.Router()

// ! Hacer un post (Create) para guardar el carrito en Mongo DB
// * http://localhost:8080/api/carrito/

 routerCarrito.post('/', validator.carritoValidator, controller.guardarCarrito)

export default routerCarrito
