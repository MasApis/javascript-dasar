// Export
/*
    Export adalah keyword yang kita gunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini. Export terdiri dari dua jenis, yaitu default export dan named export. Perhatikan contoh named export berikut ini.
*/
export const name = "Abdul Hafidz";
export const email = "fulan@gmail.com";
export const age = 20;

/*
    Cara tersebut merupakan cara export sebelum deklarasi dilakukan. Cara lainnya adalah export setelah deklarasi dilakukan seperti berikut ini.
*/
const name2 = "Farhan Dwi Saputra";
const email2 = "fulan@masapis.com";
const age2 = 20;

export {name2, email2, age2};

/*
    Named export cocok digunakan ketika ingin mengekspor banyak nilai dari satu modul. Selain itu, named export mengharuskan kita untuk menulis nama function/method/variable secara spesifik ketika mengimpornya. Menulis nama secara spesifik membuat codebase menjadi konsisten.

    Default export cocok digunakan untuk menghindari conflict ketika mengimpornya karena kita tidak perlu menulis function/method/variable sesuai dengan namanya. Selain itu, default export membuat struktur lebih jelas karena dalam satu module hanya ada satu nilai yang diekspor.
*/