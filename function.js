let nilaiPanjang = 12;
let nilaiLebar = 200;
let hasilConvert;


// function dengan dua parameter dan dua argument
// function luasPersegiPanjang(panjang, lebar) {
//      const hasil = panjang * lebar;
//      return hasil;
// }

// function expression
// const luasPersegiPanjang = function (panjang, lebar) {
//      const hasil = panjang * lebar;
//      return hasil;
// }

// const hasilLuasPersegiPanjang = luasPersegiPanjang(nil2aiPanjang, nilaiLebar);
// console.log("hasil = " + hasilLuasPersegiPanjang);

// function dengan 1 parameter dan 1 argumen
//convert celcius to fahrenheit
// let celcius = 12;

// function celciusToFahrenheit(suhu) {
//      const convertCelciusToFahrenheit = 9 / 5 * suhu + 32;
//      console.log(convertCelciusToFahrenheit + "F");
// }

// celciusToFahrenheit(celcius);

// const celciusToFahrenheit = (suhu) => {
//      const convertCelciusToFahrenheit = 9 / 5 * suhu + 32;
//      return convertCelciusToFahrenheit;
// }

// console.log(celciusToFahrenheit(34));  

const celciusToFahrenheit = (suhu) => 9 / 5 * suhu + 32;
hasilConvert = celciusToFahrenheit(34);
console.log(hasilConvert);


// First-Class Citizen(jika function dikatakan bisa menyimpan/mengembalikkan nilai layaknya sebuah variable)
// function multiply(a, b) {
//      return a * b;
// }

// function calculate(operation, numA, numB) {
//      return operation(numA, numB);
// }

// const hasil = calculate(multiply, 2, 10);
// console.log(hasil);

function greet(name) {
     return `HALO, ${name}`;
}

function displayMessage1(func, value) {
     return func(value);
}

const hasil = displayMessage1(greet, "ABDUL");
// console.log(hasil);
