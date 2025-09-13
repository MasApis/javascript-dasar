const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
    const addData = {name, email, joinYear};
    employees.push(addData);
    
}

addEmployee('Abdul', 'fulan2@dicoding.com', 2025);
console.log(employees);
