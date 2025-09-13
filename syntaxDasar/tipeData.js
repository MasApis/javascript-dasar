// Tipe Data

// Tipe data string
/*
    String adalah tipe data yang merepresentasikan teks. Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string. Dalam JavaScript, nilai string diapit oleh tanda kutip. Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string, yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).

    kalian bisa menggunakan salah satu dari ketiga tanda kutip tersebut untuk membuat nilai string, asalkan tanda kutip pembuka dan penutupnya sama.
*/
const nama = "Abdul Hafidz";
const kampus = "Universitas Maritim Raja Ali Haji"
/*
    Backticks(`) sering disebut juga sebagai template literals karena memungkinkan kita menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.
*/
const tahunSekarang = new Date().getFullYear();
const teks = `Sekarang adalah tahun ${tahunSekarang}.`;
console.log(nama);
console.log(kampus);
console.log(teks);

// Tipe data number
/*
    Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan. Untuk membuat nilai number, kita cukup menuliskan angkanya secara langsung tanpa menggunakan tanda khusus. Berikut adalah contoh nilai number dalam JavaScript.
*/
const umurAbdul2025 = 20;
const ipk = 3.62; // IPK Abdul di semester 2
/*
    Selain angka normal tipe data number pada javascript bisa menghasilkan nilai Infinity. Nilai ini dihasilkan ketika terdapat operasi aritmatika yang tidak terdefinisi, seperti membagi nilai dengan angka 0.
*/
const infinity = 100 / 0;
/*
    Ada juga nilai NaN(Not-a-Number) yang dihasilkan ketika nilai non-numerik diubah ke number.
*/
const coffeShop = Number("Temu Bual");
console.log(umurAbdul2025);
console.log(ipk);
console.log(infinity);
console.log(coffeShop);

// Tipe Data Boolean
/*
    Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false. Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false.
*/
const abdulGanteng = true;
const farhanJelek = false;
console.log(abdulGanteng);
console.log(farhanJelek);

// Nilai Kosong
/*
    JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, yaitu null dan undefined. Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something).
*/
/*
    Null banyak diadopsi dalam berbagai bahasa pemrograman sebagai tipe data standar untuk menunjukkan nilai yang tidak ada. Untuk membuat null, kita cukup menulis sintaksis null.
*/
let farhanPunyaDuit = null;
/*
    Adapun undefined hadir dalam JavaScript sebagai nilai implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun.
*/
let farhanPunyaLimpul;
console.log(farhanPunyaDuit);
console.log(farhanPunyaLimpul);