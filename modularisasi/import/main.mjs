// Import
/*
    JavaScript memungkinkan kita untuk menggunakan function/method dari modul lainnya dengan dua syarat: 

    Harus meng-import function/method tersebut.
    Function/method tersebut sudah di-export (export akan dibahas di materi selanjutnya).
    Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh nama function/method/variable. Perhatikan contoh berikut ini.
*/
// import myFunction from "./anotherFile.mjs";
// myFunction();
/*
    Contoh di atas akan menghasil tulisan “Ini adalah function export default”. Contoh tersebut dikatakan sebagai default import. Default import dapat bekerja jika di modul lainnya terdapat function/method/variable yang di-export default. 
*/

/*
    Pada contoh di atas, export default-nya adalah myFunction. Default import juga memungkinkan kita untuk import function/method/variable yang namanya tidak harus sama dengan function/method/variable aslinya. Simak contoh berikut agar lebih terbayang.
*/
// Aslinya nama function yang di import adalah multiply()
// import resultMultiply from "./anotherFile.mjs";
// resultMultiply(12, 200);


/*
    Lalu, bagaimana ketika kita ingin mengimpor dari suatu modul yang memiliki banyak function/method/variable yang di-export? Jawabannya adalah kita dapat menggunakan named import.

    Berbeda dengan default import yang tidak memerlukan nama spesifik, named import memungkinkan kita mengimpor function/method/variable tertentu berdasarkan namanya. Saat menggunakan named import, pastikan nama fungsi yang ingin diimpor sesuai.
*/
// import { tambah, kurang, kali, bagi } from "./anotherFile.mjs";
// tambah(12, 34);
// kurang(100, 50);
// kali(12, 78);
// bagi(200, 2);


/*
    Namun, ada cara lainnya yaitu menggunakan import *. Import * dapat dilakukan ketika function/method/variable yang ingin kita impor dari modul yang sama sangat banyak.

    Jika function/method/variable yang ingin kita import sangat banyak, kita dapat menggunakan import *. Perhatikan contoh berikut.
*/
import * as variable from './anotherFile.mjs';
variable.tambah(12, 20);
variable.kurang(20, 15);
variable.kali(12, 20);
variable.bagi(12, 4);


/*
    Selain menggunakan tanda bintang (*), kita juga dapat menambahkan as variable (sebagai alias) untuk mengimpor seluruh variable yang berasal dari modul lainnya (pada contoh anotherfile.mjs). Apa perbedaan antara import {} dan import *?

    import * memungkinkan kita untuk mengimpor seluruh module yang di export. Namun, kekurangannya adalah sulit untuk dibaca karena tidak eksplisit, sedangkan menggunakan import {} akan menjadi eksplisit sehingga kita bisa tahu apa saja function/method/variable yang ingin di-import.

    Pada contoh sebelumnya, Anda telah melihat contoh penggunaan keyword as. Keyword tersebut digunakan pada import yang disebut dengan import alias. Import alias digunakan untuk mengubah nama dari function/method/variable yang berasal dari modul lain menjadi nama yang kita inginkan. Tujuan dari import alias adalah mempermudah ketika kita memiliki nama function/method/variable yang sama di beberapa modul. 

    Misalnya, Anda memiliki function dengan nama myFunction di dua modul berbeda, yaitu user.mjs dan customer.mjs. Lalu, Anda ingin menggunakan kedua function tersebut di satu modul yaitu main.mjs.

    Tanpa menggunakan import alias, Anda akan mendapatkan error seperti berikut.
*/
// import {myFunction} from './customer.mjs';
// import {myFunction} from './user.mjs';

// myFunction();
// myFunction();
/*
    Output : SyntaxError: Identifier 'myFunction' has already been declared
*/

import { myFunction as myCustomer } from './customer.mjs';
import { myFunction as myUser } from './user.mjs';

myCustomer();
myUser();
/*
    Alih-alih menggunakan myFunction, kita mengubah namanya menjadi userFunction dan customerFunction. Import alias juga meningkatkan readability kode yang ditulis. Kita langsung tahu konteks dan maksud dari function/method/variable yang diimpor contohnya userFunction yang berasal dari modul user dan konteksnya adalah user. Menggunakan alias saat mengimpor tidak hanya menghindari konflik seperti kasus sebelumnya, tetapi juga meningkatkan keterbacaan kode.
*/
