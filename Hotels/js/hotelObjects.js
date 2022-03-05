//Create object then add properties and methods
//Literal Notation
/*
var hotel = {}
hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function(){
 return this.rooms - this.booked;
 };
*/

// Object constructor notation
/*
var hotel = new Object();

hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

*/

//Create an object with properties and methods
//Literal notation

/*
var hotel = {
    name: 'Quay',
    rooms = 40;
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};
*/

//Object constructor notation

/*
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };

}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
*/

//Objects in an array

/*
var hotels = [{name: 'Quay', rooms: 40, booked: 25}, {name: 'Park', rooms: 120, booked: 77},]

hotals[0].name;
*/

//Create a message in the foorter about the page

/*
var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '<BR />;
msg += '<b>last modified: </b>' + document.lastModified + '</p>;

var elFooterInfo = document.getElementById('footer');
elFooterInfo.innerHTML = msg;

*/
