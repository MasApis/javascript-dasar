// Proses konversi suatu tipe data

// Konversi Eksplisit
// Mengubah ke string
const number = 100; // number
const Boolean1 = true; // boolean

// proses konversi tipe data varible di atas ke string
const numberToString = String(number);
const booleanToString = Boolean1.toString();

console.log(numberToString);
console.log(booleanToString)

// Mengubah ke number
const stringNumber = '100';
const stringFloat = '3.62';
const Boolean2 = true;
const tinggiAbdul = '180CM';
const beratAbdul = '48.9KG';

// proses konversi tipe data variable di atas ke number
const stringNumberToNumber = Number(stringNumber);
const stringFloatToNumber = Number(stringFloat);
const BooleanToNumber = Number(Boolean2);
/* 
    Selain dengan fungsi Number(), ada juga cara yang lebih spesifik, seperti fungsi parseInt() dan parseFloat().
*/
const tinggiAbdulToNumber = parseInt(tinggiAbdul);
const beratAbdulToNumber = parseFloat(beratAbdul);

console.log(stringNumberToNumber);
console.log(stringFloatToNumber);
console.log(BooleanToNumber);
console.log(tinggiAbdulToNumber);
console.log(beratAbdulToNumber);

// Mengubah ke boolean
const string = "Abdul Hafidz";
const IPK = 3.62;
const kosong = null;

//proses konversi tipe data di atas ke boolean
const stringToBoolean = Boolean(string);
const IPKtoBOOLEAN = Boolean(IPK);
const kosongToBoolean = Boolean(kosong);

console.log(stringToBoolean);
console.log(IPKtoBOOLEAN);
console.log(kosongToBoolean);



// Konversi implisit
/*
    Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika.
*/
const umur = 20;
const stringIdr = '10000'
/*
    Dalam contoh ini, tipe data number (umur) secara otomatis dikonversi menjadi string karena operator + digunakan untuk penggabungan string.
*/
const pesan = 'umurku : ' + umur;
/*
    Dalam contoh ini, strNumber (yang merupakan string) dikonversi menjadi number karena operator * digunakan untuk operasi aritmetika.
*/
const hasil = stringIdr * 2; 
console.log(pesan); 
console.log(hasil);