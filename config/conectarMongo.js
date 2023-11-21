import mongoose from 'mongoose'

const conectarMongo = async () => {

    try {
        await mongoose.connect(process.env.URI_LOCAL)
        //await mongoose.connect(process.env.URI_REMOTA)
        console.log('Conexión a Mongo realizada con éxito!')
    } catch (error) {
        console.log('Error al conectar a Mongo DB', error)
    }
}
export default conectarMongo