var msg;  //message
var level = 2;  //Level

//Determine message based on level
switch (level) {
    case 1:
        msg = 'Good luck on first test';
        break;

    case 2:
        msg = 'Second of three, keep going!';
        break;

    case 3: 
        msg = 'Final round and almost there';
        break;

    default:
        msg = 'Good luck!';
        break;

}

var messageEl = document.getElementById('message');
messageEl.textContent = msg;
