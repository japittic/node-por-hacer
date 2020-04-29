const descripcion = {
    descripcion: {
        demand: true,
        alias: 'c',
        desc: "Descripcion de la tarea por hacer"
    }
};

const completado = {
    completado: {
        default: true,
        aliac: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion

    })
    .command('actualizar', 'Actualizar un registro', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar el registro deseado', {
        descripcion
    })
    .help()
    .argv;




module.exports = {
    argv
}