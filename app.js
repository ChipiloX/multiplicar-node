/*
//Tipos de paquetes
-Nativos de node
-Importados
-PropiosExistentes en el proyectos
*/
//let base = '7';

//console.log(process.argv);
//const multiplicar = require('./Multiplicar/multiplicar');


const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case ('crear'):
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



//let argv2 = process.argv;

//console.log(argv.base);

//console.log('Limite', argv.limite);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);