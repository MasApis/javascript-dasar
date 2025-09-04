// Arrow function

let temperatureInFahrenheit = null;

// deklarasi function dengan regular function
const celciusToFahrenheit = function (temperature) {
    return 9 / 5 * temperature + 32
}

temperatureInFahrenheit = celciusToFahrenheit(50);
console.log("50 Celcius = ", temperatureInFahrenheit, " (regular function)")

// deklarasi function dengan arrow function
const convertCelciusToFahrenheit = (temperature) => {
    return 9 / 5 * temperature + 32;
}
temperatureInFahrenheit = convertCelciusToFahrenheit(70);
console.log("70 Celcius = ", temperatureInFahrenheit, " (arrow function)")

/*
    Arrow function ternyata menghilangkan kewajiban kita menaruh kata kunci function di sana. Sebagai gantinya, kita wajib menambahkan tanda panah (=>) setelah parameter. Ini disebut sebagai notasi fat arrow. Selain itu, arrow function juga memiliki function body sebagaimana regular function.
*/


// Refactor
// Arrow function versi ringkas
const convertCelciusToFahrenheitInConciseSyntax = (temperature) =>
    9 / 5 * temperature + 32;

temperatureInFahrenheit = convertCelciusToFahrenheitInConciseSyntax(70);
console.log("70 Celcius = ", temperatureInFahrenheit, " (arrow function versi ringkas)")
/*
    Lihat! Function convertCelsiusToFahrenheitInConciseSyntax memiliki penulisan sintaksis yang sangat sederhana. Jauh lebih sederhana dari sebelumnya. Di sana kita menghilangkan beberapa hal, yaitu tanda kurung kurawal dan keyword return. Sebagai gantinya, return value langsung diletakkan setelah fat arrow. Wah, hebat sekali, ya!
*/