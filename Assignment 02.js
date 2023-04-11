// // Question number 1 
// function plusnum (num1) {
//     return function (num2) {
//         console.log(num1 + num2)
//     }
// }
// let result = plusnum(5);
// result(5)

// // Question number 2
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function search () {
//     let find = arr.includes(4)
//     console.log(find)
//     if (arr.length < 10) {
//         arr.length - 1
//         search()

//     }
// }
// search()
// // Question number 2
// let checkout = 0;
//     let numArray = ["1","2","3","4","5","6"];
//     newNumber = prompt("Enter value to check in array:");
//     checkArray(newNumber);
//     function checkArray(number) {
//         for (let index = 0, check = 0; index < numArray.length && check==0; index++) {
//             if (number == numArray[index]) {
//                 check = 1;
//                 checkout = check;
//                 console.log("true");
//             }
//         }
//         if (checkout == 0) {
//             console.log("false");
//             newNumber = prompt("Number is'nt present. Please enter new value:")
//             checkArray(newNumber);
//         }
//     }
// Question number 3
// let text = document.querySelector("body")
// function addelement (txt) {
//     text.innerHTML = "<p>"+txt+"<p/>"
// }

// addelement("Hey Sir! i will add the element as per assignment")

// // Queston number 4 
// let li = document.querySelector("#li")
// function addli (list) {
//     li.innerHTML = "<li>"+list+"</li>"
// }

// addli("Dear Sir Unordered list item has been added")

// // Queston number 5
// function changedbgcolor (select, bgcolor) {
//     let selector = document.querySelector("."+select);
//     selector.innerHTML = "<p> The Background color has been changed</P>"
//     selector.style.backgroundColor = bgcolor
// }

// changedbgcolor("bgcolor", "Blue")

// // Question number 6
// function saveobject (key, objname2) {
//     let object = {
//         name:"Hamza Ghouri",
//         cource: "Javascrip",
//         Mentor: "Saylani Welfare Trust",
//         Teacher: "Ishaq Bhojani"
//     };
//     let objname1 = JSON.stringify(object)
//     localStorage.setItem(key, objname1)
// }
// saveobject("hamza", "objname1")

// // Question number 7
// function getrecords (key) {
//     let savedrecords = localStorage.getItem(key);
//     let getRecord1 = JSON.parse(savedrecords);
//     let arr =[getRecord1]
//     return arr
// }

// let get = getrecords("hamza")
// console.log(get)

// Question number 8
// function savesproperties () {
//    let obj = {
//         name:"Hamza Ghouri",
//         course: "Javascript Crash Course",
//         Mentor: "Saylani Welfare Trust",
//         Teacher: "Ishaq Bhojani"
//     };
    
//     for (i in  obj) {
//         localStorage.setItem(i,`${i}: ${obj[i]}`)
//         let val = (localStorage.getItem(i))
//         console.log(val);

//     }
// }
// savesproperties()