// IF Statement
/*
    If statement merupakan fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak. Bentuk umumnya adalah seperti berikut ini.
    If statement akan mengeksekusi blok jika kondisi terpenuhi (true). Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi. Perhatikan contoh berikut ini.
*/
const gajian = true;
console.log("berjalan-jalan di mal.")
if(gajian == true) {
    console.log("Mampir ke toko laptop, membeli sesuatu.")
}
console.log("Pulang ke rumah")
// Jika nilai gajian bernilai true, blok kode di dalam if akan dijalankan sehingga program tersebut akan mencetak di terminal.

/*
    Apakah if statement hanya bisa menangani satu cabang kondisi saja? Jawabannya adalah tidak. Kita bisa menggunakan keyword else untuk menambah pengecekan kondisi lainnya. Perhatikan contoh berikut ini.
*/
const nilaiUjianStrukturData = 75;
console.log("Hasil ujian abdul di mata kuliah struktur data");
if(nilaiUjianStrukturData >= 75) {
    console.log("Lulus ujiann");
} else {
    console.log("Tidak lulus ujiann");
}

// jika memiliki cabang kondisi lebih dari dua, Anda dapat mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if.
const nilaiUjianAljabar = 76;
console.log("hasil ujian abdul di mata kuliah aljabar");
if(nilaiUjianAljabar >= 85 && nilaiUjianAljabar <= 100) {
    console.log("A+");
} else if(nilaiUjianAljabar >= 75 && nilaiUjianAljabar <= 84) {
    console.log("A-");
} else if(nilaiUjianAljabar >= 65 && nilaiUjianAljabar <= 74) {
    console.log("B+");
} else if(nilaiUjianAljabar >= 55 && nilaiUjianAljabar <= 64) {
    console.log("B-");
} else if(nilaiUjianAljabar >= 45 && nilaiUjianAljabar <= 54) {
    console.log("C (kamu diperbolehkan ngulang mata kuliah ini)");
} else {
    console.log("KAMU PASTI NGULANG DI TAHUN DEPAN, UNTUK MENJADI SYARAT KELULUSAN");
}

/*
    JavaScript menyediakan sintaksis yang lebih ringkas yaitu menggunakan ternary operator. Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan tanda tanya (?). 

    Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:

    1. Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
    2. Ekspresi yang dieksekusi jika kondisinya benar.
    3. Ekspresi yang dieksekusi jika kondisi salah.
    
    Berikut adalah bentuk dasar dari ternary operator.

    let score = condition ? value1 : value2
*/
const price = 10000;
const isMember = true;
const discont = isMember ? 0.1 : 0;
console.log("harga normal ", price, `. Anda mendapatkan diskon sebesar 10%, jadi saat ini harganya adalah = ${price * discont}`);
/*
    Kode di atas memiliki variabel isMember dengan nilai true sehingga ketika dieksekusi akan mendapatkan discount sebesar 0.1 atau 10%. Anda juga dapat mencoba untuk mengganti nilai variabel isMember menjadi false sehingga hasilnya tidak akan mendapatkan discount. So, menggunakan ternary operator membuat kode lebih ringkas dan readable, kan?
*/



// Switch case
/*
    Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus. Switch dapat menggantikan beberapa pengecekan kondisi yang dilakukan oleh if. Selain itu, menggunakan switch membuat kode menjadi lebih readable dan ringkas. Inilah struktur dari switch case statement.


    switch (expression) {
        statement
    }
*/
const myFriend = "Azhar";
switch(myFriend) {
    case "Farhan":
        console.log("Hello, I am Farhan");
        break;
    case "Azizul":
        console.log("Hello, I am Azizul");
        break;
    case "Adhlu":
        console.log("Hello, I am Adhlu");
        break;
    case "Piky":
        console.log("Hello, I am Piky");
        break;
    case "Azhar":
        console.log("Hello, I am Azhar");
        break;
    default:
        console.log("Hello, I am a senior programmer");
}

// Contoh lain penggunaan switch case
const day = new Date().getDay();
switch(day) {
    case 0:
        console.log("Ini hari minggu");
        break;
    case 1:
        console.log("Ini hari senin");
        break;
    case 2:
        console.log("Ini hari selasa");
        break;
    case 3:
        console.log("Ini hari Rabu");
        break;
    case 4:
        console.log("Ini hari Kamis");
        break;
    case 5:
        console.log("Ini hari jumat");
        break;
    case 6:
        console.log("Ini hari sabtu");
        break;
    default:
        console.log("Hari tidak valid!!!")
}