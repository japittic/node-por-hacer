// const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
const porhacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porhacer.getListado();
        for (let tarea of listado) {
            console.log('==========Por Hacer============='.green);
            console.log('================================');
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('==========00000000000000========'.green);



        }


        break;

    case 'actualizar':

        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':

        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');

}

// Para borrar
// node app borrar -d "Bienvenidos a la cripta"

// Para crear
// node app crear -c "Mami que sera lo que quiere el negro"
// Para actualizar
// node app actualizar -d comer -c true
// Para listar 
// node app listar