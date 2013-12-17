'use strict'

var input = document.getElementsByClassName("form")[0];

function clearInput (e) {
var inputClick = e.target;
if (inputClick.value !== "") {
inputClick.value = '';
} 
}

input.addEventListener("click", clearInput, false);