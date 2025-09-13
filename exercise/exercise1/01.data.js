// TODO: Buat array 'students' dengan properti {nama, umur, jurusan}
// Cetak nama mahasiswa pertama

const students = [{
    nama : "Abdul Hafidz",
    umur : 20,
    jurusan : "Teknik Informatika"
},
{
    nama : "Farhan Dwi Saputra",
    umur : 20,
    jurusan : "Teknik Informatika"
},
{
    nama : "Bayu Dwi Pratama",
    umur : 20,
    jurusan : "Teknik Perkapalan"
},
{
    nama : "Doni Sanaji",
    umur : 20,
    jurusan : "Administrasi publik"
}
]

for(let i = 0; i <= students.length; i++) {
    console.log(students[i].nama);
}

// students.forEach(name => console.log(name.nama));

// console.log(students[0].nama);