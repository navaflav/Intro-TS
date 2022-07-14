/*
    ===== Código de TypeScript =====
*/

interface reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
// Desestructuracion de Objetos
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

//console.log('El volumen actual de ' , );
//console.log('El segundo actual de ' , );
//console.log('La canción actual de ' , );
//console.log('El autor es ' , );

// Desestructuracion de Arreglos

const dbz: string[] = [ 'Goku' , 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;


// console.log('Personaje 1: ', dbz[0] );
// console.log('Personaje 2: ', dbz[1] );
console.log('Personaje 3: ', p3 );

