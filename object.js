// OBJECT
/*
Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif. Jika tipe data primitif hanya dapat menyimpan satu jenis data seperti string atau number, tipe data object dapat menyimpan data yang beragam dan kompleks.
*/

/*
Membuat Object
Ada berbagai cara untuk membuat object seperti menggunakan object constructor atau yang paling mudah adalah dengan menggunakan object literals. Membuat object dengan object literals sangat mudah yaitu cukup dengan menulis kurung kurawal {}.
*/
// const user = {}; // object dengan properti kosong

/*
Properti memiliki key(name) dan value("Ferrari"). Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun, seperti string, number, atau boolean. Properti yang ada di dalam object dipisahkan oleh koma.
*/
const car = {name : "Ferrari", price : 1000000,}; // object dengan 2 properti
const user = {
    name : "ABDUL",
    lastName : "HAFIDZ",
    origin : "KEPULAUAN RIAU",
    university : "UNIVERSITAS MARITIM RAJA ALI HAJI",
    age : 19,
    'nomor telepon' : "0845678954",
}

const userValorant = {
    id : 12,
    email : "dufi3105@gmail.com",
    nickName : "abdul hafidz",
    userName : "aokLah",
    password : "Secret",
}

const userDana = {
    name : "ABDUL HAFIDZ",
    'nomor telepon' : "0845678954",
    balance : 2000000,
}

// Mengakses Properti di Object
/*
Mengakses menggunakan dot
Cara pertama untuk mengakses nilai properti yang ada di object adalah menggunakan dot notation (.). Contohnya ketika ingin mengakses properti name dari object user dapat ditulis seperti berikut ini.
*/
console.log(user.university);

/*
Mengakses menggunakan square bracket
Untuk menutupi kekurangan menggunakan dot notation, ada cara lain yaitu menggunakan square bracket. Contoh:
*/
console.log(user['nomor telepon']);

/*
Mengakses menggunakan object destructuring
Selain itu nilai properti dari object dapat diakses juga dengan cara lainnya yaitu menggunakan object destructuring. Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (variabel). Contohnya seperti berikut.

Destructuring object yang key-nya tidak ada akan mengembalikan nilai undefined. Oleh karena itu, kita bisa memanfaatkan default value ketika destructuring object seperti berikut ini agar nilainya tidak undefined.
*/
const {name, lastName, age, gender = "male"} = user;
const {id, email} = userValorant;
console.log(id, email);
console.log(name, lastName, age, gender);


// Mengubah Nilai di Properti Object
/*
Untuk mengubah nilai properti di object sangat mudah asalkan kita mengetahui nama object dan nama properti yang ingin diubah. Memodifikasi object dapat dilakukan dengan assignment operator (=). 
*/
userDana.balance = 1100000;
// userDana.balance -= 900000;
console.log(userDana.balance);


// Menghapus Properti di Object
/*
Untuk menghapus properti pada object dapat menggunakan operator delete dengan menuliskan nama object lalu tanda titik dan diikuti nama propertinya. Contohnya seperti di bawah ini.
*/
delete user.origin;
delete user['nomor telepon'];
console.log(user);

