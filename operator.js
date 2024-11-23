/*
Sebelum mengenal lebih detail jenis-jenis operator yang ada, mari kita ketahui dulu dua istilah penting dalam melakukan sebuah operasi, yakni operator dan operand (operan).
     Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah    operasi, misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman.
     Operan adalah nilai yang menjadi target dari sebuah operasi.
Sebagai contoh, ada sebuah operasi aritmetika 5 + 4. Operatornya adalah simbol + serta operannya adalah 5 dan 4. Mudah, kan? Simak ilustrasi di bawah ini agar dapat membedakannya.
*/

// operator di javascript terbagi menjadi 3 yaitu
// binary (operator yang membutuhkan 2 operan)
// a = 12;
// b = 13;
// console.log(a + b); // binary

// unary (operator yang hanya membutuhkan 1 operan)
// c = 12.4;
// console.log(typeof(c)); // unary

// ternary (operator yang membutuhkan 3 operan)
// if(12 < 20) {
//      console.log('iya benar')
// } else {
//      console.log('salah')
// }


/*
OPERATOR ASSIGNMENT
Operator penugasan atau assignment operator adalah operator yang digunakan untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru maupun mengubah nilai yang sudah ada. Operator ini ditulis dengan simbol sama dengan (=). Operator penugasan termasuk dalam kategori binary operator karena membutuhkan dua operan, yaitu variabel di sisi kiri dan nilai yang akan diberikan di sisi kanan. Operator ini ditulis di antara kedua operan.
*/
const nama = 'ABDUL HAFIDZ';
let lokasi = 'jakarta';
lokasi = 'kijang';

/*
Arithmetic Operator
Operator aritmetika adafilah operator standar yang digunakan untuk proses aritmetika, seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/). 
*/
console.log('OPERATOR ARITMATIKA')
const penjumlahan = 12 + 12; // operator penjumlahan
const pengurangan = 12 - 9; // operator pengurangan
const perkalian = 12 * 9; // operator perkalian
const pembagian = 12 / 4; // operator pembagian
const sisaBagi = 15 % 2; // operator modulus(sisa bagi)
const pangkat = 15 ** 2; // operator exponensial(bilangan berpangkat)
/*
Tanda kurung dalam operasi aritmetika menentukan urutan operasi yang dijalankan. Operasi yang diberi tanda kurung akan dikalkulasi terlebih dulu. Hal ini juga merupakan aturan umum dalam bidang matematika.
*/
const tandaKurung = (12 + 5) * 8;
console.log(`12 + 12 =  ${penjumlahan}`);
console.log(`12 - 9 =  ${pengurangan}`);
console.log(`12 * 9 =  ${perkalian}`);
console.log(`12 / 4 =  ${pembagian}`);
console.log(`15 % 2 =  ${sisaBagi}`);
console.log(`15 ** 2 =  ${pangkat}`);
console.log(`(12 + 5) * 8 = ${tandaKurung}`);

console.log("\n");

/*
Comparison Operator(perbandingan)
Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan. Salah satu penggunaan operator perbandingan adalah ketika kita berhadapan dengan skenario “Apakah x lebih besar dari y?” dan mendapatkan hasil dalam bentuk “Ya” atau “Tidak”.
*/
console.log("COMPARISON OPERATOR");
const perbandingan1 = 12;
const perbandingan2 = '20';
/*
Membandingkan dua operan, tanpa memperhatikan tipe data. Jika nilai kedua operan dianggap sama, operasi akan mengembalikan true, sebaliknya false.
*/
console.log(perbandingan1 == perbandingan2); // 12 == '20' = False
/*
Membandingkan dua operan, tanpa memperhatikan tipe data. Jika nilai kedua operan dianggap tidak sama, operasi akan mengembalikan true, sebaliknya false. 
*/
console.log(perbandingan1 != perbandingan2); // 12 != '20' = True
/*
Membandingkan dua operan beserta tipe datanya. Jika kedua operan identik, operasi akan mengembalikan true, sebaliknya false.
*/
console.log(perbandingan1 === perbandingan2); // 12 === '20' = False
/*
Membandingkan dua operan beserta tipe datanya. Jika kedua operan tidak identik, operasi akan mengembalikan true, sebaliknya false.
*/
console.log(perbandingan1 !== perbandingan2); // 12 !== '20' = True
/*
Membandingkan operan pertama apakah lebih besar dari operan kedua. Jika iya mengembalikkan pernyataan true, jika salah mengembalikkan pernyataan false.
*/
console.log(perbandingan1 > perbandingan2); // 12 > '20' == False
/*
Membandingkan operan pertama apakan lebih besar sama dengan dari operan kedua. Jika iya mengembalikkan pernyataan true, jika salah mengembalikkan pernyataan false.
*/
console.log(perbandingan1 >= perbandingan2); // 12 >= '20' = False
/*
Membandingkan operan pertama apakah lebih kecil dari operan kedua. Jika iya mengembalikkan pernyataan true, jika salah mengembalikkan pernyataan false.
*/
console.log(perbandingan1 < perbandingan2); // 12 < '20' = True
/*
Membandingkan operan pertama apakan lebih kecil1 sama dengan dari operan kedua. Jika iya mengembalikkan pernyataan true, jika salah mengembalikkan pernyataan false.
*/
console.log(perbandingan1 <= perbandingan2); // 12 <= '20' = True

console.log("\n");

/*
Logical Operator
Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Dengan operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.
*/
console.log("LOGICAL OPERATOR");
const perbandingan3 = true;
const perbandingan4 = false;

// AND
console.log("AND(&&)");
console.log("True  &&  False = " + (perbandingan3 && perbandingan4));
console.log("True  &&  True = " + (perbandingan3 && perbandingan3));
console.log("False &&  True = " + (perbandingan4 && perbandingan3));
console.log("False &&  False = " + (perbandingan4 && perbandingan4));

// OR
console.log("OR(||)");
console.log("True  ||  False = " + (perbandingan3 || perbandingan4));
console.log("True  ||  True = " + (perbandingan3 || perbandingan3));
console.log("False ||  True = " + (perbandingan4 || perbandingan3));
console.log("False ||  False = " + (perbandingan4 || perbandingan4));