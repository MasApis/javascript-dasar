// Spread operator
/*
    Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan. Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array. Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. 
*/

// Oject
// Spread operator di object dapat dilakukan seperti berikut ini.
const obj1 = {name : "masapistech"};
const obj2 = {citizenship : "indonesia", address : "Kp. Sidomulyo Km. 18 Kijang"};
const newObj = {...obj1, ...obj2};
console.log(newObj);
/*
    Dapat dilihat bahwa spread operator dapat mempermudah menggabungkan dua object. Selain mempermudah menggabungkan object, spread operator juga mempermudah untuk menyalin object seperti berikut ini.
*/
const originalObj = {name : "Abdul Hafidz", age : "20"};
const copyObj = {...originalObj};
console.log(copyObj);


// Array
// Selain di object, spread operator juga dapat digunakan di array seperti berikut ini.
const array1 = ["Indonesia", "Malaysia", "Singapore", "Brunei", "Laos"];
const array2 = ["Philiphines", "Cambodia", "Thailand", "Vietname", "Myanmar"]
const aseanCountry = [...array1, ...array2];
console.log(aseanCountry);
/*
    Untuk menggabungkan dua array menggunakan spread operator cukup mudah, kan? Spread operator juga dapat digunakan untuk menyalin sebuah array seperti berikut.
*/
const fruit = ["Banana", "Avocado"];
const copyFruit = [...fruit];
console.log(copyFruit);

/*
    Spread operator pada dasarnya sama seperti menggunakan looping untuk mendapatkan nilai yang ada di dalam object maupun di dalam array.
*/