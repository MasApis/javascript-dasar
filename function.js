// Function

/*
    fitur hoisting dalam JavaScript. Fitur ini memungkinkan kita menulis kode pemanggilan sebelum kode pendeklarasian function. Berikut contohnya.
*/
greetInformatika();

function greetInformatika() {
    console.log("Halo dunia informatika");
}

// konversi celcius to fahrenheit
function konversi(celcius = 50) {
    const celciusToFahrenheit = 9 / 5 * celcius + 32;
    console.log(`${celcius} Celcius = ${celciusToFahrenheit} Fahrenheit`)
}

konversi();
konversi(90);
konversi(50);
konversi(70);
konversi(100);

// Retrun value
function multipicationNumbers(a, b) {
    const result = a * b;
    return result;
}
const result = multipicationNumbers(200, 12);

console.log("200 + 12 = ", multipicationNumbers(200, 12));
console.log(`200 + 12 = ${result}`);
console.log("200 + 12 = ", result);

/*
     sebagai developer aplikasi JavaScript adalah program dalam function akan terhenti jika eksekusi kode sudah mencapai return statement. Artinya, seluruh kode yang mengikuti statement ini tidak akan dijalankan. JavaScript akan menganggap program function sudah selesai jika statement ini sudah dibaca.

    Perhatikan contoh kasus dan output yang dihasilkan berikut.
*/
function greetingWorld() {
    return "hello world"
    console.log("hello beutifull worlddd")
}

const greeting = greetingWorld();
console.log(greeting);