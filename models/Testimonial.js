import Sequelize from 'sequelize';
import db from '../config/db.js';

const table_name = 'testimoniales'

export const Testimonial = db.define(table_name, {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});
