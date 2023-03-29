import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimonial.js';

const homePage = async ( req, res ) => {
    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));

    promises.push(Testimonial.findAll({
        limit: 3
    }));


    try {
        // pasar al promise
        const resultado =  await Promise.all(promises);
        res.render('home', {
            viajes : resultado[0],
            testimoniales: resultado[1],
            pagina: 'Inicio',
            clase: 'home',
        })
    } catch (error) {
        console.error(error);
    }
}

const aboutPage = ( req, res ) => {
    res.render('about', {
        pagina: 'About'
    })
}

const viajesPage = async ( req, res ) => {
    //consultar db
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const testimonialesPage = async ( req, res ) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.error(error);
    }
}

const detalleViajePage = async ( req, res ) => {
    const { slug } =  req.params
    try {
        const response = await Viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            response,
        })
    } catch (error) {
        console.error(error);
    }
}

export {
    aboutPage,
    detalleViajePage,
    homePage,
    testimonialesPage,
    viajesPage,
}