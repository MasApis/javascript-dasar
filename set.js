// Menstrukturkan data dengan Set
/*
    Terakhir, struktur data yang kita bahas adalah set. Set adalah struktur data yang spesial dibandingkan dengan map, array, dan object. Kenapa dikatakan spesial?

    Jawabannya adalah karena set tidak memiliki key dan indeks ketika menyimpan data. Selain itu, data yang disimpan di dalam set akan bernilai unik artinya tidak akan ada data yang duplikat. Spesial, bukan?
*/

// Membuat set
// set dapat dibuat dengan cara menuliskan object constructor set seperti contoh berikut.
const set = new Set();
// Set juga dapat dibuat beserta dengan nilainya seperti berikut ini.
const numbers = new Set([10, 20, 30]);
console.log(numbers);


// Menyimpan nilai di set
/*
    Untuk menambahkan nilai set setelah diinisialisasi dapat menggunakan method add.
    Method add hanya menerima satu argument sebagai nilai yang ingin kita tambahkan ke dalam set. Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja. Oleh karena itu, data yang ada di dalam set tidak akan terduplikat.
*/
const set2 = new Set();
set2.add(1);
set2.add('Banana');
set2.add(1);
set2.add('Banana');
console.log(set2); // Output : 1, Banana
/*
    Dalam contoh kode di atas, perhatikan bahwa ketika menambahkan data yang sama, seperti 'Apple' dan '1' ke dalam set, hanya satu data yang tersimpan.
*/


// Mengakses nilai di set
const set3 = new Set();
set3.add(31);
set3.add('Abdul Hafidz');
/*
    Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan (looping). Cara pertama adalah menggunakan keyword for seperti berikut ini.
*/
for (const result of set3) {
    console.log(result);
}
// Cara lainnya adalah menggunakan keyword foreach seperti berikut ini.
set3.forEach((value) => console.log(value));


// Menghapus nilai di set
// gunakanlah method delete. 
const set4 = new Set();
set4.add(1);
set4.add(2);
set4.delete(1);
console.log(set4); // Output : set(1) {2}

/*
    Ingat bahwa set tidak memiliki urutan atau index, jadi argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
*/