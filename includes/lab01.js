alert("Hello World! 👋🏼 🌏");


var fName = prompt("Enter your name", "What's your Name?...");
document.getElementById("fName").innerHTML = "Hello " + fName + " Nice to meet you.";

var amount = parseInt(prompt("Enter the amount", "Amount goes here"));
document.getElementById("amount").innerHTML = "$ "+ amount;

var taxRate = parseInt(prompt("Enter the tax rate", "tax rate goes here"));
document.getElementById("taxRate").innerHTML = taxRate+"%";

var result = parseFloat(amount + (taxRate*amount/100));
var total = result.toFixed(2)
document.getElementById("result").innerHTML = "$ "+total;
