// Export
/*
    Default export adalah cara kita untuk mengekspor minimal satu function/method/variable di sebuah modul. Dengan menggunakan default export, modul lain yang ingin menggunakan nilainya tidak perlu tahu spesifik namanya karena secara default sudah ada function/method/variable yang diekspor. Perhatikan contoh berikut ini.
*/
// export default function sayGoodMorning() {
//     console.log("Good Morning");
// }

/*
    Mengimpor nilai dari default export tidak membutuhkan kurung kurawal seperti contoh sebelumnya. 

    Contoh di atas akan mencetak dua tulisan Good morning! di Terminal/Console. Apakah dengan menggunakan default export kita hanya bisa mengekspor satu fungsi, metode, atau variabel saja? Tentu tidak. 

    Secara teknis, kita bisa mengekspor lebih dari satu fungsi, metode, atau variabel, tetapi hal ini tidak disarankan ketika menggunakan export default. Sebaiknya, ketika menggunakan default export, satu modul satu nilai. Di JavaScript, satu modul hanya bisa memiliki satu default export. Tujuan dari hal ini adalah agar struktur kode lebih jelas dan memudahkan navigasi ketika ingin mencari suatu modul.

    Selain itu, apakah kita bisa mengombinasikan antara default export dan named export? Tentunya itu bisa, tetapi bukan best practices karena tidak konsisten. Perhatikan contoh di bawah ini.
*/
export default function sayGoodMorningTo() {
    console.log("Halo selamat pagi (default export)");
}

export function sayGoodEvening() {
    console.log("Halo selamat sore (named export)");
}