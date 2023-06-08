// 1.

var user = prompt("Enter your city name")
if (user.toLowerCase() == "karachi") {
    document.write("<h1>Wellcomes to the city of lights");
}
else {
    document.write("plz retype")
}
document.write("<hr>")

// 2.

var gender = prompt("plz select your gender: (Male or Female)")
if (gender.toLowerCase() == "male") {
    document.write("Good morning sir.");
}
else if (gender.toLowerCase() == "female") {
    document.write("Good morning maam.");
}
else {
    document.write("Invalid gender:  plz tryagain")
}
document.write("<hr>")

// 3.

var color = prompt("plz select the color: [Red, Yellow, Green]")
if (color == "red") {
    document.write("Red:     Must Stop")
}
else if (color == "yellow") {
    document.write("yellow:     Ready to move")
}
else if (color == "green") {
    document.write("green:     move now")
}
else {
    document.write("Plz chose the seleted colors.")
}
document.write("<hr>")
// 4.

var fuel = parseFloat(prompt("plz type the remaining fuel in your car [In liters]"))

if (fuel < 0.25) {
    document.write("Please refill the fuel in your car")
}
else {
    document.write("Tanki is full")
}
document.write("<hr>")

// 5.

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f

if ("car" < "cat") {
    alert("car is smaller than cat");
}
document.write("<hr>")

// 6.

var subject1 = parseFloat(prompt("Enter your obtained marks in subject 1: "));
var subject2 = parseFloat(prompt("Enter your obtained marks in subject 2: "));
var subject3 = parseFloat(prompt("Enter your obtained marks in subject 3: "));

var totalmarks = parseFloat(prompt("plz enter the total marks of subject 1,2,3 "))

var totalobtainedmarks = subject1 + subject2 + subject3

var percentage = (totalobtainedmarks / totalmarks) * 100

var grade, remarks

if (percentage >= 80) {
    grade = "A-one"
    remarks = "Excellent"
}
else if (percentage >= 70) {
    grade = "A"
    remarks = "Good"
}
else if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"
}
else {
    grade = "Fail"
    remarks = "sorry"
}

document.write("[Mark sheet] " + "<br>")
document.write("Total marks " + totalmarks + "<br>")
document.write("Marks obtained " + totalobtainedmarks + "<br>")
document.write("Percentage " + percentage.toFixed() + "%" + "<br>")
document.write("Grade " + grade + "<br>")
document.write(remarks + "<br>")
document.write("<hr>")

// 7.

var secretnum = parseInt(prompt("Plz chose the secret number from 1 to 10"))

if (secretnum == 8) {
    document.write("Your answer is correct")
}
else if (secretnum == +1) {
    document.write("Close enough to the correct answer")
}
else {
    document.write("You lose")
}
document.write("<hr>")
// 8.

var givennum = parseInt(prompt("plz write your number to divided by 3 "))
if (givennum % 3 == 0) {
    document.write("If the number is divided by 3: ")
}
else {
    document.write("If number is not divides by 3: ")
}
document.write("<hr>")

// 9.

var number = parseInt(prompt("Enter the number [Even or odd]"))
if (number % 2 === 0) {
    document.write(number + " is Even number ")
}
else {
    document.write(number + " is odd number ")
}
document.write("<hr>")

// 10.

var temperature = parseInt(prompt("Plz enter the latest temperature "))
if (temperature >= 40) {
    document.write("“It is too hot outside")
}
else if (temperature >= 30) {
    document.write("The Weather today is Normal.")
}
else if (temperature >= 20) {
    document.write("“Todays Weather is cool.")
}
else if (temperature >= 10) {
    document.write("OMG! Todays weather is so Cool.")
}
else {
    document.write("Temperature is normal")
}
document.write("<hr>")

// 11.

var firstnumber = parseInt(prompt("plz enter your first number of calculator"))
var secondnumber = parseInt(prompt("Pls enter your second number of calculator"))
var opretion = prompt("+ - * / %")
var result
if (opretion === "+") {
    document.write("Your calculated result is: " + (firstnumber + secondnumber))
}
else if (opretion === "-") {
    document.write("Your calculated result is: " + (firstnumber - secondnumber))
}
else if (opretion === "/") {
    document.write("Your calculated result is: " + (firstnumber / secondnumber))
}
else if (opretion === "%") {
    document.write("Your calculated result is: " + (firstnumber % secondnumber))
}
else if (opretion === "*") {
    document.write("Your calculated result is: " + (firstnumber * secondnumber))
}
else {
    document.write("Your operation is invalid: ")
}
document.write("<hr>")

// End





