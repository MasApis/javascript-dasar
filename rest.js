// Rest operator
/*
    Ketika bekerja dengan function, sering kali function menerima argument yang kemudian menjadi parameter. Ketika argument-nya masih sedikit, seperti satu atau dua belum menimbulkan masalah. Masalah terjadi ketika argument-nya sudah melebihi dua karena terlalu banyak argument pada function membuat kode menjadi tidak bersih (tidak sesuai prinsip clean code) sehingga sulit untuk dibaca dan di-maintenance.

    Solusinya adalah menggunakan rest operator. Rest operator memungkinkan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir. 
*/
const fruits = (...fruitsName) =>
    console.log("Buah-buah yang ada di rumah Abdul = ", fruitsName);

fruits("Avocado", "Banana");
/*
    Rest parameter memungkinkan kita untuk menulis argument yang tak terbatas pada function. Rest parameter akan menangani argument tersebut menjadi sebuah array dan meneruskannya ke function. Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian dari array yang dihasilkan rest parameter.
*/
const numbers = (number1, ...number3) => {
    console.log("only string = ", number1);
    console.log("array = ", number3);
}
numbers("one", "two", "three", "four");
/*
    Karena rest parameter menangani argument sebagai array, method array.length juga dapat digunakan pada rest parameter seperti berikut ini.
*/
const name = (...name) => {
    console.log("list name : ", name);
    console.log("length list name : ", name.length);
}
name("Abdul", "Farhan", "Bayu");

/*
    Selain pada parameter fungsi, rest operator juga kerap digunakan ketika kita melakukan destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.
*/
const favorite = ["Sate", "Mie goreng", "Mie rebus", "Nasi goreng", "Nasi padang", "Telur"];

const [first, second, ...third] = favorite;
console.log(first);
console.log(second);
console.log(third);