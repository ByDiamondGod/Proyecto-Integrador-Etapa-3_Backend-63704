import { check } from 'express-validator'
import routerUpload from '../middlewares/upload.middleware.js'

const uploadValidator = [
  check('foto')
  .isEmpty()
  .withMessage('La foto es obligatoria'),
  routerUpload // Este middleware decide = si pasa || no pasa (si no cumple o hay errores)
]

export default {
  uploadValidator,
}
