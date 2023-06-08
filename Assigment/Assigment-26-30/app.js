// 1.

var number = prompt("Plz write the some number")
document.write("<h1>Number: " + number + "<br>")
document.write("Round of value: " + Math.round(number) + "<br>")
document.write("Floor value: " + Math.floor(number) + "<br>")
document.write("Ceil value: " + Math.ceil(number) + "<br>")
document.write("<hr>")

// 2.

var number = parseFloat(prompt("Plz write the some number"))
document.write("<h1>Number: " + number + "<br>")
document.write("Round of value: " + Math.round(number) + "<br>")
document.write("Floor value: " + Math.floor(number) + "<br>")
document.write("Ceil value: " + Math.ceil(number) + "<br>")
document.write("<hr>")

// 3.

var absolute = (-4)
document.write("The absolute value of " + absolute + " is " + Math.abs(absolute) + "<br>")
document.write("<hr>")

// 4.

var randomethod
document.write("Random dice value: " + Math.floor(Math.random(randomethod) * 6) + "<br>")
document.write("Random dice value: " + Math.floor(Math.random(randomethod) * 6) + "<br>")
document.write("<hr>")

// 5.

var toss = Math.random() < 0.5 ? 2 : 1;
if (toss === 2) {
    document.write(toss + "<br>Random coin value: Head")
}
else {
    document.write("1<br>Random coin value: tails")
}
document.write("<hr>")


// 6.

var random100

document.write("Random number between 1 to 100: " + Math.floor(Math.random(random100) * 100))
document.write("<hr>")

// 7.

var weight = parseFloat(prompt("Plz write your weight"))
document.write("The weight of user is " + weight + " kilograms <br>")
document.write("<hr>")
// 8.

var randomnumber = prompt("Plz enter the random number from [ 1 to 10 ]")
var secretnumber = (8)
if (randomnumber == secretnumber) {
    document.write("congratulation you win")
}
else {
    document.write("you lose")
}

// END


