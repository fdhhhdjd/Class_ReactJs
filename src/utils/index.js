function generateRandomName() {
  const firstNames = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Fiona',
    'George',
    'Hannah',
    'Ivy',
    'Jack',
  ];
  const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Lee',
    'Wilson',
    'Clark',
    'Davis',
    'Miller',
    'Hall',
    'Young',
  ];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

export const generateRandomStudentList = (count) => {
  const students = [];

  for (let i = 0; i < count; i++) {
    const student = {
      name: generateRandomName(),
    };
    students.push(student);
  }

  return students;
};
