//::::::::::::::::::::::   Object , Array and function Assignment    ::::::::::::::::::::::::::::::
var people = {
    friends: []
};
var friend1 = {
    firstName: "Uzma",
    lastName: "Ibraheem",
    id: 6789
};
var friend2 = {
    firstName: "Niba",
    lastName: "Farooq",
    id: 7890
};
var friend3 = {
    firstName: "Ammar",
    lastName: "Khan",
    id: 3456
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);
//------------------------------------------------------------------------------------------------------------------------------
// Assignment 2:Manipulating an Array: Rearranging Words.
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var ConvertedArray = scrambledArray.map(function (element) {
    if (typeof element !== "string") {
        return String(element);
    }
    return element;
});
var rearrangingArray = [];
rearrangingArray.push(ConvertedArray.pop());
rearrangingArray.push(ConvertedArray.splice(3, 1)[0]);
rearrangingArray.push(ConvertedArray.splice(3, 1)[0]);
rearrangingArray.push(ConvertedArray.shift());
rearrangingArray.push(ConvertedArray.shift());
rearrangingArray.push(ConvertedArray.pop());
var result = rearrangingArray.join(" ");
console.log(result);
//----------------------------------------------------------------------------------------------------------------------------
//Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
var inventory = [];
var product1 = {
    name: "charging light",
    model: "sogo",
    cost: 850,
    quantity: 4
};
var product2 = {
    name: "pencil",
    model: "dollar",
    cost: 35,
    quantity: 20
};
var product3 = {
    name: "shirt",
    model: "khadii",
    cost: 6700,
    quantity: 56
};
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
console.log("Quantity of the third product (".concat(inventory[2].name, "): ").concat(inventory[2].quantity));
var product4 = {
    name: "cellphone",
    model: "oppoA76",
    cost: 40000,
    quantity: 1
};
inventory.push(product4);
inventory.forEach(function (product, index) {
    console.log("Product: ".concat(index + 1, ":"));
    console.log("Name: ".concat(product.name));
    console.log("Model: ".concat(product.model));
    console.log("Cost: ".concat(product.cost));
    console.log("Quantity: ".concat(product.quantity));
});
var students = [
    { name: "Yousra", isSenior: true, hasCompleteAssignments: true },
    { name: "Hasnain", isSenior: true, hasCompleteAssignments: true },
    { name: "Ammar", isSenior: true, hasCompleteAssignments: true },
    { name: "Abeera", isSenior: true, hasCompleteAssignments: true },
    { name: "Haider", isSenior: true, hasCompleteAssignments: true },
];
function findSeniorStudentsWithTheirAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompleteAssignments; });
}
var seniorStudentsWithTheirAssignments = findSeniorStudentsWithTheirAssignments(students);
console.log("Senior students with their completed assignments:", seniorStudentsWithTheirAssignments);
function removeStudentsWithoutTheirAssignments(student) {
    return students.filter(function (student) { return student.hasCompleteAssignments; });
}
var updatedClassList = removeStudentsWithoutTheirAssignments(students);
console.log("Updated class list:", updatedClassList);
