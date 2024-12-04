function processStudents(employees) {
    // Step 1: Filter employees who have completed more than 5 tasks
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);
  
    // Step 2: Map to get name and performance level
    const performanceLevels = filteredEmployees.map(employee => {
      let performance;
      if (employee.rating > 4.5) {
        performance = "Excellent";
      } else if (employee.rating >= 3 && employee.rating <= 4.5) {
        performance = "Good";
      } else {
        performance = "Needs Improvement";
      }
  
      return {
        name: employee.name,
        performance: performance
      };
    });
  
    // Step 3: Sort by performance level
    const sortedEmployees = performanceLevels.sort((a, b) => {
      const performanceOrder = ["Excellent", "Good", "Needs Improvement"];
      return performanceOrder.indexOf(a.performance) - performanceOrder.indexOf(b.performance);
    });
  
    return sortedEmployees;
  }
  
  const result = processStudents(employees);
  console.log(result);
  