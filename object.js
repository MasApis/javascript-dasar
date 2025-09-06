// Object
/*
    Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif. Jika tipe data primitif hanya dapat menyimpan satu jenis data seperti string atau number, tipe data object dapat menyimpan data yang beragam dan kompleks. Object dapat menyimpan data secara tidak terurut. Selain tipe data seperti string, number, symbol, boolean, null, dan undefined dalam JavaScript, semuanya dianggap sebagai object. Sebagai informasi tambahan, object di bahasa pemrograman lain disebut dengan hash-table, map, dan dictionary.
*/

// Membuat object
// Membuat object dengan object literals sangat mudah yaitu cukup dengan menulis kurung kurawal {}.
const user = {
    id : 31,
    email : "abdulhafidz3105@gmail.com",
    firstName : "Abdul",
    lastName : "Hafidz",
    password : "F500YDE"
};
const user2 = {
    name : "Abdul Hafidz",
    ipk : "2401020051",
    'age' : 20,
    'kampung halaman' : "KP SIDOMULYO KM 18 KIJANG",
    citizenship : "Indonesia"
};
/*
    Properti memiliki key dan value. Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun, seperti string, number, atau boolean. Properti yang ada di dalam object dipisahkan oleh koma.
*/

// Mengakses properti di dalam objek
// Mengakses menggunakan dot.
/*
    Cara pertama untuk mengakses nilai properti yang ada di object adalah menggunakan dot notation (.). Contohnya ketika ingin mengakses properti name dari object user2 dapat ditulis seperti berikut ini.
*/
console.log(user2.name);
/*
    Kita dapat memanggil nama object, kemudian menuliskan tanda titik yang diikuti dengan nama propertinya. Sebelum titik adalah nama object-nya dan setelah titik adalah nama properti yang ingin diakses. Kekurangan dari dot notation adalah nama key yang ingin diakses harus valid; tidak boleh mengandung spasi; tidak boleh diawali angka; dan tidak boleh mengandung spesial karakter.
*/

// Mengakses menggunakan square bracket.
/*
    Untuk menutupi kekurangan menggunakan dot notation, ada cara lain yaitu menggunakan square bracket. Contoh:
*/
console.log(user2['kampung halaman']);
/*
    Tulislah nama object terlebih dahulu dan di dalam kurung siku kita menuliskan nama properti yang ingin diakses. Dengan menggunakan square bracket, key yang memiliki spasi pun dapat diakses.
*/

// Mengakses menggunakan object destructing.
/*
    Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (variabel). Contohnya seperti berikut.
*/
/*
    Destructuring object yang key-nya tidak ada akan mengembalikan nilai undefined. Oleh karena itu, kita bisa memanfaatkan default value ketika destructuring object seperti berikut ini agar nilainya tidak undefined.
*/
const { id, firstName, lastName, isMale = false } = user;
console.log(id, firstName, lastName, isMale);


// Mengubah nilai di properti object
const account = {
    id : 31,
    username : "Abdul",
    balance : 50000,
    debt : 10
};

/*
    Untuk mengubah nilai properti di object sangat mudah asalkan kita mengetahui nama object dan nama properti yang ingin diubah. Memodifikasi object dapat dilakukan dengan assignment operator (=). 
*/
account.balance = 100000
console.log(account.balance);

// Menghapus properti di object
/*
  Untuk menghapus properti pada object dapat menggunakan operator delete dengan menuliskan nama object lalu tanda titik dan diikuti nama propertinya. Contohnya seperti di bawah ini.  
*/
delete account.debt;
/*
    Selain menggunakan dot notation (.), kita juga bisa menggunakan operator delete dengan tanda kurung siku ([]) seperti berikut ini.
*/
delete account['username'];
console.log(account);