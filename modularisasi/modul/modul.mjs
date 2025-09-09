// Modul
/*
    Sebelumnya, kita sudah tahu konsep modularisasi di JavaScript. Anda mungkin sudah tahu juga cara menggunakan impor atau ekspor. Di materi ini, kita akan coba menggunakan module di JavaScript.
*/

// Mengekspor variable
/*
    Misalnya, ada suatu module yang ditulis di berkas module.mjs. Di dalam berkas tersebut, kita akan menulis satu variabel yang akan kita ekspor. Untuk mengekspornya dapat dilakukan seperti berikut.
*/
const name = 'Jijul';
// Selain mengekspor variable yang bertipe string, kita juga dapat mengekspor variable yang bertipe array.
const favoriteFruits = ['Avocado', 'Banana', 'Pineaple', 'Apple', 'Orange'];

// Mengekspor Function
// Cara untuk mengekspor function tak berbeda jauh dengan cara mengekspor variable.
const sayHi = (name) =>
    console.log(`${name}, tolong diapakan dulu itu biar ga apa kali`);

const myFruits = (favoriteFruits) => {
    let fruit; 
    for(fruit of favoriteFruits) {
        console.log(fruit)
    }
}

/*
    Agar tidak perlu menulis kata kunci export di setiap nilai yang ingin diekspor, Anda dapat mengekspor di akhir berkas seperti berikut.
*/
export {name, favoriteFruits, sayHi, myFruits};