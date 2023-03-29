import express from 'express'
import { homePage, aboutPage, viajesPage, testimonialesPage, detalleViajePage } from '../controllers/paginasController.js'
import { saveTestimonialesPage } from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/viajes', viajesPage);
router.get('/viajes/:slug', detalleViajePage);
router.get('/testimoniales', testimonialesPage);

router.post('/testimoniales', saveTestimonialesPage);

export default router