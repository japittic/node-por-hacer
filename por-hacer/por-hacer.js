const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new console.error('No se pudo grabar', err);

    });
}


const cargarDb = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error)

    {
        listadoPorHacer = [];
    }


}
const crear = (descripcion) => {


    cargarDb();


    let porhacer = {
        descripcion: descripcion,
        completado: false

    };

    listadoPorHacer.push(porhacer);

    guardarDB();

    return porhacer;
}

const getListado = () => {

    cargarDb();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else { return false; }

}

const borrar = (descripcion) => {

    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {


        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}