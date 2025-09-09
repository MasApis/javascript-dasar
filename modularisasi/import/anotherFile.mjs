// export default function myFunction() {
//     console.log("Ini adalah function export default");
// }

// export default function multiply(a, b) {
//     const result = a + b;
//     console.log(`Hasil dari ${a} + ${b} = ${result}`);
// }

export const tambah = (a, b) => {
    const hasil = a + b;
    console.log(`Hasil dari ${a} + ${b} = ${hasil}`);
}

export const kurang = (a, b) => {
    const hasil = a - b;
    console.log(`Hasil dari ${a} - ${b} = ${hasil}`);
}

export const kali = (a, b) => {
    const hasil = a * b;
    console.log(`Hasil dari ${a} * ${b} = ${hasil}`);
}

export const bagi = (a, b) => {
    const hasil = a / b;
    console.log(`Hasil dari ${a} / ${b} = ${hasil}`);
}