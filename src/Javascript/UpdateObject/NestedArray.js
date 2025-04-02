const employees = [
  {
    id: 1,
    name: "Alice",
    department: {
      name: "Engineering",
      location: "NY",
      teams: [
        { id: 101, teamName: "Frontend", members: 10 },
        { id: 102, teamName: "Backend", members: 8 },
      ],
    },
  },
  {
    id: 2,
    name: "Bob",
    department: {
      name: "Marketing",
      location: "LA",
      teams: [
        { id: 103, teamName: "SEO", members: 5 },
        { id: 104, teamName: "Content", members: 7 },
      ],
    },
  },
];

// Update Backend team members to 12

const updatedEmployees = employees.map((emp) => {
  if (emp.id === 1) {
    return {
      ...emp,
      department: {
        ...emp.department,
        teams: emp.department.teams.map((team) =>
          team.id === 102 ? { ...team, members: 12 } : team
        ),
      },
    };
  }
  return emp;
});

console.log(updatedEmployees);
