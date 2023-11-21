import models from '../models/carrito.model.js'
import handleError from '../utils/handleError.js'

const guardarCarrito = async (req, res) => {
    const carrito = req.body
    console.log(carrito)

    try {
        const carritoGuardado = await models.crearCarrito(carrito)
        res.status(201).json(carritoGuardado)
    } catch (error) {
        handleError(res, '[guardarCarrito]: No pudo guardar el producto', error);
    }

}

export default {
    guardarCarrito
}