// 1.

var numbercase = parseInt(prompt("plz type the upper case or lower case number"))

if (numbercase >= 65 && numbercase <= 90) {
    document.write("<h1>Input " + numbercase + " is an upper case letter")
}
else if (numbercase >= 97 && numbercase <= 122) {
    document.write("<h1>Input " + numbercase + " is an lower case letter")
}
else {
    document.write("<h1>Input " + numbercase + " is not a number or string")
}
document.write("<hr>")

// 2.

var num1 = parseInt(prompt("plz enter the number 1 "))
var num2 = parseInt(prompt("Plz enter the number 2 "))
var result = (num1, num2)

if (num1 > num2) {
    document.write(num1 + " is larger then " + num2)
}
else if (num2 > num1) {
    document.write(num2 + " is larger then " + num1)
}
else {
    document.write("The number are equal")
}
document.write("<hr>")

// 3.

var number = parseInt(prompt("Plz write the number [positive or negetive]"))
if (number > 0) {
    document.write(number + " is positive number ")
}
else if (number < 0) {
    document.write(number + " is negetive number ")
}
else {
    document.write("The number is Zero")
}
document.write("<hr>")

// 4.

var letter = ("a", "e", "i", "o", "u")

if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    document.write("True")
}
else {
    document.write("False")
}
document.write("<hr>")

// 5.
var userpassword = prompt("Plz enter the password")
var correctpassword = ("123")
if (userpassword == correctpassword) {
    document.write("Correct! The password you entered matches the original password")
}
else {
    document.write("Incorrect password")
}
document.write("<hr>");

// 6.


var hour = 19;
if (hour < 18) {
    document.write("Good day");
}
else {
    document.write("bad evening");
}
document.write("<hr>")

// 7.

var time = parseInt(prompt("Plz enter time to 24 hour clock format (1900)"))

if (time >= 0000 && time < 1200){
    document.write("Good morning")
}
else if(time >= 1200 && time < 1700){
    document.write("Good afternoon")
}
else if(time >= 1700 && time < 2100){
    document.write("Good evening")
}
else if(time >= 2100 && time < 2359){
    document.write("Good night")
}
else{
    document.write("Time is incorrect")
}
document.write("<hr>")

// END::












