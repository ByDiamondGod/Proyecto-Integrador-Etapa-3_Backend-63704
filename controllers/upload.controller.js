const uploadImagen = (req, res) => {
    try {
        const file = req.file

        if (!file) {
            throw new Error('No se recibió ninguna imagen');
        }

        // console.log(req.protocol) // http o https
        // console.log(req.get('host')) // localhost:8080
        // console.log(file.filename) // nombre del archivo
        // console.log(urlCompletaBack)

        const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
        res.status(201).json({ foto: urlCompletaBack });
    } catch (error) {
        handleError(res, '[uploadImagen] Error al procesar la foto', error);
    }
};

export default {
    uploadImagen
};

