// Encapsulation
/*
    Desain OOP yang baik adalah object hanya akan menampilkan data yang dibutuhkan oleh object lain. Data akan diisolasi dan tidak dapat diakses langsung dari luar. Secara sederhana, encapsulation adalah membuat data yang ada di class sebagai private.

    Di dunia nyata, kita bisa lihat contohnya pada mesin kopi. Mesin kopi memiliki data dan method yang bersifat private seperti pengatur suhu, pemanas, dan method memanaskan air. Data dan method tersebut tidak bisa diakses oleh pihak luar (kita sebagai pengguna).
*/

// Properti dan Method
/*
    Seperti yang Anda ketahui, di dalam sebuah class kita dapat mendefinisikan dua hal, yaitu property dan method. Karena kita menerapkan encapsulation, kita harus mengatur akses dari keduanya. Secara umum, property yang ada di dalam instance class bersifat mutable (dapat diubah). Perhatikan contoh berikut ini.
*/
// class coffeeMachine {
//     constructor(waterMount) {
//         this.waterMount = waterMount;
//         this.temperature = 90;
//     }

//     makeCoffee() {
//         console.log(`Membuat kopi dengan suhu ${this.temperature}`);
//     }
// }

// const coffee = new coffeeMachine(100);
// coffee.temperature = 100;

// coffee.makeCoffee();



/*
    Untuk mencegah hal itu terjadi lagi, kita dapat menerapkan getter dan setter.

    Getter terdiri dari method get. get adalah cara untuk mendapatkan nilai dari property, sedangkan setter terdiri dari method set. set adalah method untuk menetapkan nilai property. Dengan begitu, kita dapat mengatur akses ke property yang dimiliki oleh object. Perhatikan contoh berikut ini.
*/
// class coffeeMachine {
//     constructor(waterAmount) {
//         this.waterAmount = waterAmount;
//         this._temperature = 90;
//     }

//     set temperature(temperature) {
//         console.log("you are not allowed to change temperature")
//     }

//     get temperature() {
//         return this._temperature;
//     }
// }

// const coffee = new coffeeMachine(100);
// console.log(`suhu sebelum diubah ${coffee.temperature}`);
// coffee.temperature = 100;
// console.log(`suhu setelah diubah ${coffee.temperature}`);
/*
    Penambahan underscore (_) di variable temperature untuk menandakan bahwa nilai temperature tidak dapat diubah. Namun, sebenarnya penggunaan tanda underscore tidak benar-benar membuat property temperature tidak dapat diubah, ia masih dapat diubah. Penggunaan underscore hanyalah code convention yang disepakati oleh komunitas JavaScript.

    Untuk membuat nilainya benar-benar tidak dapat diubah, Anda dapat melakukannya dengan cara berikut.
*/
class coffeeMachine {
    #temperature = 90;

    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.#temperature = this.defaultTemperature();
    }

    set temperature(temperature) {
        console.log("you are not allowed to change temperature")
    }

    get temperature() {
        return this.#temperature;
    }

    defaultTemperature() {
        return 90;
    }
}

const coffee = new coffeeMachine(100);
console.log(`suhu sebelum diubah ${coffee.temperature}`);
// jika baris dibawah ini dipakai akan memberikan error
/*
    Property '#temperature' is not accessible outside class 'coffeeMachine' because it has a private identifier
*/
// coffee.#temperature = 100;
console.log(`suhu setelah diubah ${coffee.temperature}`);