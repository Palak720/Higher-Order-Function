const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// Step 1: Use reduce() to count occurrences of each category
const categoryCounts = categories.reduce((acc, category) => {
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

console.log(categoryCounts); 

// Extra Challenge: Sort categories by their counts in descending order
const sortedCategories = Object.entries(categoryCounts)
  .sort(([, countA], [, countB]) => countB - countA)
  .map(([category]) => category);

console.log(sortedCategories); 
/