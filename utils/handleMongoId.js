const handleMongoId = (elemento) => { // un (array) de productos o un (obj) de producto
    const pk = '_id' // primary key

    elemento = JSON.parse(JSON.stringify(elemento)) // Convertir un obj de mongo a un obj de js

    if ( Array.isArray(elemento) ) { // true si es un array o false si es un obj
        /* Si es un array -> hago algo */

        for (let i = 0; i < elemento.length; i++) {
            elemento[i].id = elemento[i][pk] // productos[0].id = productos[0]._id
            delete elemento[i][pk]  // delete productos[0]._id
        }

    } else {
        /* Si no es un array -> Un obj -> hago algo */
        elemento.id = elemento[pk] //  producto.id = producto._id
        delete elemento[pk]  // delete producto._id
    }

    return elemento // obj

}

export default handleMongoId