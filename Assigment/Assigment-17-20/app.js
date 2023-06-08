// 1.
// var multidimention = []
// document.write(multidimention[0].push(0))
// document.write(multidimention[0].push(0))
// document.write(multidimention[0].push(0))
document.write("<h1><hr>")

// 2.

var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

document.write(matrix[0].join("") + "<br>" + matrix[1].join("") + "<br>" + matrix[2].join(""))
document.write("<hr>")

// 3.

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}
document.write("<hr>")

// 4.

var tablenum = parseInt(prompt("Plz enter the number to show multification table"))
var tablelength = parseInt(prompt("Plz enter the table length"))

document.write("Multification table of  " + tablenum + "<br>")
for (var i = 1; i <= tablelength; i++) {
    var result = tablenum * i
    document.write(tablenum + " x " + i + " = " + result + "<br>")
}
document.write("<hr>")

// 5.

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("Element at index is 0 " + fruits[0] + "<br>")
document.write("Element at index is 1 " + fruits[1] + "<br>")
document.write("Element at index is 2 " + fruits[2] + "<br>")
document.write("Element at index is 3 " + fruits[3] + "<br>")
document.write("Element at index is 4 " + fruits[4] + "<br>")
document.write("<hr>")

// 6.

var counting = ""
for (var i = 0; i <= 15; i++) {
    counting += i + ", "
}
document.write("Counting:<br>" + counting + "<br>")

var revercecounting = ""
for (var j = 10; j >= 1; j--) {
    revercecounting += j + ", "
}
document.write("Reverce counting:<br>" + revercecounting + "<br>")

var even = ""
for (var k = 0; k <= 20; k += 2) {
    even += k + ", "
}
document.write("Even:<br>" + even + "<br>")

var odd = ""
for (var o = 1; o <= 19; o += 2) {
    odd += o + ", "
}
document.write("Odd:<br>" + odd + "<br>")

var series = ""
for (s = 1; s <= 10; s++) {
    series += 2 * s + "k, "
}
document.write("Series:<br>" + series + "<br>")
document.write("<hr>")

// 7.

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var user = prompt("wellcome to suad bakery what do you want to sir!\n[“cake”, “apple pie”, “cookie”, “chips”, “patties”]")
var user = user.toLowerCase()
if (user === bakery[0] || user === bakery[1] || user === bakery[2] || user === bakery[3] || user === bakery[4]) {
    document.write(user + " is available")
}
else {
    document.write("We are sorry" + user + " is not available")
}
document.write("<hr>")

// 8.

var number = [24, 53, 78, 91, 12]
var largestnumber = Math.max(...number);
document.write("Array items: " + number + "<br>")
document.write("The largest number is " + largestnumber + "<br>")
document.write("<hr>")

// 9.

var number = [24, 53, 78, 91, 12]
var largestnumber = Math.min(...number);
document.write("Array items: " + number + "<br>")
document.write("The smallest number is " + largestnumber + "<br>")
document.write("<hr>")

// 10.

var five = ("")
for (i = 5; i <= 100; i += 5) {
    five += i + ", "
}
document.write(five)

// END.
























