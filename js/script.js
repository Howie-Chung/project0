/* ===================================== Rules ===================================== */
// ⭐ String = Using "", "Howie"
// ⭐ Number = Using nothing, 100
// ⭐ Boolean = Using true or false, true
// ⭐ Array = Using [], ["student"]
// ⭐ Object = Using {}, {Content}
// ⭐ let = I can change stuff. It is different from const.
// ⭐ const = I CANNOT change String. It is different from let Unless Array, Object.
// ⭐ "use strict"; → Strict mood. If I have some bugs, system will tell me.
// ⭐ Use ID to find = document.getElementById()
// ⭐ Use class to find = document.getElementsByClassName()
// ⭐ Use ID, class, label to find. More efficient = getquerySelector()
// ⭐ document.getElementById("call")           // No point
// ⭐ document.getElementsByClassName("btn")    // No point
// ⭐ getElementsByClassName(), document.getElementsByTagName() and querySelectorAll()  // Using them, should add [number]
// ⭐ document.querySelector("#call")    // ID should add point
// ⭐ document.querySelector(".btn")     // Class should add point
// ⭐ document.querySelector("button")   // Leabel no need to add point
// ⭐ function()I don't need to know info.
// ⭐ function(e)I need to know info.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* "use strict"; → Strict mood. If I have some bugs, system will tell me. */
// 📝"use strict";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 1. Define colors
/* CORPORATE_COLOR, DEFAULT_COLOR and theData → Name of box. */
// 📝const CORPORATE_COLOR = "#EB4F3F"
// 📝const DEFAULT_COLOR = "blue"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 2. Define variable
/* theWord → Name of box. */
// 📝let theWord = "hello"

/* i.e. */
// 📝let theWord = "hello"
// theWord = "goodbye" I CAN do it.

/* Doesn't work */
// theWord[2] = "x"
/* i.e. */
// let theWord = "hello"
//                01234   ← order
//theWord[2] = "x"  // I wanna change "l" to "x", but I CANNOT.
// ⚠️ This is because string CANNOT be changed.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 3. Define info stucture
// 📝const theData = []
/* i.e. */
// const buylist = ["Apple", "Banana", "Cat"]
// theData.push("Apple") I can pull stuff into the box.
// theData.push("Banana")
// ⭐ theData = [] I CANNOT change the box.

/* Object literal syntax. Revise are more easy. */
// 📝const config = { 
// 📝paragraphId: "my-paragraph",
// 📝color: DEFAULT_COLOR,
// 📝"7 day": true
// Because it starts with a space and a number, it must be enclosed in quotation marks.
// "7 day": true // Contains a "space"
// "my-color": "blue" // Contains a "minus sign"
// "123": "value" // Starts with a "number"

/*  Two way are same */
// config.color = CORPORATE_COLOR; 
// config["color"] = CORPORATE_COLOR;
// setTextColor(config.color);

/*  ALert */
// 📝alert(config["7 day"])
// There are 2 way I can alert them
// 1. config.name → Normal condition
// 2. config[] → Special condition
// 📝delete config["7 day"];

/* Display in the F12 console */
// 📝console.log(config)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 4. Define function
// Get text color
// 📝function getTextColor() {
// 📝let a = 1;
// 📝let b = 2;
// 📝console.log(a + b);
// 📝return document.getElementById(config.paragraphId).style.color
// }
// Set text color
// 📝function setTextColor(color) {
// 📝document.getElementById(config.paragraphId).style.color = color
// }

// Test Funciton
/* Track and Debug */
// 📝function test() {
//     📝alert(getTextColor());
//     📝theData.push("greetUser called")// i.e. Record：How many times has this button been pressed?
//     📝console.log(theData[0], theData["length"]); // Display：What is first record, How many info does it has?
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* initialization */
// 📝setTextColor(config.color)  // Use blue    
/* Display in the F12 console */
// 📝console.log(theWord) // Display "hello"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* Display in the F12 console */
// 📝const secondArray = Array.from({
// 📝    length: 10
// 📝})
// 📝console.log(secondArray);
// 📝alert(window)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* Example-1 */
// const name = document.querySelector(".name");
// const → Box, name → Name of box, document.querySelector = Find class which is called .name
// function changeColor() { name.style.color = "blue";}
// create a function, changeColor-function name(I can call any what I want), box.style.color = box-name, style-element, color-property and "blue"-transform

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/* Example-2 */
// const name = document.querySelector(".name");
// function changeColor(color) {name.style.color = color;}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

"use strict";

const CORPORATE_COLOR = "#EB4F3F"

const wrap = document.getElementById("secondarytitle");
function change() {
    wrap.style.margin = "2rem";
    wrap.style.fontWeight = "bold";
    wrap.style.color = CORPORATE_COLOR;
}

const box = document.querySelector(".knock");
function kokoko() {
    alert("knock is OK!")
}
box.addEventListener("click", kokoko);


// Example
// const name = document.querySelector(".name")
// const btn = document.querySelector("button")

// Example way-A
// btn.addEventListener("click", function(){
//     name.style.color = "green"
// })

// Example way-B
// btn.addEventListener("click", changeColor);
// function changeColor(){
//     name.style.color = "Red";
// }

//* Class-3 *//
