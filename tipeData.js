// tipe data primitif yaitu boolean, string, number, nilai kosong(null dan undefined)

// String
// String adalah tipe data yang mempresentasikan teks.
console.log("STRING")
const petikTunggal = 'Aku adalah saya, \nSaya adalah aku'; // petik tunggal
const petikGanda = "Aku adalah saya, \nSaya adalah aku"; // petik ganda
const backticks = `Aku adalah saya, 
Saya adalah aku`; // backticks
const currentYear = new Date().getFullYear();

console.log(petikTunggal);
console.log(petikGanda);
console.log(backticks);
// Backticks sering disebut juga sebagai template literals karena memungkinkan kita menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.
console.log(`Sekarang adalah tahun ${currentYear}`);

console.log("\n");

// Number
// Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan. 
console.log("NUMBER")
const bilanganBulat = 12; // bilangan bulat
const bilanganDesimal = 12.4; // bilangan desimal
/* 
Selain angka normal, tipe data number juga memiliki nilai spesial, yaitu Infinity dan NaN. Nilai Infinity dihasilkan ketika kita melakukan operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. Contohnya kode di bawah ini.
*/
const infinity = 5 / 0; // pembagian 5 / 0 akan menghasilkan nilai yang tidak terdefinisi(infinity)
/*
Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number. Contohnya kode dibawah ini
*/
const not_a_number = Number("masapistech"); // expression yang akan dihasilkan adalah NaN(Not-a-Number) karena kita mencoba mengkonversi tipe data string(teks) ke tipe data number
console.log(`bilangan bulat = ${bilanganBulat}`);
console.log(`bilangan desimal = ${bilanganDesimal}`)
console.log(`infinity 5 / 0 = ${infinity}`);
console.log(`teks masapistech to number = ${not_a_number}`);

console.log("\n");

//Boolean
// Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false. Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false.
console.log("BOOLEAN")
const benar = true;
const salah = false;
// Nilai boolean juga biasa diperoleh dari hasil penggunaan operator perbandingan.
const perbandingan = 12 < 20; // expression yang akan dihasilkan adalah true, karena 12 lebih kecil dari 20
console.log(benar);
console.log(salah);
console.log(`12 < 20 = ${perbandingan}`);

console.log("\n");

//Nila kosong(Null dan Undefined)
// JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, yaitu null dan undefined. Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something).
console.log("NULL AND UNDEFINED"); // ini hanya teks judul
// Null banyak diadopsi dalam berbagai bahasa pemrograman sebagai tipe data standar untuk menunjukkan nilai yang tidak ada. Untuk membuat null, kita cukup menulis sintaksis null.
const variableNull = null;
// Adapun undefined hadir dalam JavaScript sebagai nilai implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun. 
let variableUndefined;
// secara teknis kita juga bisa memberikan nilai undefined di dalam sebuah variable
// const variableUndefined = undefined;

/* 
Sekilas, null dan undefined terlihat sama, tetapi sebenarnya mereka berbeda. Perbedaan ini dapat terlihat lebih jelas ketika kita membandingkan objek yang propertinya bernilai null dan undefined dalam format JSON.
*/
const nama1 = {first: 'Abdul', last: null};
const nama2 = {first: 'Bambang', last: undefined};

console.log(variableNull);
console.log(variableUndefined);
// Properti yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON karena JSON tidak mendukung tipe data undefined. Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.
console.log(JSON.stringify(nama1)); // Output : {first: 'Abdul', last: null}
console.log(JSON.stringify(nama2)); // Output : {first: 'Abdul'}

/*
  !!!!! alangkah baiknya gunakan null jika ingin memberikan nilai kosong 
*/