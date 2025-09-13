// Inheritance
/*
    Pilar yang akan kita bahas pertama adalah inheritance. Inheritance jika diterjemahkan ke dalam bahasa Indonesia artinya adalah pewarisan. Sesuai dengan namanya, kita bisa mewariskan harta property dan method dari sebuah class ke class lain. Umumnya, properti dan method yang diwariskan berasal dari class (induk) dan digunakan oleh class baru (anak). Sama halnya di kehidupan sehari-hari, sedikit banyaknya sebagai anak, kita memperoleh sifat dan perilaku dari orang tua.

    Di OOP, inheritance memungkinkan class untuk mewarisi property dan method yang dimilikinya sehingga membantu mengurangi penulisan kode secara berulang (mengurangi redundancy kode). Misalnya, ketika kita membuat sebuah class dengan property dan method, keduanya dapat digunakan kembali oleh class lainnya melalui inheritance. Berikut adalah contohnya.


    class SuperClass { }
 
    class SubClass extends SuperClass { }

*/
class Smartphone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Thid device ${this.model} is charging`)
    }
}

class Android extends Smartphone {
    airDrop() {
        console.log(`Aidrop only on ${this.model}`)
    }
}

class Ios extends Smartphone {
    splitScreen() {
        console.log(`Split screen only on ${this.model}`)
    }
}

const android = new Android("Black", "A", "12 PRO MAX");
const ios = new Ios("White", "C", "GALAXY S21");

console.log(android.color);
console.log(android.brand);
console.log(android.model);
android.charging();
android.airDrop();

console.log(ios.color);
console.log(ios.brand);
console.log(ios.model);
ios.charging();
ios.splitScreen();

/*
    Untuk mengetahui asal muasal dari sebuah class, Anda dapat menggunakan instanceof. Instanceof dapat digunakan untuk menguji apakah suatu object merupakan instance dari sebuah class atau constructor function tertentu. Nilai keluaran dari instanceof adalah boolean. Jika object tersebut merupakan instance dari kelas yang diuji, nilainya akan true. Jika tidak, nilainya akan false. Perhatikan contoh berikut ini.
*/
console.log(ios instanceof Smartphone);
console.log(android instanceof Smartphone);