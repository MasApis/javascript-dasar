//  Konversi tipe data dapat dilakukan secara eksplisit oleh developer atau secara implisit oleh interpreter.

/*
Mengubah ke String
Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara, yaitu menggunakan fungsi String() dan method .toString(). Berikut adalah contoh dari penggunaan kedua cara tersebut.
*/
console.log("kONVERSI TIPE DATA NUMBER DAN BOOLEAN KE BENTUK STRING")
const number = 12345678;
const boolean = true;

/*
Ketika ingin mengubah nilai menjadi string menggunakan String(), Anda harus memberikan nilai yang akan diubah di antara tanda kurung.
*/
const numToString = String(number); // konversi tipe data number menjadi tipe data string
/*
Adapun toString() adalah method yang tersedia dalam beberapa tipe data (salah satunya boolean) yang digunakan untuk mengembalikan nilai string berdasarkan nilai referensinya.
*/
const boolToString = boolean.toString(); // konversi boolean number menjadi tipe data string
console.log(numToString); // Output : "12345678"
console.log(boolToString); // Output : "true"

// operator typeof() digunakan untuk mengetahui tipe data apa yang digunakan
// console.log("tipe data number dengan nilai 12345678 saat ini adalah = " + typeof(strNumber)); 
// console.log("tipe data boolean dengan nilai true saat ini adalah = " + typeof(strBoolean));

console.log("\n");

/*
Mengubah ke number
Secara umum, untuk mengubah bentuk numerik, seperti “10”, “3.14” dapat dilakukan dengan menggunakan fungsi Number(). Berikut contoh penggunaannya.
*/
console.log("KONVERSI STRING DAN BOOLEAN KE DALAM BENTUK NUMBER");
const strNumber2 = '12345678';
const strFloat = '3.14';
const boolean2 = true;
const cm_1 = '100cm';
const cm_2 = '100.15';
const px_1 = '100px';
const px_2 = '100.15px';

const strToNum = Number(strNumber2);
const strToFloat = Number(strFloat);
/*
Dalam number, nilai boolean direpresentasikan dengan angka 1 dan 0. Boolean true akan diubah menjadi 1, sedangkan false diubah ke 0.
*/
const boolToNum = Number(boolean2);
/*
fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer). Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. Ketika menemukan karakter yang tidak bisa diubah menjadi angka, proses konversi terhenti di sana. Dengan kemampuan ini, parseInt() dapat digunakan untuk mengubah nilai string, seperti "20CM", "64px", atau angka dengan satuan lainnya.
*/
const intFromCm = parseInt(cm_1);
const intFromPx = parseInt(px_1);
/*
Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter string satu per satu sehingga dapat mengubah numerik yang mengandung satuan.
*/
const floatFromCm = parseFloat(cm_2);
const floatFromPx = parseFloat(px_2);

console.log(strToNum); // Output : 12345678
console.log(strToFloat); // Output : 3.14
console.log(boolToNum); // Output : 1
console.log(intFromCm); // Output : 100
console.log(intFromPx); // Output : 100
console.log(floatFromCm); // Output : 100.15
console.log(floatFromPx); // Output : 100.15

// console.log("tipe data string dengan nilai 12345678 saat ini adalah = " + typeof(strToNum)); 
// console.log("tipe data string dengan nilai 3.14 saat ini adalah = " + typeof(strToFloat));
// console.log("tipe data boolean dengan nilai true saat ini adalah = " + typeof(boolToNum));
// console.log("tipe data string dengan nilai 100cm saat ini adalah = " + typeof(intFromCm));
// console.log("tipe data string dengan nilai 100px saat ini adalah = " + typeof(intFromPx));
// console.log("tipe data string dengan nilai 100.15cm saat ini adalah = " + typeof(floatFromCm));
// console.log("tipe data string dengan nilai 100.15px saat ini adalah = " + typeof(floatFromPx));

console.log("\n")

/*
Mengubah ke boolean
Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean(). Sama seperti fungsi sebelumnya, kita cukup memberikan nilai yang akan diubah di antara tanda kurung. Berikut adalah contoh penggunaan fungsi Boolean().
*/
console.log("KONVERSI NUMBER, STRING, DAN NULL KE BENTUK BOOLEAN")
const number2 = 12345678;
const strText = "masapistech";
const empty = null;

// proses konversi tipe data number, string, dan null ke bentuk boolean
const numToBool = Boolean(number2);
const strToBool = Boolean(strText);
const nullToBool = Boolean(empty);

console.log(numToBool); // Output : true
console.log(strToBool); // Output : true
console.log(nullToBool); // Output : false

// console.log("tipe data number dengan nilai 12345678 saat ini adalah = " + typeof(numToBool));
// console.log("tipe data string dengan nilai masapistech saat ini adalah = " + typeof(strToBool));
// console.log("tipe data null dengan nilai null saat ini adalah = " + typeof(nullToBool));

/*
!!!!!!!!!!!!!!!!!!!!!
Sebagaimana yang sudah kita ketahui bahwa boolean hanya memiliki dua nilai, yaitu true dan false. Jadi seluruh nilai jika dikonversikan dalam boolean kemungkinan nilainya hanya ada dua, yaitu true dan false. Seluruh nilai yang dikonversi dalam boolean menghasilkan true disebut nilai truthy, sedangkan sebaliknya disebut dengan falsy.

Hampir seluruh nilai yang ada sifatnya truthy, hanya segelintir nilai yang sifatnya falsy. Berikut adalah daftar nilai falsy dalam JavaScript.
false
0
-0
0n
''
null
undefined
NaN
*/

console.log("\n")

// Konversi implisit
/*
Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika. 
*/
console.log("KONVERSI IMPLISIT")
const age = 19;
const message = 'Umurku ' + age;
console.log(message + ', ' + 'tipe data variable message = ' + typeof(message)); // Dalam contoh ini, tipe data number (age) secara otomatis dikonversi menjadi string karena operator + digunakan untuk penggabungan string.

const strNumber3 = '1234';
const result = strNumber3 * 3;
console.log(`hasil dari str(1234) * int(3) adalah = ${result},` + " tipe data variable result = " + typeof(result)); // Dalam contoh ini, strNumber (yang merupakan string) dikonversi menjadi number karena operator * digunakan untuk operasi aritmetika.

const bool = true;
const result2 = bool + 3;
console.log(`hasil dari bool(true) + int(3) adalah = ${result2},` + " tipe data variable reulst2 = " + typeof(result2)) // Dalam contoh ini, bool (yang merupakan boolean) dikonversi menjadi number karena operator + digunakan untuk operasi aritmetika, karena nilai boolean true menjadi tipe data number maka nilainya berubah menjadi 1 jika false nilainya 0.

