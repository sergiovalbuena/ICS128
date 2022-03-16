var time = new Date();

console.log(time); //2022-02-07T20:36:20.844Z
console.log(time.toString()); //Mon Feb 07 2022 12:36:20 GMT-0800 (Pacific Standard Time)
console.log(time.toDateString());//Mon Feb 07 2022
console.log(time.toLocaleDateString());//2022-02-07
console.log(time.toLocaleTimeString());//12:36:20 p.m.
console.log(time.toLocaleString());//2022-02-07, 12:36:20 p.m.
console.log(time.toGMTString());//Mon, 07 Feb 2022 20:36:20 GMT
console.log(time.toUTCString());//Mon, 07 Feb 2022 20:36:20 GMT//
console.log(time.toISOString());//2022-02-07T20:36:20.844Z
console.log(time.toTimeString());//12:36:20 GMT-0800 (Pacific Standard Time)
console.log(time.getTime());//1644266180844

console.log(Intl.DateTimeFormat().format(time));//2022-02-07
console.log(Intl.DateTimeFormat('de-DE').format(time));//7.2.2022

var optionsTime = {
    year: 'numeric', //
    month: 'short', //
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
}
console.log(Intl.DateTimeFormat('en-US', optionsTime).format(time));//February 2022 Monday, 12:44 PM

console.log('JS FUNCTIONS'); 
console.log(time.getFullYear()); // 2022
console.log(time.getMonth());//1 (zero-based index)
console.log(time.getDate());//7
console.log('get day' + time.getDay());//1 (zero-based index starrting from sunday)
console.log(time.getHours());//12
console.log(time.getMinutes());//50
console.log(time.getUTCHours());//20
console.log(time.getUTCDate());//7


//JS METHODS to UPDATE DATES
var setDate = new Date('2021-01-08T22:45:23');
console.log(setDate);
setDate.setFullYear(2022)
console.log(setDate);
setDate.setMonth(2);
console.log(setDate);
setDate.setDate(18);
console.log(setDate);
setDate.setHours(11);
console.log(setDate);
setDate.setMinutes(11);
console.log(setDate);
setDate.setUTCDate(10);
console.log(setDate);
setDate.setUTCMinutes(56);
console.log(setDate);

console.log(time.getDate());


function isWeekday(year, month, day){
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6; 
}



console.log(isWeekday(2022,1,7));
console.log(isWeekday(2022,1,6));
console.log(isWeekday(2022,1,5));
console.log(isWeekday(2022,1,4));
console.log(isWeekday(2022,1,3));
console.log(isWeekday(2022,1,2));
console.log(isWeekday(2022,1,1));
console.log(isWeekday(2022,0,31));
console.log(isWeekday(2022,0,30));


function esta(year, month, day){
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6; 
    //false or true 
}

let dateObj = new Date();



let myDate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());
console.log(myDate);
dateObj.setMonth(0);
let myDate2 = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());
console.log(myDate2);


const d = new Date();

console.log(d.getMonth() + 1);	// Month	[mm]	(1 - 12)
console.log(d.getDate());		// Day		[dd]	(1 - 31)
console.log(d.getFullYear());  //[yyyy]



var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;
console.log(newdate);


var today = new Date();
console.log(today.getDay());





























var workHours = 7.5;
var weekDay;
var month;
var year;
var workingDays;
var hourlyWage = 10;


var anio = 2021;
var mes =1;

function daysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
var enero = daysInMonth(2021,1)
var febrero = daysInMonth(2021,2)
//console.log(enero);
//console.log(daysInMonth(2021,2));
function isWeekday(year, month, day){
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6; 
}

var firstDayEnero = 1;
var firstDayFebrero = 1;

var daysEnero = Array(enero-firstDayEnero +1)
    .fill()
    .map(() => firstDayEnero++);
var daysFebrero = Array(febrero-firstDayFebrero +1)
      .fill()
       .map(() => firstDayFebrero++);
console.log(daysEnero);
console.log(daysFebrero);



console.log(daysInMonth(2021,1));
console.log(daysInMonth(2021,2));
console.log(daysInMonth(2021,3));
console.log(daysInMonth(2021,4));
console.log(daysInMonth(2021,5));
console.log(daysInMonth(2021,6));
console.log(daysInMonth(2021,7));
console.log(daysInMonth(2021,8));
console.log(daysInMonth(2021,9));
console.log(daysInMonth(2021,10));
console.log(daysInMonth(2021,11));
console.log(daysInMonth(2021,12));
