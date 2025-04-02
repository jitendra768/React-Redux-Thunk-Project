const employees = [
  { id: 101, name: "John", salary: 5000 },
  { id: 102, name: "Jane", salary: 6000 },
  { id: 103, name: "Jack", salary: 7000 },
];

// Find the index of Jane
const index = employees.findIndex((emp) => emp.id === 102);

if (index !== -1) {
  employees[index].salary = 6500; // Update salary
}

console.log(employees);
