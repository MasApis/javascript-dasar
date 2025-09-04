// Operator
/*
    Sebelum mengenal lebih detail jenis-jenis operator yang ada, mari kita ketahui dulu dua istilah penting dalam melakukan sebuah operasi, yakni operator dan operand (operan).

    Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah operasi, misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman. Operan adalah nilai yang menjadi target dari sebuah operasi.
    Sebagai contoh, ada sebuah operasi aritmetika 5 + 4. Operatornya adalah simbol + serta operannya adalah 5 dan 4.
*/
/*
    Secara umum, operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary.
    Binary : Operator aritmetika, seperti + termasuk dalam kelompok operator binary karena membutuhkan dua operan.
    Unary : operator tipe data, seperti typeof adalah operator unary karena hanya memerlukan satu operan.
    Ternary : operator ternary tentu saja membutuhkan tiga operan.

    Binary
    let a = 50 + 2;

    Unary
    console.log(typeOf(a))

    Ternary
    (a < 100) ? "benar" : "salah";
*/

// Assignment operator
/*
    Operator penugasan atau assignment operator adalah operator yang digunakan untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru maupun mengubah nilai yang sudah ada. Operator ini ditulis dengan simbol sama dengan (=). Operator penugasan termasuk dalam kategori binary operator karena membutuhkan dua operan, yaitu variabel di sisi kiri dan nilai yang akan diberikan di sisi kanan. Operator ini ditulis di antara kedua operan.
*/
// Digunakan untuk menginisialisasi nilai
const nama = "Abdul Hafidz";
let lokasi = "Jl. Nusantara";

// Digunakan untuk mengubah nilai
lokasi = "Jl. Nusantara Km. 18 Kijang"
console.log(nama);
console.log(lokasi);

// Arithmetic operator
/*
    Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika, seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/). 
*/
let a = 10 + 2;
let b = 10 - 2;
let c = 10 * 2;
let d = 10 / 2;
let e = 10 % 2;
let f = 2 * (10 + 2);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// Comparison operator
/*
    Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan.
*/
let g = 10 == 10;
let h = 10 != 2;
let i = 10 === 10;
let j = '10' === 10;
let k = '10' !== 10;
let l = 10 > 2;
let m = 10 < 2;
let n = 10 >= 10;
let o = 5 <= 5;
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);

// Logical operator
/*
    Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Dengan operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.
*/
// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(5 === 3 && 10 > 5); // true

// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(5 > 10 || 100 >= 100); // true

// NOT (!)
console.log(!true); // false
console.log(!false); // true

// String operator
/*
    Operator string adalah operator yang digunakan untuk menggabungkan dua nilai string. Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator.
*/
const first = "Farhan";
const second = " jelek";
const merge = first + second;
console.log(merge); // Farhan jelek