import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
import dotenv from 'dotenv/config'

const app = express();
const port = process.env.PORT_SERVER || 4000;

db.authenticate()
    .then( () =>  console.log('DB conectada'))
    .catch( error =>  console.error(error))

app.set('view engine', 'pug')

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended:true }))

app.use(express.static('public'))

//get year actual
app.use( (req, res, next) => {
    res.locals.unaVar
    const year = new Date()

    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; // Los meses comienzan en 0, por lo que se suma 1 para obtener el mes actual
    const anioActual = fechaActual.getFullYear();


    // Obtener la fecha 20 días después
    const fecha20DiasDespues = new Date(fechaActual.getTime() + (20 * 24 * 60 * 60 * 1000));
    const dia20DiasDespues = fecha20DiasDespues.getDate();
    const mes20DiasDespues = fecha20DiasDespues.getMonth() + 1;
    const anio20DiasDespues = fecha20DiasDespues.getFullYear();


    // Agregar las variables al objeto res.locals
    res.locals.actualYear = year.getFullYear()
    res.locals.fechaActual = diaActual
    res.locals.mesActual = obtenerNombreMes(fechaActual.getMonth());
    res.locals.anioActual = anioActual

    res.locals.dia20DiasDespues = dia20DiasDespues
    res.locals.mes20DiasDespues = obtenerNombreMes(fecha20DiasDespues.getMonth());
    res.locals.anio20DiasDespues = anio20DiasDespues
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
})

function obtenerNombreMes(numeroMes) {
    const nombresMeses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    return nombresMeses[numeroMes];
}

app.use('/', router);

app.listen(port, () => {
    // console.log(`Servidor ejecutandose en el puerto ${port}`);
})