// 1.

function displaydatetime() {
    var fresh = new Date()
    document.write("<h1>" + fresh)

}
displaydatetime()
document.write("<hr>")

// 2.

function displayname() {
    var firstname = prompt("Plz enter your first name")
    var lastname = prompt("Plz enter your lat name")
    var fullname = (firstname + lastname)
    document.write("Your fullname is: " + fullname)
}
displayname()
document.write("<hr>")

// 3.

function displaynumber() {
    var number1 = parseInt(prompt("Plz enter your first number"))
    var number2 = parseInt(prompt("Plz enter your second number"))
    var sum = number1 + number2

    document.write("The sum of " + number1 + " and " + number2 + " is " + sum)
}
displaynumber()
document.write("<hr>")

// 4.

function displaycalculator() {
    var num1 = parseInt(prompt("plz enter your first number of calculator"))
    var num2 = parseInt(prompt("Plz enter your second number of calculator"))
    var operator = prompt("Plz enter the operator (+, -, *, /)")
    var result


    if (operator === "+") {
        result = num1 + num2
    }
    else if (operator === "-") {
        result = num1 - num2
    }
    else if (operator === "*") {
        result = num1 * num2
    }
    else if (operator === "/") {
        result = num1 / num2
    }
    else {
        document.write("Invalid operator")
        return
    }
    document.write("Result Of Calculator " + result)

}
displaycalculator()
document.write("<hr>")

// 5.

function square(number) {
    return number ** 2

}
var result = square(5)
document.write("Square function " + result)
document.write("<hr>")

// 6.

function factorialnum(number) {
    if (number === 0 || number === 1) {
        return 1
    }
    else {
        var result = 1
        for (var i = 2; i <= number; i++) {
            result *= i
        }
        return result
    }
}
var result = factorialnum(5)
document.write("Factorial function: " + result)
document.write("<hr>")

// 7.

function displaycounting(startnumber, endnumber) {
    var startnumber = parseInt(prompt("Plz enter the start number of counting"))
    var endnumber = parseInt(prompt("Plz enter the end number of counting"))
    var countingelement = ""
    for (i = startnumber; i <= endnumber; i++) {
        countingelement += i + ' '
    }
    document.write(countingelement)

}
displaycounting()
document.write("<hr>")

// 8.

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}
var baseLength = parseFloat(prompt("Enter the length of the base:"));
var perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular:"));

var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
document.write("The length of the hypotenuse is: " + hypotenuseLength);
document.write("<hr>")

// 9.

function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
}

var width = 5;
var height = 10;
var area1 = calculateRectangleArea(width, height);
document.write("Passing Arguments as Values Area 1: " + area1 + "<br>");

function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
}

var width = 5;
var height = 10;
var area2 = calculateRectangleArea(width, height);
document.write("Passing Arguments as Variable Area 2: " + area2 + "<br>");
document.write("<hr>")

// 10.

function isPalindrome(str) {
    var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    var reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
var word = prompt("plz enter a word or phrase:");
var result = isPalindrome(word);
if (result) {
    document.write(word + " is a palindrome.");
} else {
    document.write(word + " is not a palindrome.");
}
document.write("<hr>")

// 11.

function capitalizeFirstLetter(str) {
    var words = str.split(' ')
    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }
    return words.join(' ')
}
var inputString = 'the quick brown fox'
var outputString = capitalizeFirstLetter(inputString)
document.write(outputString)
document.write("<hr>")

// 12.

function findLongestWord(str) {
    var words = str.split(' ')
    var longestWord = ''

    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }

    return longestWord
}

var inputString = 'Astronomy is a branch of science'
var longestWord = findLongestWord(inputString)
document.write(longestWord)
document.write("<hr>")

// 13.

function count(str, letter) {
    var count = 0

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++
        }
    }
    return count
}
var inputString = 'JSResourceS.com'
var target = 'o'
var occurrences = count(inputString, target)
document.write("Number of occurrences of '" + target + "': " + occurrences)
document.write("<hr>")

// 14.

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius
    document.write("Circumference of circle " + circumference.toFixed(2) + "<br>")
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2)
    document.write("Area of circle " + area.toFixed(2))
}
var radius = 5

calcCircumference(radius)
calcArea(radius)
document.write("<hr>")

// END..































