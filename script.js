const data = [
  { name: "john", age: 27, profession: "developer" },
  { name: "jane", age: 24, profession: "admin" },
  { name: "newbee", age: 29, profession: "unique" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(developer => {
    console.log(`name: ${developer.name}, age: ${developer.age}, profession: ${developer.profession}`);
  });
}

// 2. Add Data
function addData() {
  const newData = {
     name :  "smith",
     age : 28,
     profession : "backend developer",
  }
  // Add the new data object to the array
  data.push(newData);

}

// 3. Remove Admins
function removeAdmin() {
  var data = data.filter(person => person.profession.toLowerCase() !== "admin");
}

// 4. Concatenate Array
function concatenateArray() {
  data = data.concat(data);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  console.log(totalAge / data.length);
  return totalAge / data.length;
}

// 6. Age Check
function checkAgeAbove25() {
  console.log(data.every(person => person.age > 25));
  return data.every(person => person.age > 25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = new Set(data.map(person => person.profession));
  console.log(Array.from(professions));
  return Array.from(professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(person => person.name.toLowerCase() === "john");
  if (john) {
    john.profession = newProfession;
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = {};
  data.forEach(person => {
    const profession = person.profession.toLowerCase();
    professionCount[profession] = (professionCount[profession] || 0) + 1;
  });
  return professionCount;
}
