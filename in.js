//scope
// var lang = "Bangla";
// function learn(topic){
//     lang = topic;
//     if(true) {
//         let a = 5; 
//         console.log(a);
//     }
//     console.log(`I'm learning ${topic}`);
// }

// learn("Javascript");
// console.log(`I know ${lang}`);




// function hello() {
//     console.log("Hello World!");
//     // return undefined;
// }
// let msg  = hello();
// console.log(msg);

// //function exrpession
// const hola = function() {
//     console.log("Hola there!");
//     // return undefined;
// }
// console.log(hola());

// //named function exrpession
// const hii = function func() {
//     console.log("named function");
// }
// console.log(hii());

// //arrow function
// const arrow = () => {
//     console.log("Arrow Function!");
// }

//anonymous function
// const numbers = [1,2,3,4,5];
// const double = numbers.map(function(number){
//     return number*2;
// });
// console.log(double)

 


// //Event Handaler
// function greet() {
//     console.log("You've Done!");
// }
// greet();

// const multiply = function(x,y) {
//     return x*y;
// }
// let product = multiply(3,5);
// console.log(product);

// const devide = (a,b) => {return a / b};
// const quotient = devide(20, 5);
// console.log(quotient);

// const multiplyTwo = x => x * 2;
// let result = multiplyTwo(4);
// console.log(result);

// const fact = (n) => {
//     if(n === 0){
//         return 1;
//     }else {
//         return n * fact(n-1);
//     }
// }
// let factResult = fact(5);
// console.log(factResult)

// let iife = (function() {
//     console.log("IIFE Function")
// })();
// console.log(iife());

 
//Array
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.push("Hoalada");
// fruits.unshift("Strabery");
// fruits.shift();
// fruits.pop();
// fruits.indexOf("Banana");
// fruits.includes("lala");
// console.log(fruits.includes("lala"));
 
//let fruits = ["Apple", "Banana", "Cherry","holada"];
//let num = [2,3,4];
//let fruit = fruits.slice(2,4)
//let fruit = fruits.splice(2,1, "Aije mama");
//console.log(fruits.splice(2,3, "Aije mama"));
//let con = fruits.join(",");
//let con  = fruits.concat(num);
//console.log(con);

// let fruits = ["Apple", "Banana", "Cherry","holada"];
// //console.log(fruits.reverse());
// console.log(fruits.sort());

// let fruits = ["Apple", "Banana", "Cherry","holada"];
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// })

// let fruits = ["Apple", "Banana", "Cherry","holada"];
// let upperCase = fruits.map(function(fruit) {
//     return fruit.toUpperCase();
// })
// console.log(upperCase);

// let fruits = ["Apple", "Banana", "Cherry","holada"];
// let filter = fruits.filter(function(fruit) {
//     return fruit.length > 5;
// })
// console.log(filter);

// const letters = ["a", "b", "c"];
// const upperCaseLetters = [];
// letters.forEach(function(letter){
//     upperCaseLetters.push(letter.toUpperCase());
// })
// console.log(upperCaseLetters);

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// const names = users.map(function(user) {
//     return user.name;
// })
// console.log(names);

// const userOver30 = users.filter(function(user){
//     return user.age > 30;
// })
// console.log(userOver30);

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNUmbers = numbers.filter(function(number){
//     return number % 2 === 0;
// });
// console.log(evenNUmbers);



// const products = [
//     {name: "Rupon", price: 1200, instoke: true},
//     {name: "Mia", price: 100, instoke: false},
//     {name: "Fardiya", price: 200, instoke: true}
// ];
// const inStoke = products.filter(function(product) {
//     return product.instoke;
// });
// let productNames = inStoke.map(function(product) {
//     return product.name;
// })
// console.log(productNames);

// let fruits = ["Apple" , "Banana","Apple", "Cherry","holada"];
// const result = fruits.filter((f) => f === "Apple" || f === "Cherry");
// console.log(result);

// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);

// let numbers = "Rupon";
// for(let num of numbers) {
//     console.log(num);    
// }



//Object
// const users = {
//     name: "Rupon",
//     dob: 2005,
//     age: 18
// }
// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));

// const a = "popularity";
// const users = {
//     name: "Rupon",
//     dob: 2005,
//     age: 18,  
//     a
// }
//users[a] = "-100%";
// users.popularity = "-100%";
// console.log(users);


// function sum(...rest) {
//     return rest.reduce((sum, cur) => sum + cur, 0);
// }
// console.log(sum(1,2,3));


// falsy value: false, 0, Undefined, NaN, '', null


// const a  = 6;
// const result = (a % 2 === 0) ? "Even" : "Odd";
// console.log(result);


//destructuring
// const users = {
//     id: 999,
//     name: "Rupon",
//     age: 32,
    // education: {
    //     degree: "Pass",
    //     school: {
    //         name: "Notre Dame College",
    //     },
    // },
// }
// const {education: {school: name} = {}} = users;
// console.log(name);

//Optionnal Chaining
// const users = {
//     id: 999,
//     name: "Rupon",
//     age: 32,
//     education: {
//         degree: "Pass",
//         school: {
//             name: "Notre Dame College",
//         },
//     },
// }
// console.log(users?.education?.school?.name);

//Nullish(null/undefined) Coalescing 
// let lang = undefined;
// console.log(lang ?? "Javascript");

// let getData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         console.log(data.title);
//     } catch(error) {
//         console.log(error);
//     }
// }
// console.log(getData());



// const paymentSuccess = true;
// const marks = 70;
// function  enroll(callback){
//     console.log("Enrollment progress....");
//     setTimeout(function() {
//         if(paymentSuccess) {
//             callback();
//         }else {
//             console.log("Payment failed");
//         }
//     }, 2000);
// }

// function progress(callback) {
//     console.log("Course on progress...");
//     setTimeout(function(){
//         if(marks>=80) {
//             callback();
//         }else {
//             console.log("Not enough marks!");
//         }
//     }, 3000);
// }

// function getScartificate(){
//     console.log("Preparing your scartificate!");

//     setTimeout(function(){
//         console.log("Congrats! You Got the Scartificate!");
//     }, 1000);
// }
 
// enroll();
// progress();
// getScartificate();


const form = document.getElementById("loginForm");
const fetchButton = document.getElementById("fetchDataButton");
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;

    localStorage.setItem("loggedUserId", userId);

    if(userId <= 99) {
        alert("Login Successfull!");
        fetchButton.disabled = false;
    }else {
        alert("Invalid UserId!");
    }

})

fetchButton.addEventListener("click", async function() {
    const userId = localStorage.getItem("loggedUserId");
    if(!userId){
        alert("Please Log In First!");
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.org/posts/${userId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
        }
        const data = await response.json();

        document.getElementById("dataDisplay").innerHTML = `
            <h2>post details</h2>
            <p><strong>Id: ${data.id} </strong></p>
            <p><strong>Title: </strong>${data.title}</p>
            <p>Link: ${data.image}</p>
            <p>Link: ${data.status}</p>
        `;
    }
    catch(error) {
        console.log("Error: ", error);
        document.getElementById("dataDisplay").innerText = "Failed to fetch data.";
    }
})