// Menstrukturkan data dengan array
/*
    Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut. Letak perbedaan array dengan object adalah data yang disimpan di dalam array terurut, sedangkan di object tidak terurut. Di array, kita bisa menambahkan nilai di antara data yang sudah ada. Data yang ada di array dapat diakses menggunakan pola indeks. Nilai yang disimpan di dalam array disebut dengan element.

    Array dapat menyimpan nilai dengan tipe data apa pun, seperti number, object, dan string. Oleh karena itu, array bersifat dinamis sehingga kita dapat menambahkan element baru di dalam array. Array juga merupakan sebuah object. Anda dapat memanfaatkan method typeof untuk melihat jenis tipe data dari array tersebut seperti berikut.
*/

// Membuat Array
// Membuat array ada 3 cara dibawah ini.

// Menggunakan object destructor
// Array dapat dibuat dengan constructor new Array() seperti berikut.
const users = new Array(); // Array users merupakan array kosong yang belum memiliki element dan jika kita lihat di console akan menghasilkan [].

/*
    Pada array numbers, kita menambahkan angka 5 pada constructornya sehingga itu menjadi initial length dari array. Meskipun sudah menetapkan panjangnya 5, kita masih bisa menambahkan dan menghapus element di array numbers tersebut.
*/
const numbers = new Array(5);
console.log("Array yang nilainya kosong = ", users);

// Menggunakan sintax Array.from 
// Cara lainnya untuk membuat array adalah menggunakan Array.from. Contohnya seperti di bawah ini.
const foo = Array.from('malik');
/*
    Array.from merupakan method untuk membuat array yang diperkenalkan di ES6. Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
*/
const users2 = new Array("Abdul", "Malik", "ole", "osal");
const copyUsers = Array.from(users2);
console.log(copyUsers);
console.log(foo);

// Menggunakan array literal
/*
    Terakhir, cara yang paling mudah, singkat, dan disarankan untuk membuat array adalah menggunakan object literals. Membuat array dengan literals lebih disarankan karena lebih sederhana dan mudah untuk dibaca. Contohnya seperti berikut ini.
*/
const users3 = [];
const fruits = ["Banana", "Watermelon", "Orange", "Cherry"];
console.log(fruits);



// Mengakses elemen 
/*
    Data di dalam array terurut sehingga untuk mengaksesnya dapat dengan mudah dengan menggunakan nilai indeks-nya. Indeks merupakan angka yang digunakan untuk merujuk ke nilai di dalam array, sehingga kita bisa menambahkan, mengubah, atau menghapus nilainya. Indeks array dimulai dari angka 0. Untuk mengakses nilai di dalam array, gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi dari nilai yang ingin diakses seperti berikut.
*/
const zoo = ["Whale", "Lion", "Monkey", "Crocodile", "Farhan"];
console.log(zoo[0]); // akan menampilkan Whale
console.log(zoo[3]); // akan menampilkan Crocodile
/*
    Ketika mengakses indeks di luar dari ukuran array akan menghasilkan undefined. Jadi, jangan sampai mengakses array melebihi ukurannya, ya!
*/




// Manipulasi nilai array
// manipulasi nilai pada array dapat dilakukan dengan menggunakan indexing dan method push.

// Menggunakan indexing
const myArray = [1, 2, 3, 4, 5];
// Lalu, bagaimana caranya untuk mengubah nilai element ke-2? Perhatikan langkahnya seperti berikut ini.
myArray[1] = 10;
console.log(myArray); 

// Menggunakan method push
/*
    Push adalah cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element terakhir. Misalnya kita memiliki array seperti berikut.
*/
const myArray2 = [1, 2, 3, 4, 5, 6];
myArray.push(6);
console.log(myArray);



// Menghapus elemen dan ata array
// Data pada array dapat dihapus menggunakan keyword delete.
const programmingLanguage = ["PHP", "C", "C#", "C++", "JAVA", "PYTHON", "RUBY", "JAVASCRIPT"];
// delete programmingLanguage[2];
 
/*
    ketika menghapus array menggunakan keyword delete. Data pada array sudah berhasil dihapus, tetapi element-nya masih ada. Lalu, bagaimana cara untuk menghapus element dan datanya? Untuk melakukan hal itu dapat dilakukan dengan menggunakan method splice() seperti berikut ini.
*/
// programmingLanguage.splice(2,1);
/*
    Method splice membutuhkan dua parameter yaitu indeks dari element yang ingin dihapus dan jumlah element yang ingin dihapus. Pada contoh di atas, kita menghapus element indeks ke-1 dan jumlah element yang dihapus adalah 1. Lalu, bagaimana caranya kita ingin menghapus dua element dari array?
*/
// programmingLanguage.splice(0, 2);

// Menghapus element menggunakan method shift
// Metode ini menghapus element pertama di dalam array
programmingLanguage.shift();

// Menghapus element menggunakan method pop
// Metode ini menghapus element terakhir di dalam array
programmingLanguage.pop();
console.log(programmingLanguage);



// Array destructing
/*
    Destructuring digunakan untuk melihat isi dari array. Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign. Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.
*/
const introduction = ["Hello", "Abdul Hafidz"];
const [greeting, name] = introduction;
console.log(name);
/*
    Dapat dilihat bahwa variabel greeting didapatkan dari array introduction tanpa harus mengaksesnya menggunakan index. Destructuring array mempermudah kita untuk memecah struktur data menjadi bagian-bagian yang lebih kecil seperti contoh kode di atas. Destructuring array hanya dapat dilakukan jika array tersebut tidak bernilai null atau undefined. Ketika melakukan destructuring pada array yang bernilai null atau undefined akan menyebabkan error. 
*/



// Array method
/*
    Perlu diketahui bahwa array memiliki banyak sekali method atau fungsi bawaan yang dapat digunakan untuk memudahkan proses pengelolaan atau penggunaannya. Kita hanya akan membahas beberapa method array yang sering digunakan dalam kehidupan sehari-hari oleh programmer JavaScript.
*/
const programmingJobs = ["Fullstack Web Developer", "Android Developer", "Data Science", "Cyber Security", "Network Engginer"];

// Reverse
/*
    Reverse adalah method yang digunakan untuk membalikkan nilai array. Metode reverse() mengembalikan array dengan element yang dibalik.
*/
// programmingJobs.reverse();
// console.log(programmingJobs);

// Sort
/*
    Sort adalah method yang digunakan untuk mengurutkan nilai array. Secara default, method sort akan mengurutkan berdasarkan abjadnya.
*/
programmingJobs.sort();
console.log(programmingJobs);