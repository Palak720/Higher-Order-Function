const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  
function processStudents(students) {
    // Step 1: Filter students with marks above 60
    const filteredStudents = students.filter(student => student.marks > 60);
  
    // Step 2: Sort the filtered array in descending order of marks
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
  
    // Step 3: Map the sorted array to extract only the names
    const sortedNames = sortedStudents.map(student => student.name);
  
    return sortedNames;
}

  
  const result = processStudents(students);
  console.log(result); // Output: ["Charlie", "Bob"]
  