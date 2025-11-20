// JSON.parse is used to convert plain json to javascript object
const jsonString = '{"name": "Alice", "age": 25, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);
// Output: Alice
console.log(jsonObject.age);
// Output: 25
console.log(jsonObject.city);
// Output: New York
