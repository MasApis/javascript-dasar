/* 
    Variable adalah wadah untuk menampung sebuah nilai. Nilai yang terdapat pada sebuah variable bisa berupa angka, teks, atau apa pun yang menghasilkan nilai(Expression). Di javascript pembuatan javascript bisa menggunakan sintaksis let dan const. 
*/ 

// let 
// variable yang dibuat dengan let kita bisa menginisialisasi ulang nilainya
let saldoAbdul = 100000; // nilai awal
saldoAbdul = 500000; // nilai setelah diinisialisasi ulang
console.log(saldoAbdul); // akan tampil nilai yang telah diinisialisasi ulang. Output : 100000

// const
/*
    variable yang dibuat dengan const tidak bisa diinisialisasi ulang nilainya(sederhananya nilainya tidak dapat diubah).
*/
const saldoAkhirBulan = 50000;
saldoAkhirBulan = 500000;
console.log(saldoAkhirBulan); // akan menampilkan error ketika dijalankan


