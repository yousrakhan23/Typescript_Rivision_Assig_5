
//::::::::::::::::::::::   Object , Array and function Assignment    ::::::::::::::::::::::::::::::

//Assignment 1: Building Your Friend List

//Task: Create a program that manages a simple friend list.

// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.

type Friend = {
    firstName: string;
    lastName: string;
    id?: number;
}

let people: { friends: Friend[] } = {
    friends: []
};

const friend1: Friend = {
    firstName: "Uzma",
    lastName: "Ibraheem",
    id: 6789
};

const friend2: Friend = {
    firstName: "Niba",
    lastName: "Farooq",
    id: 7890
};

const friend3: Friend = {
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

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const ConvertedArray = scrambledArray.map(element => {
    if (typeof element !== `string`) {
        return String(element);
    }
    return element;
});

const rearrangingArray: string[] = [];

rearrangingArray.push(ConvertedArray.pop() as string);

rearrangingArray.push(ConvertedArray.splice(3, 1)[0]);

rearrangingArray.push(ConvertedArray.splice(3, 1)[0]);

rearrangingArray.push(ConvertedArray.shift() as string);

rearrangingArray.push(ConvertedArray.shift() as string);

rearrangingArray.push(ConvertedArray.pop() as string);

const result = rearrangingArray.join(` `);

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

const inventory: { name: string; model: string; cost: number; quantity: number }[] = [];

const product1 = {
    name: "charging light",
    model: "sogo",
    cost: 850,
    quantity: 4
};

const product2 = {
    name: "pencil",
    model: "dollar",
    cost: 35,
    quantity: 20
};

const product3 = {
    name: "shirt",
    model: "khadii",
    cost: 6700,
    quantity: 56
};

inventory.push(product1);
inventory.push(product2);
inventory.push(product3);

console.log(`Quantity of the third product (${inventory[2].name}): ${inventory[2].quantity}`);

const product4 = {
    name: "cellphone",
    model: "oppoA76",
    cost: 40000,
    quantity: 1
};

inventory.push(product4);

inventory.forEach((product, index) => {
    console.log(`Product: ${index + 1}:`);
    console.log(`Name: ${product.name}`);
    console.log(`Model: ${product.model}`);
    console.log(`Cost: ${product.cost}`);
    console.log(`Quantity: ${product.quantity}`);
});

//-----------------------------------------------------------------------------------------------------------------------------

//Assignment 4: Student List Organizer.

// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:

// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

interface Student {
    name: string,
    isSenior: boolean,
    hasCompleteAssignments: boolean,
}

const students: Student[] = [
    { name: "Yousra", isSenior: true, hasCompleteAssignments: true },
    { name: "Hasnain", isSenior: true, hasCompleteAssignments: true },
    { name: "Ammar", isSenior: true, hasCompleteAssignments: true },
    { name: "Abeera", isSenior: true, hasCompleteAssignments: true },
    { name: "Haider", isSenior: true, hasCompleteAssignments: true },
];

function findSeniorStudentsWithTheirAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompleteAssignments);

}
const seniorStudentsWithTheirAssignments = findSeniorStudentsWithTheirAssignments(students);
console.log("Senior students with their completed assignments:", seniorStudentsWithTheirAssignments);

function removeStudentsWithoutTheirAssignments(student: Student[]): Student[] {
    return students.filter(student => student.hasCompleteAssignments);
}

const updatedClassList = removeStudentsWithoutTheirAssignments(students);

console.log("Updated class list:", updatedClassList);






















