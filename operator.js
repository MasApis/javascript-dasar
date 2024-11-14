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
Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika, seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/). 
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

*/
