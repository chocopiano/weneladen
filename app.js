const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
let comando = argv._[0]
console.log(argv);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`));
        break;
    default:
        console.log('Comando no reconocido');

}




//console.log(process.argv);
let argv2 = process.argv;
//let parametro = process.argv[2];
//let base = parametro.split('=')[1];
//console.log(base);