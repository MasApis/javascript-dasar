// Menstrukturkan Data dengan Array
/*
Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut. 
perbedaan array dengan object adalah data yang disimpan di dalam array terurut, sedangkan di object tidak terurut.
Di array, kita bisa menambahkan nilai di antara data yang sudah ada. Data yang ada di array dapat diakses menggunakan pola indeks. Nilai yang disimpan di dalam array disebut dengan element.
Array juga merupakan sebuah object.
*/

// Anda dapat memanfaatkan method typeof untuk melihat jenis tipe data dari array tersebut seperti berikut.
// const array = [1, 2];
// console.log(typeof array);


// Membuat Array
// Menggunakan object constructor Array dapat dibuat dengan constructor new Array() seperti berikut.

/*
Array users merupakan array kosong yang belum memiliki element dan jika kita lihat di console akan menghasilkan [].
*/
const user = new Array(); // nilai array kosong

/*
Pada array numbers, kita menambahkan angka 5 pada constructornya sehingga itu menjadi initial length dari array. Meskipun sudah menetapkan panjangnya 5, kita masih bisa menambahkan dan menghapus element di array numbers tersebut.
*/
const numbers = new Array(5); // nilai array yang panjangnya 5
const userPubg = new Array("nanda", "bambang", "rio", "dupi", "fahri");
// console.log(user);
// console.log(numbers);
// console.log(userPubg);


// Menggunakan sintaks Array.from
/*
Array.from merupakan method untuk membuat array yang diperkenalkan di ES6. Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
*/
const abdul = Array.from("abdul");
// console.log(abdul);
const userMobileLegend = Array.from(userPubg);
// console.log(userMobileLegend);


// Menggunakan array literal
/*
Terakhir, cara yang paling mudah, singkat, dan disarankan untuk membuat array adalah menggunakan object literals. Membuat array dengan literals lebih disarankan karena lebih sederhana dan mudah untuk dibaca. Contohnya seperti berikut ini.

Element yang ada di dalam array literals dipisahkan oleh tanda koma. Element kosong juga dapat ditambahkan di dalam array literals seperti berikut.
*/
const animal = ["cheetah", "cat", "bird", "fish", "elephants", "snake", ""];
// console.log(animal);


// Mengakses Element Array
/*
 Data di dalam array terurut sehingga untuk mengaksesnya dapat dengan mudah dengan menggunakan nilai indeks-nya. Indeks merupakan angka yang digunakan untuk merujuk ke nilai di dalam array, sehingga kita bisa menambahkan, mengubah, atau menghapus nilainya.

 Indeks array dimulai dari angka 0. Untuk mengakses nilai di dalam array, gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi dari nilai yang ingin diakses seperti berikut.
*/
// console.log(animal[5]);


// Manipulasi(merubah/menambah) Nilai Array
// Menggunakan indexing
// mengubah nilai element ke 6
animal[5] = "crocodile"; // indexs ke 5 array animal(yang artinya element ke 6) kita manipulasi menjadi crocodile.
// console.log(animal);

// Menggunakan push
// Push adalah cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element terakhir. Misalnya kita memiliki array seperti berikut.
/*
Untuk menambahkan nilai ke dalam array menggunakan method push, dapat dilakukan dengan cara menuliskan nama array-nya diikuti tanda titik dan method push beserta nilai yang ingin ditambahkan yaitu 6 seperti berikut.
*/
animal.push("snake");
// console.log(animal);

// Menggunakan unshift 
// unshift adalah cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element awal.
animal.unshift("frog");
console.log(animal);


// Menghapus Element dan Data Array
/*
Data pada array dapat dihapus menggunakan keyword delete. Untuk menghapus data yang diinginkan, kita perlu mengetahui nilai indeksnya terlebih dahulu. Contohnya seperti di bawah ini yang akan menghapus data array pada indeks ke-1.
*/
const koncoTemu = ["bedul", "parhan", "donek", "bayu"];
// Data pada array sudah berhasil dihapus, tetapi element-nya masih ada.
// delete koncoTemu[1];

/*
bagaimana cara untuk menghapus element dan datanya? Untuk melakukan hal itu dapat dilakukan dengan menggunakan method splice() seperti berikut ini.
*/
// koncoTemu.splice(1, 1);
/*
Pada contoh di atas, kita menghapus element indeks ke-1 dan jumlah element yang dihapus adalah 1. Lalu, bagaimana caranya kita ingin menghapus dua element dari array?
*/
// koncoTemu.splice(1, 2);

/*
 ada cara lainnya yaitu menggunakan method shift dan pop. Kekurangan dari kedua method ini adalah tidak sefleksibel delete dan splice karena shift hanya menghapus element pertama dan pop menghapus element terakhir.
*/
// koncoTemu.shift();
koncoTemu.pop();
// console.log(koncoTemu);


/*
Array Destructuring
Destructuring digunakan untuk melihat isi dari array. Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign. Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.
*/
const koncoPondok = ["bambang", "fahri", "dupi", "brenden", "raply"];
const [orang1, orang2, orang3] = koncoPondok;
// console.log(orang1, orang2, orang3);


/*
Array Method
Perlu diketahui bahwa array memiliki banyak sekali method atau fungsi bawaan yang dapat digunakan untuk memudahkan proses pengelolaan atau penggunaannya. Kita hanya akan membahas beberapa method array yang sering digunakan dalam kehidupan sehari-hari oleh programmer JavaScript.
*/

// Reverse
/*
Reverse adalah method yang digunakan untuk membalikkan nilai array. Metode reverse() mengembalikan array dengan element yang dibalik.
Element pertama array akan menjadi element terakhir akhir dan sebaliknya. Method reverse tidak akan membuat array baru, tetapi mengatur ulang elemen tersebut di dalam array yang sudah ada.
*/
const jobIt = ["software engginer", "data scientist", "ai engginer", "mobile development"];
jobIt.reverse();
// console.log(jobIt);

// Sort
/*
Sort adalah method yang digunakan untuk mengurutkan nilai array. Loh, katanya array sudah menyimpan data secara terurut kok masih perlu mengurutkan array menggunakan sort? Memang array sudah mengurutkan data sesuai dengan indeks-nya tetapi mengurutkan berdasarkan indeks saja belum cukup. 
Terkadang, kita butuh untuk mengurutkan array berdasarkan kriteria tertentu sesuai kebutuhan aplikasi. Secara default, array akan diurutkan secara ascending. Contohnya seperti berikut.
*/
const alphabet = ['B', 'F', 'G', 'A', 'D', 'C', 'Z', 'Y', 'K', 'M'];
alphabet.sort();
console.log(alphabet);