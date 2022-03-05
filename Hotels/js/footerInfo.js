
var msg = 'page title: ' + document.title + ' ';
msg += '; page address: ' + document.URL + ' ';
msg += '; last modified:  ' + document.lastModified + ' ';

var elFooterInfo = document.getElementById('footer');
elFooterInfo.textContent = msg;
