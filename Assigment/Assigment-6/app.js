// 1.
var a = (10)
a++
--a

document.write("<h1>result<br>")
document.write("The value of a is " + a)
document.write("<br>-------------------------------<br>")

document.write("The value of ++a is " + (++a) + "<br>")
document.write("Now the value of a is: 11" + "<br>")
document.write("<br>")

document.write("The value of a++ is: " + (a++) + "<br>")
document.write("Now the value of a is 12" + "<br>")
document.write("<br>")

document.write("The value of --a is : " + (--a) + "<br>")
document.write("now the value of a is 11 " + "<br>")
document.write("<br>")

document.write("The value of ++a is" + (a--) + "<br>")
document.write("Now the value of a is 10<br>")

document.write("<hr>")

// 2.

var a = 2
var b = 1
var result = (--a);
document.write("a = " + (a) + "<br>")
document.write("b = " + (b) + "<br>")
document.write("result is = " + (result) + "<br>")
document.write("<br>")

var a = 2, b = 1
var result = (--a - --b);
document.write("a = " + (a) + "<br>")
document.write("b = " + (b) + "<br>")
document.write("result is = " + (result) + "<br>")
document.write("<br>")


var a = 2, b = 1
var result = (--a - --b + ++b);
document.write("a = " + (a) + "<br>")
document.write("b = " + (b) + "<br>")
document.write("result is = " + result + "<br>")
document.write("<br>")


var a = 2, b = 1
var result = (--a - --b + ++b + b--);
document.write("a = " + (a) + "<br>")
document.write("b = " + (b) + "<br>")
document.write("result is = " + result + "<br>")
document.write("<hr>")

// 3.

const name = prompt("Enter your name: ");
document.write("Hello, " + name + ": Nice to meet you.");
document.write("<hr>")

// 4.

var number = prompt("Enter a number: ");
number = 5
var table = "<h2>Multiplication Table by default <br>";
for (var i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write(table)
document.write("<hr>")

// 5

var subject1 = prompt("plz write your subject 1")
var subject2 = prompt("plz write your subject 2")
var subject3 = prompt("plz write your subject 3")

var totalmarks = (100)

var obtainedmarks1 = prompt("plz write your " + subject1 + " subject obtained marks")
var obtainedmarks2 = prompt("plz write your " + subject2 + " subject obtained marks")
var obtainedmarks3 = prompt("plz write your " + subject3 + " subject obtained marks")

var percentage1 = (obtainedmarks1 / totalmarks) * 100
var percentage2 = (obtainedmarks2 / totalmarks) * 100
var percentage3 = (obtainedmarks3 / totalmarks) * 100

var totalobtainedmarks = obtainedmarks1 + obtainedmarks2 + obtainedmarks3
var totalpercentage = (totalobtainedmarks / (totalmarks * 3)) * 100

var resultTable = "<table>"
resultTable += ("<tr><td>Subject: </td><td>Total marks: </td><td>Obtained marks: </td><td> Percentage: </td></tr><br>")
resultTable += ("   <tr><td> " + subject1 + "   </td><td> " + (totalmarks) + "   </td><td> " + (obtainedmarks1) + "   </td><td>" + percentage1.toFixed() + "%</td></tr> ")
resultTable += ("   <tr><td> " + subject2 + "   </td><td> " + (totalmarks) + "   </td><td> " + (obtainedmarks2) + "   </td><td>" + percentage2.toFixed() + "%</td></tr> ")
resultTable += ("   <tr><td> " + subject3 + "   </td><td> " + (totalmarks) + "   </td><td> " + (obtainedmarks3) + "   </td><td>" + percentage3.toFixed() + "%</td></tr> ")
resultTable += ("<tr><td>Total</td><td>" + (totalmarks * 3) + "</td><td>" + totalobtainedmarks + "</td><td>" + totalpercentage.toFixed() + "%</td></tr>")

document.write(resultTable)

// end

