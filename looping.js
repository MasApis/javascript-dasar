// Looping
/*
    Looping (perulangan) adalah statements yang memungkinkan kita untuk mengeksekusi kode yang sama secara berulang. Di JavaScript terdapat banyak jenis perulangan, seperti for loop, for in, for of, while, dan do-while.
*/
// Contoh penggunaan perulangan
const foods = ['Nasi Goreng', 'Pasta', 'Sate'];
for(i = 0; i <= 2; i++) {
    console.log("Makanan kesukaan ku", foods[i])
}

// For
/*
    For adalah cara looping yang paling umum dilakukan di JavaScript. Semenjak kehadiran ES6, for terbagi lagi menjadi beberapa jenis. Saat ini, for terdiri dari for loop, for in, for of. Simak kode berikut ini.
*/

// for loop
/*
    Pertama, kita akan bahas for loop. Struktur dari for loop tampak seperti berikut ini.

    for (variabel awal; test kondisi; increment) {
        // do something
    }
*/
for(i = 0; i <= 31; i++) {
    console.log(`Angka ke ${i}, adalah ${i}`);
}
/*
    Variabel awal adalah nilai variabel sebelum looping dilakukan. Test kondisi adalah evaluasi dari looping, jika bernilai false, looping akan berhenti. Increment adalah nilai variabel yang bertambah setiap looping dilakukan. Perhatikan contoh berikut ini.

    Pada contoh di atas, nol merupakan nilai awal sebelum looping dijalankan. Pengecekan kondisi i < 5 sebelum looping, ketika bernilai false, looping akan terhenti. Terakhir, i++ artinya adalah nilai i akan bertambah setiap looping dilakukan. Jika dijalankan, kode tersebut akan mencetak tampilan di terminal/console
*/

// for in
/*
    For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek. Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length. Berikut contoh penggunaan for in.
*/
const person = {
    name : "Abdul Hafidz",
    origin : "Kepulauan Riau",
    birthYear : 2005
}
for(const property in person) {
    console.log(`${property} bernilai, ${person[property]}`);
}
/*
    Sintaks dari for in tidak berbeda jauh dengan for loop. Dengan menggunakan for in kita tidak perlu menuliskan nilai variabel awal, test kondisi dan increment. For in akan melakukan perulangan item yang ada di dalam object (pada contoh object person). Pada contoh di atas, for akan melakukan looping semua item yang ada di dalam objek person. 
*/

// for of
/*
    Kehadiran for of dimulai pada ECMAScript 2015 (ES6). For of berbeda dengan for in. For of lebih sederhana karena kita tidak perlu memikirkan property dan key. Perhatikan contoh berikut.
*/
const animals = ['monkey', 'whale', 'crocodile', 'shark', 'bird'];
for(names of animals) {
    console.log(names);
}
/*
    Dengan for of datanya bisa kita dapatkan langsung tanpa menambahkan indeks atau nama propertinya seperti contoh di atas. Sintaksnya lebih ringkas karena kita hanya perlu memanggil variabel item. Variabel item merupakan sebuah variabel yang digunakan untuk menampung element dari array. For of dapat digunakan pada object yang bisa diiterasi seperti arrays, strings, sets, dan maps.
*/



// While
/*
    Perulangan di JavaScript tak hanya menggunakan for, tetapi ada cara lainnya yaitu while statement. While statement akan mengeksekusi statement ketika kondisinya bernilai truthy. Berikut struktur dari while statement.

    while (condition) 
        statement

    Iterasi akan berjalan ketika kondisi bernilai true. Oleh karena itu, perlu untuk berhati-hati ketika mengecek kondisi tersebut. Akan terjadi infinite loop saat kondisinya bernilai true. 

    Supaya Anda mendapatkan gambaran penggunaan while, perhatikan contoh berikut ini.
*/
let j = 0;
while(j <= 5) {
    console.log(`angka ke ${j}, adalah ${j}`);
    j++;
}
/*
    Sama seperti contoh kode di materi for. Kode di atas akan mencetak tampilan di terminal/console sebanyak 5 kali. Keunggulan dari while adalah ia tidak perlu tahu jumlah data yang akan di-looping. 

    While hanya peduli dengan kondisi yang kita berikan. Oleh karena itu, jangan lupa untuk mengubah kondisi tersebut, misalnya pada contoh kita memberikan kondisi i < 5. Ketika while dieksekusi, jangan lupa untuk mengubah variabel i agar kondisinya berubah menjadi true atau false.
*/
/*
    Contoh berikut adalah contoh ketika kondisi i < 5 selalu bernilai true sehingga menyebabkan infinite loop (perulangan tanpa henti).
*/
// let k = 0;
// while(k < 5) {
//     console.log(k);
// }
/*
    Apa yang membuat infinite loop terjadi? Jawabannya adalah karena kita tidak mengubah nilai variabel i sehingga dia akan selalu bernilai 0 yang mana nol lebih kecil dari lima (kondisi akan selalu true). 
*/



// Do-While
/*
    Sebenarnya, while dan do-while tidak berbeda jauh. Perbedaan mereka terdapat pada urutan pengecekan kondisi. While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir. Berikut struktur dari do-while.

    do {
        // Do something
    } while (condition)
*/
/*
    Karena do-while melakukan evaluasi kondisi di akhir, blok yang ada di dalam do setidaknya akan dijalankan satu kali. Perhatikan contoh berikut ini.
*/
let l = 0;
do {
    console.log(`angka ke ${l}, adalah ${l}`);
    l++;
} while(l <= 5);



// Control Statement
/*
    Ketika melakukan perulangan, ada yang namanya control statement. Control statement berfungsi untuk menghentikan eksekusi kode. Beberapa statement yang masuk ke dalam kategori control statement adalah break dan continue. Pada contoh yang diberikan sebelumnya, mungkin Anda sudah ngeh bahwa kita menggunakan break statement. Untuk lebih detail, ikuti pembahasan berikut ini.
*/

// break
const myAnimals = ['Crocodile', 'Chicken', 'Bird', 'Snake', 'Fish', 'Butterfly', 'Horse']
for(listAnimal of myAnimals) {
    if(listAnimal == 'Snake') {
        console.log("Woyy kok bisa di rumah mu ada ular cok!!!!!");
        break;
    }

    console.log(listAnimal);
}
/*
    Kode di atas akan mencetak nama-nama hewan saya, tetapi akan terhenti ketika ada kata Snake pada array. Hal ini disebabkan oleh adanya statement break. Break akan menghentikan proses perulangan. 
*/
/*
    Contoh lainnya adalah penggunaan break pada switch case statement.
    Di saat kondisi case terpenuhi maka program akan berhenti dan tidak akan melakukan pengecekan pada case berikutnya.
*/

// Continue
/*
    Continue statement sama seperti break statement. Namun, alih-alih menghentikan eksekusi program, continue akan melanjutkan iterasi ke iterasi berikutnya. Continue statement hanya dapat digunakan di dalam body looping. Perhatikan contoh berikut ini.
*/
const myFruits = ['Avocado', 'Banana', 'Mango', 'Apple', 'Lemon']
for(listFruit of myFruits) {
    if(listFruit == 'Banana') {
        continue;
    }

    console.log(listFruit);
}
/*
    Looping akan berjalan seperti biasa. Namun, ketika nilai variabel listFruit sama dengan 'Banana', iterasi akan dihentikan dan lanjut ke iterasi berikutnya sehingga di terminal/console tidak akan menampilkan buah pisang. Untuk mencoba hal itu, Anda dapat menjalankan interactive kode di atas.
*/