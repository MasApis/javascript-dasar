// Mengimpor variable
/*
    Tadi kita sudah mengekspor beberapa nilai dan function di berkas modul.mjs. Sekarang, tambahkan berkas baru bernama index.mjs yang akan kita gunakan untuk mengimpor dan menggunakan variable dan function yang telah diekspor sebelumnya.
*/
/*
    Selain mengimpor dengan named import, kita juga dapat mengimpornya menggunakan import alias. Tenang saja, hasilnya akan tetap sama.
*/
// import {name, favoriteFruits as fruit} from './modul.mjs';
// console.log(name);
// console.log(fruit);

// Mengimpor function
// Untuk mengimpor function dapat dilakukan dengan cara berikut ini.
// import {name, favoriteFruits, sayHi, myFruits} from './modul.mjs';
// sayHi(name);
// myFruits(favoriteFruits);

/*
    Karena kita mengimpor seluruh nilai yang ada di module tersebut, gunakanlah keyword * agar lebih ringkas.
*/
import * as user from './modul.mjs'
console.log(user.name);
console.log(user.favoriteFruits);
user.sayHi(user.name);
user.myFruits(user.favoriteFruits);