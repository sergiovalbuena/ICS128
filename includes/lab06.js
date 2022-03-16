//CREATE MAIN CLASS
class Hotel{
    //constructor parameter
    constructor({name, city, rooms, booked, gym}){
        this._name = name;
        this._city = city;
        this._rooms = rooms;
        this._booked = booked;
        this._gym = gym; 
        
     }
     //Getters & Setters:
     get name(){
         return this._name;
     }
     set name(newName){
        this._name = newName;
     }
     get city(){
        return this._name;
    }
    set city(newCity){
       this._name = newCity;
    }
    get rooms(){
        return this._room;
    }
    set rooms(newRoom){
        this._rooms = newRoom;
    }
    get booked(){
        return this._booked;
    }
    set booked(newBooked){
        this._booked = newBooked;
    }
    get gym(){
        return this._gym;
    }
    set gym(newGym){
        this._gym = newGym;
    }

     //other parameters
     roomTypes = [];
     location;
     swimmingPool;
     airportShuttle;
     restaurants = [];

    //Additional Methods
     bookRoom(){
         this.booked++;
     }
     cancelRoom(){
         this.booked--;
    }
}

//an object from the class
//an hotel from Hotel
const hotel = new Hotel({
    name : "Marriot",
    city : "Richmond",
    rooms : 15,
    booked : 1,
    gym : true,

})
hotel.roomTypes = ["twin", "double", "suite", "Honeymoon"];
hotel.restaurants = [["Harolds", "American"], ["Kyoto", "Japanese"], ["Relax", "Fusion"]];
hotel.airportShuttle = false; 
hotel.swimmingPool = true;
let roomAvailable = hotel._rooms - hotel._booked;


console.log(hotel);

let hotelClass = `
<h4>Object</h4>
<p>The hotel is a ${hotel._name}, 📍 located in ${hotel._city}</p>
<p>There are ${hotel._rooms} available today</p>
<p>You have booked a room. There are now ${roomAvailable} available today.</p>
<p>You have cancelled your room. There are now ${hotel._rooms} available today.</p>
<p>The available room types are: ${hotel.roomTypes}</p>
<p> <b>Hotel has a shuttle? 🚌</b> ${hotel.airportShuttle} </p>
<p> <b>Hotel has a swimming pool? 🏊🏽‍♂️</b> ${hotel.swimmingPool}</p>
<p> <b>Hotel has ${hotel.restaurants.length} restaurants each with a different theme</b> They are:</p><br>
`
for(let[name, theme] of hotel.restaurants){
    hotelClass += `<div> <b>${name}: </b> ${theme} <br> <br> </div>`
}


document.getElementById("app1").innerHTML = hotelClass;


/////INHERITANCE
class Resort extends Hotel{
    constructor(props, resortType, beachFront, kidsClub){
        super(props)
        this._resortType = resortType;
        this._beachFront = beachFront;
        this._kidsClub = kidsClub;      
    }
    get resortType(){
        return this._resortType;
    }
    set resortType(newresortType){
        this._resortType = newresortType;
    }
    get beachFront(){
        return this._beachFront;
    }
    set beachFront(newBeachFront){
        this._beachFront = newBeachFront;
    }
    get kidsClub(){
        return this._kidsClub;
    }
    set kidsClub(kidsClub){
        this._kidsClub = kidsClub;
    }

}

let resort = new Resort({
    name: "Renaissance Phuket",
    city: "Phucket",
    rooms: 50,
    booked: 10, 
    gym: true,

}, "Family 👨‍👩‍👧‍👦", true, true)


console.log(resort);



let resortClass = `
<h4>Inheritance</h4>
<p> <b>A new Resort has been created: </b> ${resort._name}, located in ${resort._city}. It is a ${resort.resortType} resort</p>
<p> <b>Is it on the beach?</b> ${resort.beachFront} </p>
<p> <b>Is it have a kids club?</b> ${resort.kidsClub} </p>
`

resort._kidsClub = false;

resortClass += `
<p>Oh No!. the kids club is being renovated</p>
<p> <b>Is it have a kids club?</b> ${resort.kidsClub} </p>
`
document.getElementById("app2").innerHTML = resortClass;

