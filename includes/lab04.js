//var fName = prompt("Enter your name", "What's your Name?...");
//document.getElementById("fName").innerHTML = "Hello " + fName + " Nice to meet you.";

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', firstPoint);

function firstPoint(){
  var theString = prompt("Enter a string", "Type here");
  var character = prompt("Enter the Character want to count and delet", "a, b, c, d, e, ...");

  //split method to count character 
  let count = theString.split(character).length-1;
  //passing the string to an array to delete letters
  var newArray = Array.from(theString);

  //loop to delete character 
  for(var i = 0; i< newArray.length; i++){
      if(newArray[i] === character){
          newArray.splice(i,1);
      }
  }
  console.log(theString);
  console.log(count);
  console.log(character);
  var newA = newArray.join('')
  console.log(newA);

  var exe1 = document.getElementById('exe1');

  exe1.innerHTML = `
    <b>The string is: </b> ${theString}. <br>
    <br>
    <b>The key is:</b> ${character}. <br>
    <br>
    The character '${character}' appears ${count} times in the array<br>
    <br>
    <b>The new string is: </b> ${newA}.
  `
}




//FIRST PART.
///////second point 

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', secondPoint);

function secondPoint(){
  var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  //create a function to random arrays content
  function randomer(toRandom){
    return toRandom[Math.floor(Math.random()*toRandom.length)];
  }
  //passing suits and number to get the random. 
  var randomSuite = randomer(suits);
  var randomNumber = randomer(numbers);
  var randomSuite1 = randomer(suits);
  var randomNumber1 = randomer(numbers);
  //show the resutl
  console.log(`Card is: ${randomNumber} of ${randomSuite}`); 
  console.log(`Card is: ${randomNumber1} of ${randomSuite1}`); 

  var exe2 = document.getElementById('exe2');
  exe2.innerHTML = 
  `
  <b>The card is: </b> ${randomNumber} of ${randomSuite}. <br>
  <br>
  <b>The card is: </b> ${randomNumber1} of ${randomSuite1}. <br>
  `

}



//SECOND PART
/////first point
var btn3 = document.getElementById('myBtn');
btn3.addEventListener('click', myCreateFunction);



function myCreateFunction() {
  var sampleTable = document.getElementById('sampleTable');
  var row = sampleTable.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New Cell 1";
  cell2.innerHTML = "New Cell 2";
}

var btnD = document.getElementById('myBtnD');
btnD.addEventListener('click', myDeleteFunction);

function myDeleteFunction() {
  document.getElementById("sampleTable").deleteRow(1);
}