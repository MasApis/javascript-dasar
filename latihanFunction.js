// Latihan function
/*
Latihan 1: Fungsi Penjumlahan
Buatlah sebuah fungsi tambah(a, b) yang menerima dua parameter, a dan b, lalu mengembalikan hasil penjumlahan keduanya.
*/

// function tambah(a, b) {
//      const hasilPenjumlahan = a + b;
//      return hasilPenjumlahan;
// }

// let nilai1 = 120;
// let nilai2 = 200;

// const hasil = tambah(nilai1, nilai2);
// console.log(hasil);

/*
Latihan 2: Fungsi Menentukan Angka Ganjil atau Genap
Buatlah sebuah fungsi cekGanjilGenap(x) yang menerima satu parameter x. Fungsi ini harus mengembalikan string "Ganjil" jika x adalah angka ganjil, dan "Genap" jika x adalah angka genap.
*/

// function cekGanjilGenap(x) {
//      if(x % 2 == 0) {
//           console.log("Genap")
//      } else {
//           console.log("Ganjil")
//      }
// }

// let angka = 115;

// cekGanjilGenap(angka);

/*
Latihan 3: Fungsi pembalik string
Buatlah fungsi balikString(str) yang menerima sebuah string str dan mengembalikan string yang dibalik. Misalnya, jika inputnya adalah "hello", maka outputnya adalah "olleh".
*/

// function balikString(str) {
//      return str.split('').reverse().join('');
// }

// let teks = "hello";
// const hasil = balikString(teks);
// console.log(hasil);

/*
Latihan 4: Fungsi Faktorial
Buatlah sebuah fungsi faktorial(n) yang menerima sebuah angka n dan mengembalikan hasil faktorial dari angka tersebut. (Faktorial dari n adalah hasil perkalian semua angka dari 1 hingga n).
*/

// function faktorial(n) {

//      // inisialisasi hasil faktorial
//      let nilaiFaktorial = 1;

//      // proses perhitungan faktorial
//      for(i = 1; i <= n; i++) {
//           nilaiFaktorial *= i;      
//      }

//      return nilaiFaktorial;
// }

// const hasil = faktorial(10);
// console.log(hasil);

/*
5. Membuat Function Sederhana
Buat sebuah function bernama greet yang menerima satu parameter name dan mengembalikan string seperti:
"Halo, [name]!"
*/

// function greet(name) {
//      return `Halo, ${name}`;
// }

// const hasil = greet("ABDUL HAFIDZ");
// console.log(hasil);

/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */

// function hello(name, origin = "Bandung") {
//     return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`
// }

// const rahmat = hello("Abdul Hafidz", "Kepulauan Riau");
// const indra = hello("Indra");
// console.log(rahmat);
// console.log(indra);


// kalkulator sederhana.
const penjumlahan = (angka1, angka2) => angka1 + angka2
const pengurangan = (angka1, angka2) => angka1 - angka2
const perkalian = (angka1, angka2) => angka1 * angka2
const pembagian = (angka1, angka2) => angka1 / angka2

const hasilPenjumlahan = penjumlahan(15, 17);
const hasilPengurangan = pengurangan(15, 17);
const hasilPerkalian = perkalian(15, 17);
const hasilPembagian = pembagian(15, 17);
console.log("hasil penjumlahan 15 + 17 = ", hasilPenjumlahan);
console.log("hasil pengurangan 15 - 17 = ", hasilPengurangan);
console.log("hasil perkalian 15 x 17 = ", hasilPerkalian);
console.log("hasil pembagian 15 / 17 = ", hasilPembagian);