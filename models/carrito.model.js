import mongoose from "mongoose"

// ! CREAMOS EL ESQUEMA

const carritoSchema = mongoose.Schema({
    carrito: Array
})

// ! A partir del SCHEMA creo el MODELO
const CarritoModel = mongoose.model('carritos', carritoSchema)

/* ------------------------------------------------------------------- */
/* Métodos que nos van a servir de interfaz para interactuar con la DB */
/* ------------------------------------------------------------------- */

// - Crear Carrito

const crearCarrito = async (carrito) => {

    try {
        const carritoCreado = new CarritoModel({ carrito }) // tiene que recibir un obj
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado
    } catch (error) {
        console.log('ERROR[crearCarrito]: No se pudo crear', error)
    }

}

export default {
    crearCarrito
}

