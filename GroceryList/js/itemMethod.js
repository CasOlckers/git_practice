
/*
var elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
    var firstItem = elements.item(0);
}
*/
//alternative method is the array syntax and select element by class name
/*
var elements = document.getElementsByClassName('hot');
if (elements.length >= 0) {
    var firstItem = elements[0];
    firstItem.className = 'cool';
}
*/

//alternative method is the array syntax and select element by tag name
/*
var elements = document.getElementsByTagName('li');
if (elements.length >= 0) {
    var firstItem = elements[0];
    firstItem.className = 'cool';
}
*/

//alternative method is the CSS query selector 

//to return first match
var el = document.querySelector('li.hot');
el.className = 'cool';

//to return a NodeList
/*var els = document.querySelectorAll('li.hot');
if (els >= 0) {
    els[1].className = 'cool';   
}

*/



