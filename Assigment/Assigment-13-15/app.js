document.write("<h1>")
// 1.

var studentname = [];

// 2.

var studentname = {};

// 3.

var arr = ["apple", "mango", "banana", "orange"];

// 4.

var number = [1, 2, 3, 4, 5];

// 5.

var boolean = [true, false, true, false];

// 6.

var mix = ["apple", 1, true]

// 7.

var education = ["SSC ", "HSC ", "BCS ", "BS ", "BCOM ", "MS ", "M.PHIL ", "PHD "];
document.write("Education Qualification");
document.write("<ol>");
for (let i = 0; i < education.length; i++) {
    document.write("<li>" + education[i] + "</li>");
}
document.write("</ol>");
document.write("<hr>")

// 8.

var studentname = ["zohaib", "arsalan", "asmat"]
var studentscore = [200, 300, 400]


var percentage0 = (200 / 500) * 100;
var percentage1 = (300 / 500) * 100;
var percentage2 = (400 / 500) * 100;
document.write("Score of " + studentname[0] + " is " + studentscore[0] + " Percentage " + percentage0 + "%<br>")
document.write("Score of " + studentname[1] + " is " + studentscore[1] + " Percentage " + percentage1 + "%<br>")
document.write("Score of " + studentname[2] + " is " + studentscore[2] + " Percentage " + percentage2 + "%<br>")

document.write("<hr>")


// 9.

var color = ["red", "blue", "green"]

document.write("Original array: | " + color.join(", ") + "<br>")

// a.

var addtothebeginning = prompt("Plz enter color to add to the begining")

color.unshift(addtothebeginning)

document.write("Update array to add beginning: | " + color.join(", ") + "<br>")

// b.

var end = prompt("what color wants to add to the end of array")

color.push(end)

document.write("Update array added the end of array: | " + color.join(", ") + "<br>")

// c.

color.unshift("yellow", "orenge")
document.write("Update array add two color on beginning: | " + color.join(", ") + "<br>")

// d.

color.shift();
document.write("Update array delete the first color of array: | " + color.join(", ") + "<br>")

// e.

color.pop();
document.write("Update array delete the last color of an array: | " + color.join(", ") + "<br>")

// f.

var indextoadd = parseInt(prompt("Plz enter index to add color: "));
var colortoadd = prompt("Plz enter color to add: ");

color.splice(indextoadd, 0, colortoadd);

document.write("Update array add color at index: | " + color.join(", ") + "<br>")

var indextodelete = parseInt(prompt("Plz enter index to delete color: "));
var numcolorstodelete = parseInt(prompt("Plz enter number of colors to delete: "));

color.splice(indextodelete, numcolorstodelete);

document.write("Update array Deleted Color at Index: | " + color.join(", ") + "<br>");
document.write("<hr>")

// 10.

var score = [340, 120, 210, 180]

document.write("Score of student " + score.join(",") + "<br>")

score.sort()
document.write("Order score of student " + score.join(", ") + "<br>")
document.write("<hr>")

// 11.

var citylist = [" Karachi ", " Hayderabad ", " Mirpurkhas ", " Lahore ", " Multan "]
document.write("City list<br>")
document.write(citylist + "<br>")
document.write("Selected city<br>")
document.write(citylist[0] + citylist[1])
document.write("<hr>")

// 12.

var arr = ["This", "is", "my", "cat"]
document.write("Array:<br>" + arr + "<br>")

document.write("String:<br>" + arr.join(" ") + "<br>")
document.write("<hr>")

// 13.


var device = ["keyboard", "mouse", "printer", "mic"]
document.write("device <br>" + device + "<br>")

var out1 = device.shift()
var out2 = device.shift()
var out3 = device.shift()
var out4 = device.shift()
document.write("out: <br>" + out1 + "<br>")
document.write("out: <br>" + out2 + "<br>")
document.write("out: <br>" + out3 + "<br>")
document.write("out: <br>" + out4 + "<br>")
document.write("<hr>")

// 14.

var device2 = ["keyboard", "mouse", "printer", "moniter"]
document.write("device2 <br>" + device2 + "<br>")

var at3 = device2.pop()
var at4 = device2.pop()
var at1 = device2.pop()
var at2 = device2.pop()

document.write("out: <br>" + at3 + "<br>")
document.write("out: <br>" + at4 + "<br>")
document.write("out: <br>" + at1 + "<br>")
document.write("out: <br>" + at2 + "<br>")
document.write("<hr>")

// 15.

var phonecompany = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<select>");
document.write("<option value='" + phonecompany[0] + "'>" + phonecompany[0] + "</option>");
document.write("<option value='" + phonecompany[1] + "'>" + phonecompany[1] + "</option>");
document.write("<option value='" + phonecompany[2] + "'>" + phonecompany[2] + "</option>");
document.write("<option value='" + phonecompany[3] + "'>" + phonecompany[3] + "</option>");
document.write("<option value='" + phonecompany[4] + "'>" + phonecompany[4] + "</option>");
document.write("<option value='" + phonecompany[5] + "'>" + phonecompany[5] + "</option>");
document.write("</select>");

// END.


















