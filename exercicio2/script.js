// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const aNumeros = [1,7,49,76,4,31,484,12]

const triplos = aNumeros.map(numero=> numero * 3)
console.log(triplos)
const metades = aNumeros.map(numero=> numero / 2)
console.log(metades)