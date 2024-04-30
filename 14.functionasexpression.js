//Function expression SUBIDO A GITHUB

/*En este caso no se puede hacer como en la declararacion, es decir en la declaracion 
podrias mandarla llamar antes de que la declararas. Sin embargo al establecer una 
funcion como expresion, no es posible por que aparece un error en la CONSOLA*/

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2 (1991);
console.log (age1, age2);

//Arrow
// Función de flecha tradicional
const sumaArrow = (a, b) => {
    return a + b;
}
