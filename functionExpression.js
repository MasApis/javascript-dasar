// Function expression
/*
    Function expression terdiri dari dua kata, yaitu "function" dan "expression". Kita sudah mengenal function, begitu juga dengan expression. Lantas, function expression dapat kita artikan sebagai kode yang mengembalikan nilai function. Bagaimana bentuknya, ya?
*/

const greetingInformatika = function (message) {
    console.log(message);
}
greetingInformatika("Halo informatic engginering UMRAH");

const convertCelciusToFahrenheit = function (temperature) {
    return 9 / 5 * temperature + 32;
}
const temperatureInFahrenheit = convertCelciusToFahrenheit(50);
console.log("50 Celcius = ", temperatureInFahrenheit); 

/*
    Perbedaan lainnya dari function expression ialah tidak memiliki hoisting padanya sehingga kita tidak dapat memanggil atau menjalankan function ini sebelum dideklarasikan.
*/

/*
    Jika ada bahasa pemrograman yang mengatakan bahwa function dapat diperlakukan layaknya variabel, function tersebut dinyatakan sebagai first-class citizen. Apa maksud dari diperlakukan mirip variabel?

    Pada JavaScript, function dapat kita jadikan sebagai nilai dan disimpan dalam variabel, nilai argumen function lain, mengembalikan nilai function dari suatu function, dsb. Mari kita lihat contohnya.
*/
function multiply(a, b) {
    return a * b;
}

function calculate(operation, NumA, NumB) {
    return operation(NumA, NumB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/*
    Contoh di atas menunjukkan bahwa function di JavaScript adalah first-class citizen,
    yaitu function bisa diperlakukan seperti nilai (value).

    Function multiply menerima 2 parameter (a dan b) dan mengembalikan hasil perkalian.
    Function calculate menerima 3 parameter: operation, NumA, dan NumB.
    Di dalam calculate, parameter operation diperlakukan sebagai function
    yang dipanggil dengan argumen NumA dan NumB.

    Pada saat pemanggilan calculate, argumen pertama diisi dengan function multiply.
    Maka parameter operation berisi referensi ke function multiply.
    Itulah sebabnya ketika operation(NumA, NumB) dijalankan,
    hasilnya sama saja dengan memanggil multiply(NumA, NumB).
*/

// Bagaimana dengan mengembalikan nilai function dari suatu function? Mari kita lihat contohnya.
function multipler(x) {
    return function (num) {
        return x * num;
    }
}

const double = multipler(2);
const triple = multipler(3);

console.log(double(12));
console.log(triple(12));
/*
    - JavaScript memperlakukan function sebagai first-class citizen.
    - Artinya, function bisa dikembalikan dari function lain.
    - Pada contoh ini, multiplier(factor) mengembalikan sebuah function
      yang menerima parameter number dan mengalikannya dengan factor.
    - Ketika multiplier(2) dipanggil, ia mengembalikan function baru
      yang selalu mengalikan input dengan 2 (double).
    - Ketika multiplier(5) dipanggil, ia mengembalikan function baru
      yang selalu mengalikan input dengan 5 (quintuple).
    - Inilah contoh function yang mengembalikan function lain,
      sekaligus menunjukkan kekuatan first-class citizen dan closure.
*/