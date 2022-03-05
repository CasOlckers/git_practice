var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
   greeting = 'Good evening'; // when it is evening
} else if (hourNow > 12) {
   greeting = 'Good afternoon'; // when it is afternoon
} else if (hourNow > 0) {
   greeting = 'Good morning'; // when it is morning
} else {
   greeting = 'Welcome'; // no idea of what time of the day it is
}

document.write('<h3>' + greeting + '</h3>')

