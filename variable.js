// penggunaan variable const dan let
// variable const artinya nilai di dalam variable tersebut tidak dapat diubah di statement lain (konstan).
// variable let artinya nilai di dalam variable tersebut dapat diubah di statement lain.
const umurDupi = 19;
let namaPanjangDupi = 'ABDUL'; // statement awal

// const
// umurDupi = 20;
// console.log(umurDupi); 
// jika dijalankan maka akan muncul pesan error yang mengatakan bahwa variable umurDupi merupakan variable konstanta(const).

//let
namaPanjangDupi = 'ABDUL HAFIDZ'; // statement kedua
console.log(namaPanjangDupi);

// perlu di perhatikan variable yang menggunakan let nilai di dalamnya dapat diubah, pada statement 1 nilai nya ABDUL lalu pada statement 2 nilai nya aku ganti ABDUL HAFIDZ, kemudian aku cetak nilai variable namaPanjangDupi maka statement yang akan dieksekusi adalah statement 2.