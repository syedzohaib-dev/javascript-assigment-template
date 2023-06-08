// 1

var number1 = (8);
var number2 = (7);
var sum = number1 + number2;
document.write("<h1>The sum of " + number1 + " and " + number2 + " is: " + sum + "</h1>");

// 2

var number1 = (8);
var number2 = (7);
var sum = number1 - number2;
document.write("<h1>The sum of " + number1 + " and " + number2 + " is: " + sum + "</h1>");


var number1 = (8);
var number2 = (7);
var sum = number1 * number2;
document.write("<h1>The sum of " + number1 + " and " + number2 + " is: " + sum + "</h1>");


var number1 = (8);
var number2 = (7);
var sum = number1 / number2;
document.write("<h1>The sum of " + number1 + " and " + number2 + " is: " + sum + "</h1>");


var number1 = (8);
var number2 = (7);
var sum = number1 % number2;
document.write("<h1>The sum of " + number1 + " and " + number2 + " is: " + sum + "</h1>");
document.write("<hr>")
// 3

var num;
document.write("<h1>Value after variable declaration is" + num + "</h1>" + "<br>");
var num = (5);
document.write("<h1>initial value" + num + "<br>");
num++;
document.write("<h1>Value after increment is " + num + "</h1>" + "<br>")
num += 7;
document.write("<h1>value after addition is " + num + "</h1>" + "<br>");
num -= 1;
document.write("<h1>Valueafter decrement is: " + num + "</h1>" + "<br>")
var remainder = num % 3;
document.write("<h1>The reminder is: " + remainder + "</h1>" + "<br>")
document.write("<hr>")

// 4.

var ticket = (600);
ticket *= 5;
document.write("<h1>Total cost to buy 5 ticket to a movie is " + ticket + "</h1>");
document.write("<hr>")

// 5.


var number = (5)
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write("<h2>" + number + " x " + i + " = " + result + "</h2>");
}
document.write("<hr>")

// 6.


var celsiusTemperature = 25;

var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write("<h2>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "</h2>");

var fahrenheitTemperature2 = 77;

var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
document.write("<h2>" + fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C" + "</h2>");
document.write("<hr>")

// 7.

var watchprice = (500)

var watchquantity = (3)

var shirtprice = (800)

var shirtquantity = (5)

var shipcharge = (100)

var subtotal = (watchprice * watchquantity) + (shirtprice * shirtquantity)
var totalcost = (subtotal + shipcharge)

document.write("<h2>Shopping cart</h2>");
document.write("<h3>Price of watch: " + watchprice + "</h3>");
document.write("<h3>Price of shirt: " + shirtprice + "</h3>");
document.write("<h3>Ordered Quantity of watch: " + watchquantity + "</h3>");
document.write("<h3>Ordered Quantity of shirt: " + shirtquantity + "</h3>");
document.write("<h3>Subtotal: " + subtotal + "</h3>");
document.write("<h3>Shipping Charges: " + shipcharge + "</h3>");
document.write("<h2><strong>Total Cost: " + totalcost + "</strong></h2>");
document.write("<hr>")

// 8.

var totalmarks = (980)
var marksobtained = (804)
var percentage = (marksobtained / totalmarks) * 100

document.write("<h2>Total marks of: " + totalmarks + "</h2>" )
document.write("<h2>Marks obtained: " + marksobtained + "</h2>")
document.write("<h2>Percentage: " + percentage  + "%</h2>")
document.write("<hr>")

// 9

var usdtopkr = (150)
var sartopkr =(40)

var usdollar = (10)
var saudiriyal = (25)

var totalpkr = (usdollar * usdtopkr) + (saudiriyal * sartopkr)
document.write("<h1>Currency in PKR</h1>")
document.write("<h2>Total currency in Pakistani rupee: " + totalpkr + "<h2>")
document.write("<hr>")

// 10

var num = 7
var result =((num + 5) * 10) / 2;

document.write("Result: " + result)
document.write("<hr>")
// 11.

var currentyear = (2023)
var birthyear = (2002)
var age = (currentyear - birthyear)
document.write("Current year: " + currentyear + "<br>")
document.write("Birth year: " + birthyear + "<br>")
document.write("Your age is " + age)

document.write("<hr>")

// 12.

var radius = (20)

var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius

document.write("Radius of a circle: " + radius + "<br>")
document.write("The circumference is: " + circumference + "<br>")
document.write("The area is" + area.toFixed(1))

document.write("<hr>")

// 13.

var favsnack = ("kurkure")
var currentage = (21)
var maxage = (100)
var amount = (3)
var remainingyear = maxage -  currentage
var snackperyear = amount * 365
var totalsnack = snackperyear * remainingyear



document.write("[The life time supply calculator]" + "<br>")
document.write("Favorite snack: " + favsnack + "<br>")
document.write("Current age is: " + currentage + "<br>")
document.write("Maximum age is: " + maxage + "<br>")
document.write("Amount of snack per day: " + amount + "<br>")
document.write("You will need " + totalsnack + " kurkure to last you until the ripe old age of " + remainingyear)


// END..









