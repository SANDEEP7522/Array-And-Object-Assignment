let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Mike', lastName: 'Johnson', age: 19, grade: 'A' },
    { id: 4, firstName: 'Emily', lastName: 'Davis', age: 21, grade: 'C' }
];

function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
    console.log(`Student ${firstName} ${lastName} added.`);
}

function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
        console.log(`Student with ID ${id} updated.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

function deleteStudent(id) {
    const initialLength = students.length;
    students = students.filter(student => student.id !== id);
    if (students.length < initialLength) {
        console.log(`Student with ID ${id} deleted.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

function listAllStudents() {
    console.log("List of All Students:");
    students.forEach(student => {
        console.log(`${student.id}. ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

function findStudentsByGrade(grade) {
    const studentsByGrade = students.filter(student => student.grade === grade);
    console.log(`Students with Grade ${grade}:`);
    studentsByGrade.forEach(student => {
        console.log(`${student.id}. ${student.firstName} ${student.lastName}, Age: ${student.age}`);
    });
    if (studentsByGrade.length === 0) {
        console.log(`No students found with Grade ${grade}.`);
    }
}

function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average Age of Students: ${averageAge.toFixed(2)}`);
}

addStudent(5, 'Sarah', 'Wilson', 23, 'B');

updateStudent(2, { age: 23, grade: 'A' });

deleteStudent(4);

listAllStudents();

findStudentsByGrade('A');

calculateAverageAge();
