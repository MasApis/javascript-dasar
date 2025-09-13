// Menstrukturkan data dengan Map
/*
    Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. Kalau sama seperti object, lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object. Map dapat menggunakan key dengan tipe data apa pun, tidak seperti object yang hanya menerima string. Jadi perbedaan mendasarnya terletak pada key yang digunakan.
*/

// Membuat Map
// Map dapat dibuat dengan mudah yaitu menggunakan object map constructor seperti berikut ini.
const map = new Map();
/*
    Kita telah berhasil membuat map yang bernilai kosong. Selain itu, kita juga dapat menambahkan data di dalam constructor ketika menginisialisasi map seperti berikut.
*/
const drink = new Map([
    ['kopi susu', 10000],
    ['lemon tea', 10000],
    ['kopi o', 8000],
    ['teh panas', 6000]
]);
console.log(drink);


// Menyimpan nilai di Map
/*
    Untuk menyimpan nilai ke dalam map, gunakanlah method set. Set menerima dua nilai yang pertama adalah keynya dan yang kedua adalah valuenya. Set memiliki struktur seperti berikut: set(key, value). Perhatikan contoh berikut ini.
*/
const food = new Map();
// food.set('mie goreng', 12000);
// Selain menggunakan string sebagai key pada Map, kita juga dapat menggunakan number sebagai key-nya seperti berikut ini.
food.set(12000, 'mie goreng');
console.log(food);


// Mengakses nilai di Map
// Setelah berhasil menyimpan nilai ke dalam map, kita dapat mengakses nilainya berdasarkan key tertentu dengan method get.
const snacks = new Map();
snacks.set('potato', 15000);
console.log(snacks.get('potato')); // output 150000
// Pada contoh di atas, key-nya adalah potato dan nilai yang dikembalikan adalah “15000”.


// Menghapus nilai di Map
/*
    Menghapus nilai di map dapat menggunakan method delete. Method ini akan menghapus nilai spesifik berdasarkan key yang kita tentukan.
*/
const account = new Map();
account.set('id', 31);
account.set('first name', 'Abdul');
account.set('last name', 'Hafidz');
account.set('Gender', 'Male');
account.delete('Gender');
console.log(account);
