// Error Handling
/*
    Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun. JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling. Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.
*/

// Throwing Error
/*
    Saat terjadi error, sinyal yang disebut dengan exception akan bangkit. Cara lain untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error. Sintaks dasarnya adalah seperti berikut.

    throw <objek error>
*/
/*
    JavaScript memiliki built-in constructor untuk standar error meliputi Error, SyntaxError, dan sebagainya.  Perhatikan contoh berikut ini.
*/
// Dibawah ini adalah kode
// const error = new Error("Programmer gantengggggg, kode mu error loh");
// console.log(error);
/*
    Pada contoh di atas, kita menggunakan built-in constructor milik JavaScript, Error. Kenapa kita perlu membangkitkan exception secara sengaja? Jawabannya adalah karena kita ingin program yang dibangun tidak mengalami crash ketika terjadi sesuatu di luar dugaan.
*/
/*
    Misalnya, kita memiliki program yang menerima inputan pembayaran dari pembeli. Normalnya adalah jumlah yang dibayarkan harus lebih besar dari harga barang. Lalu, ada sebuah kasus dimana pembeli membayar lebih kecil dari harga barang. Hal ini akan menyebabkan error di program milik kita. Oleh karena itu, kita perlu throw error ketika pembayaran kurang dari harga barang seperti contoh berikut.
*/
// Dibawah ini adalah kode
// const price = 50000;
// const paid = 1000;

// if(paid < price) {
//     throw new Error("Sadar diri bang, uang mu kurang loh ni");
// } 
/*
    Contoh di atas akan membangkitkan error. Lalu, bagaimana caranya untuk menangani error yang telah dibangkitkan? Caranya adalah menggunakan konsep Catching Error.
*/



// Catching Error
/*
    Sebelumnya, Anda sudah tahu cara untuk membangkitkan error. Kini, saatnya Anda mengetahui cara untuk menangkap error yang dihasilkan oleh program JavaScript yang Anda tulis.
*/

// Try-Catch
/*
    Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error. Try-catch memiliki dua blok utama yaitu try dan catch. Try merupakan blok kode yang akan menangani error, sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try. Perhatikan struktur dari try-catch berikut.


    try {
 
        // code...
 
    } catch (err) {
 
        // error handling
 
    }

    Blok kode catch akan diabaikan ketika tidak ada error yang terjadi di dalam blok try. Oleh karena itu, tulislah kode yang berpotensi error di dalam blok try. Perhatikan contoh berikut ini.
*/
try {
    console.log("Memulai program");
    console.log("Mengakhiri Program");
} catch(err) {
    console.log("Bang-bang ngetik console.log aja ada error loh ni.")
}

// Blok kode yang memiliki error pada try
try {
    console.log("Memulai program");
    throw new Error("Error : Program berhenti");
    console.log("Mengakhiri program")
} catch(err) {
    console.log("Bang-bang ngetik console.log aja ada error loh ni.")
}
/*
    Ketika error dibangkitkan, kode yang ada di bawahnya tidak akan tereksekusi. Pada kasus ini, program akan langsung lompat ke blok catch.
*/

// Finally
/*
    Finally adalah blok kode yang berada di akhir try-catch. Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.
*/
try {
    console.log("Ini adalah blok try");
} catch(err) {
    console.log("Ini adalah blok catch");
} finally {
    console.log("Ini adalah blok finally");
}
/*
    Ketika dijalankan, akan tampil di terminal/console yang mencetak tulisan “Ini try block“ dan “Ini finally block”. Dengan menggunakan finally, ia tidak peduli apakah blok try memiliki error atau tidak. 
*/

try {
    console.log("Ini adalah blok try");
    throw new Error("ERROR : Blok try terdapat error");
} catch(err) {
    console.log("Bang-bang ngetik console.log aja ada error loh ni.");
} finally {
    console.log("Finally selalu dieksekusi browww")
}