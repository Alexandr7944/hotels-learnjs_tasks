// Максимальная зарплата

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
    let name = null;
    let topSalary = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (value <= topSalary) continue;
    name = key;
    topSalary = value;
  }
  return name;
}