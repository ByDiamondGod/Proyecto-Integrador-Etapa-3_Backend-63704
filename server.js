import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'

import routerProductos from './routers/productos.router.js'
import routerUpload from './routers/upload.router.js'
import conectarMongo from './config/conectarMongo.js'
import routerCarrito from './routers/carrito.router.js'

// ! CONFIGURACIONES
const app = express()
const PORT = process.env.PORT || 3000
const corsConfig = {
    origin: process.env.URL_FRONT_CORS
}

// ! CONEXIÓN MONGODB
conectarMongo()

// ! MIDDLEWARES
app.use(express.static(path.join('public'))) // Disponibilizo la carpeta public para que justamente sea de acceso público
app.use(express.urlencoded({extended: true})) // Decodifica el body enviado desde un form
app.use(express.json()) // Decodificar el body enviado desde un json
app.use(cors(corsConfig))

// ! ROUTES
app.use('/api/productos', routerProductos)
app.use('/api/upload', routerUpload)
app.use('/api/carrito', routerCarrito)

app.all('*', (req, res) => {
    res.status(404).send(`La ruta ${req.url} utilizando el ${req.method} no está disponible!`)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})