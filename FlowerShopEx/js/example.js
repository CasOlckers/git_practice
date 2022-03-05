// Create variables for the welcome message
var greeting = 'Howdy ';
var firstName = 'Cas';
var message = ', please check your order:';

//Concatenate the 3 aboveentioned variables to crreeate a welcome message
var welcome = greeting + firstName + message;

//Create variabkles to hold details abaout the sign
var sign = 'Plateau Road Cottage';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grantTotal = subTotal + shipping;

//Get the element that has the ID of greeting
var el = document.getElementById('greeting');
//Replace the content of the element with the personalised welcome message
el.textContent = welcome;

//Get the element that has an id of userSign then update its content
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Get the element that has an ID of tiles then update its content
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get an elemnt wwith an ID of subTotal and replace its content
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get an element with and ID of shipping and replace its content
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//Get element that has an ID of grantTotal and rteplace its content
var elGrantTotal = document.getElementById('grantTotal');
elGrantTotal.textContent = '$' + grantTotal;





