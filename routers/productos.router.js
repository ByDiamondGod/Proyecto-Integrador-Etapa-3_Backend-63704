import express from 'express'
const routerProductos = express.Router()
import controller from '../controllers/productos.controller.js'
import validator from '../validators/productos.validator.js'

/* ------------------------------------- */
/* CRUD COMPLETO DE PRODUCTOS            */
/* ------------------------------------- */

// ! GET ONE / ALL  (READ) - request de todos los productos
// http:/localhost:8080/api/productos | GET ALL
routerProductos.get('/', controller.obtenerProductos)

// http:/localhost:8080/api/productos/id | GET ONE
routerProductos.get('/:id', validator.productoReadOneValidator, controller.obtenerProductos) // :id? -> ? params no obligatorio

// ! POST (CREATE) - request para agregar un producto
// http:/localhost:8080/api/productos | POST
routerProductos.post('/', validator.productoCreateValidator, controller.guardarProducto)

// ! PUT (UPDATE) - request para actualizar un producto
// http:/localhost:8080/api/productos/id | PUT
routerProductos.put('/:id', validator.productoUpdateValidator, controller.actualizarProducto)

// ! DELETE (DELETE) - request para eliminar un producto
// http:/localhost:8080/api/productos/id | DELETE
routerProductos.delete('/:id', validator.productoDeleteValidator, controller.borrarProducto)

export default routerProductos
