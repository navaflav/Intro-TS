import { calculaISV, Producto } from "./06-desesructuracion-funcion";
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = []; [
    {
        desc: 'Telefono 1' ,
        precio: 100
    },
    {
        desc: 'Telefono 1' ,
        precio: 100
    },

];

const [total, isv] = calculaISV( carritoCompras );

console.log('Total', total );
console.log('ISV', isv)