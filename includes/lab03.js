//lab03
//Excersise 1.1
//Declare function with the 2 parameters string and char
function letterCount(string, char){
    //decalre the counter
    var timesLetter = 0; 
    //create a for to count thorough the array 
    for (let index = 0; index < string.length; index++) 
    {
        //sum one to the counter (timesLetter) when index == char parameter
        if(string.charAt(index) == char)
        {
            timesLetter += 1;
        }
    }
    //return the counter
    return timesLetter;
}
//create some vars to print it: 
var theString = 'This is the string';
var theLetter = 'i';
var result = letterCount(theString, theLetter);
//print it
console.log(`The string is: ${theString}`);
console.log(`The letter '${theLetter}' appears ${result} times`);


var exercise1one;
document.getElementById('exercise1one').style.fontWeight = 'bold'
var exercise1one = document.getElementById('exercise1one').innerHTML = 'The string is:'
var exercise1two = document.getElementById('exercise1two').innerHTML = 
    ` ${theString} </br>
    </br>
    The letter '${theLetter}' appears ${result} times
    `




/*DATA UNDERSTANDING:
//-- -- -- -- -- -- -- -- -- -- -- -- 
//Excersices 1.2
//var labDay = new Date(2022,2,1);
var labDay = new Date();
var newLabDay = Date.now();
var errorDate = new Date(2016,33,1);
var invalidDate = new Date('Funuary 3, 2018');//Invalid Date
var options = {weekday: 'long', year:'numeric', month: 'long', day:'numeric'}

console.log(`labDay is ${labDay}`);
console.log(labDay.toDateString()); //minutes and hours are not show
console.log(labDay.toTimeString());//HH:MM:SS GMT-0800 (Pacific Standard Time)
console.log(`labDay as UTC is ${labDay.getTime()}`);//milliseconds since jan 1 , 1970
console.log(labDay.getHours() + ' : ' + labDay.getMonth() + ' / ' + labDay.getFullYear());//HH :  MM / YYYY
//console.log(labDay.getHours() + ' : ' + labDay.getMonth() + ' / ' + labDay.getYear());//HH :  MM / 122*
console.log(labDay.getHours() + " : " + labDay.getMinutes()); //HH : MM
//SAME RESULT: 
console.log(labDay.getTime());
console.log(newLabDay);
//--
console.log(errorDate); //2018-10-01T07:00:00.000Z
console.log(invalidDate); //Invalid Date
console.log('es el que buscas' + labDay.toLocaleString('de-DE', options));//Sonntag, 6. Februar 2022

//--ADDING TIME TO A DATE
var msDay = 86400000; //one day
var mslabDay = Date.now();
labDay = new Date(mslabDay + msDay); //tomorrow
var result = new Date(mslabDay + msDay); //tomorrow
console.log(labDay);
console.log(labDay.toString(options)); //tomorrow
console.log(result.toLocaleString('it-IT',options)); //domani

//others: 
console.log(labDay.toUTCString());
console.log(labDay.toDateString());
//--
*/


//--PULLING IT TOGETHER
//vars: 
function exe2(){
var workHours = 7.5;
var year = parseInt(prompt('please enter year', 'YYYY'));
var month = parseInt(prompt('please enter year', 'MM'));
var printMonth = new Date(year, month, 0).toLocaleString('en-US', {month:'long'});
var printYear = new Date(year, month, 0).toLocaleString('en-US', {year:'numeric'});
var workingDays = weekdayInMonthly(year, month, 0);
var hourlyWage = parseInt(prompt('What is the hourly wage', 'enter hourly wage'));
var pay = workingDays*workHours*hourlyWage;

//how many days have each month
function daysInMonth(year, month){
    return new Date(year, month, 0).getDate(); //base 1. 1 = january
}
//var january = daysInMonth(2022,1)
//console.log(january); //OUTPUT: 31

//is that day weekday or not?
function isWeekday(year, month, day){
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6; 
}
//check quantity of weekdays in the month 
function weekdayInMonthly(year, month){
    var monthDays = daysInMonth(year,month);
    var weekday = 1;
    for(let i = 1; i <= monthDays ; i++ ){
        if(isWeekday(year, month, i)){
            weekday++
        }
    }
    return weekday;
}

//proving on console
// console.log('Month: '+ printMonth);
// console.log('Year: '+ printYear);
// console.log('Weekdays: '+workingDays);
// console.log('salary: '+ hourlyWage );
// console.log('pay:' + pay);

//sending print to HTML
var exercise2 = document.getElementById('exercise2').innerHTML = 
    `Month: ${printMonth} </br>
     Year: ${printYear}</br>
     Weekdays: ${workingDays}</br>
     Salary: ${hourlyWage}</br>
     Pay: ${pay}</br>
    
    `
}



//--
//PART2:
//vars
function exe3(){

var investment = 10;
var annualRate = 4;
var years = 5; 
//function try catch error 
function calcFutureValue(principle, rate, years){
    try {
        //given ifs 
        if (principle <= 0) throw new Error("Principle value must be greater than 0");
        if (rate <= 0) throw new Error("Rate value must be greater than 0");
        if (years <= 0) throw new Error("Years value must be greater than 0");
        //given vars
        var monthlyRate = (rate/12)/100;
        var months = years*12;
        var futureValue = 0;
        //given loop
        for (var i = 0; i < months; i++){
            futureValue = (futureValue + principle)*(1+monthlyRate);
        }
        return parseFloat(futureValue).toFixed(2);
    }//error call 
    catch(err){
        return `${err}.`;
    }
}

//calling 3 future calcs 
var finalResult1 = calcFutureValue(investment, annualRate, years);
var finalResult2 = calcFutureValue(99, 7.6, 4.5);
var finalResult3 = calcFutureValue(0, annualRate, years);

//proving on Console
 console.log(finalResult1);
 console.log(finalResult2);
 console.log(finalResult3);

var exercise3 = document.getElementById('exercise3').innerHTML = 
    `The future value is: $${finalResult1} </br> </br>
    The future value is: $${finalResult2} </br></br>
    ${finalResult3} </br>
    `
}