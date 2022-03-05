/*
var today = new Date();
var year = today.getFullYear();
var est = new Date('Dec 12, 2009 13:01:55');
var differenceInTime = today.getTime() - est.getTime();
differenceInTime = (differenceInTime / 31556900000);

var elTimeMsg = document.getElementById('footer');
elTimeMsg.textContent = Math.floor(differenceInTime) + ' years of online programming';
