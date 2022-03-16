//1. Middle Number:

function middleNumberFunction(){
    //prompting numbers
    var firstNumber = parseInt(prompt("Please enter first number", "type first number"));
    var secondNumber = parseInt(prompt("Please enter second number", "type second number"));
    var thirdNumber = parseInt(prompt("Please enter third number", "type third number"));
    //create and array with prompted numbers
    var resultNumbers = [firstNumber, secondNumber, thirdNumber];
    //sort array to get the middle number
    resultNumbers.sort(function(a,b){return a-b});
    //getting the middle nunmber in the array of 3
    var theNumber = resultNumbers[1];
    document.getElementById("nresult").innerHTML = theNumber;
    
    //sent to htmlID the array 
    var print = document.getElementById("result").innerHTML = `The middle number of (${resultNumbers}) is `;

    //if statment to change color if is even number
    if(theNumber % 2 == 0){
        print;
        document.getElementById("nresult").style.color = 'red';
        document.getElementById("nresult").style.fontWeight = 'bold';
    }else{
        print;
        document.getElementById("nresult").style.fontWeight = 'bold';
    }
}




//2. Grade Calculator
function gradeCalculatorFunction(){
        //create programs' vars
        var grade;
        //Prompt
        var percentage = parseInt(prompt("please enter a number between 1 - 100", "enter number here"));
        //creating a var of the getElement of result to clear the switch statement
        var printGrade = document.getElementById('result2').innerHTML = `The letter grade for ${percentage}% is: `
         //clean a little the switch statement seting the getElement as variable
         var _grade =  document.getElementById('grade');        

         //switch statment
            switch(true){
                case percentage >= 0 && percentage <= 49:
                    printGrade;
                    grade = "F";
                    _grade.innerHTML = `${grade}`
                    _grade.style.color = 'red';
                    _grade.style.fontWeight = 'bold';
                    break;
                case percentage >= 50 && percentage <= 64:
                    printGrade;
                    grade = "D";
                    _grade.innerHTML = `${grade}`
                    _grade.style.color = 'black';
                    _grade.style.fontWeight = 'bold';
                    break;
                case percentage >= 65 && percentage <= 79:
                    printGrade;
                    grade = "C";
                    _grade.innerHTML = `${grade}`
                    _grade.style.color = 'yellow';
                    _grade.style.fontWeight = 'bold';
                    break;
                case percentage >= 80 && percentage <= 90:
                    printGrade;
                    grade = "B";
                    _grade.innerHTML = `${grade}`
                    _grade.style.color = 'blue';
                    _grade.style.fontWeight = 'bold';
                    break;
                case percentage >= 91 && percentage <= 100:
                    printGrade;
                    grade = "A";
                    _grade.innerHTML = `${grade}`
                    _grade.style.color = 'green';
                    _grade.style.fontWeight = 'bold';
                    break;
                default: 
                    document.getElementById('result2').innerHTML = `Incorrect - not between 0 - 100`;
                    grade = "";
                    _grade.innerHTML = `${grade}`
                    break;
            }    
}


//3.Loop
function start(){
    //creting a limit
        var n = 5;

        var string = "";
        //first half
        for (var i = 1; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            string += "# ";
        }
        string += "\n";
        string += ("<br>")
        //document.write("<br>")
        }
        //second half
        for (var i = 1; i <= n - 1; i++) {
        for (var j = 0; j < n - i; j++) {
            string += "# ";
        }
        string += "\n";
        string += ("<br>")
        //document.write("<br>")
        }
        //print in console
        console.log(string);
        document.getElementById("triangle").innerHTML = string;
}


//4. While
//creating var for the while
function bangkokCalc(){
    var fullsmogArea = 100; 
    var fullBangkokArea = 125000;
    var fullcount = 0;
    //starting a while with a do 
    do {
        fullsmogArea += (fullsmogArea *0.06);
        //console.log(fullsmogArea);
        fullcount++;
        //console.log(fullcount);
    }
    while(fullsmogArea < fullBangkokArea);

    //creating vers for the while
    var halfsmogArea = 100; 
    var halfBangkokArea = 62500;
    var halfcount = 0;
    do{
        halfsmogArea += (halfsmogArea *0.06);
        //console.log(halfsmogArea);
        halfcount++;
        //console.log(halfcount);

    }
    while(halfsmogArea < halfBangkokArea)

    console.log(fullcount);
    document.getElementById('fullBangkok').innerHTML = `Fully evelop Bangkok in MINUTES: ${fullcount}`;
    console.log(halfcount);
    document.getElementById('halfBangkok').innerHTML = `Half evelop Bangkok in MINUTES: ${halfcount}`;
}
