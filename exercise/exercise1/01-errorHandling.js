// TODO: Buat function bagi(a, b)
// Jika b = 0, lempar error "Tidak bisa membagi dengan nol!"
// Jika bukan number, lempar error "Input harus number"

const bagi = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input harus number");
    } else if(b === 0) {
        throw new Error("Tidak bisa membagi dengan nol!");
    }

    return a / b;
}

try {
    console.log(bagi(12, 10));
} catch(err) {
    console.log("Error : ", err.message);
}

// console.log(bagi(12, "3"));