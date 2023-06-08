//   1.

function superpower(a, b) {
    var result = Math.pow(a, b);
    return result;
}

var base = 5;
var exponent = 8;

var powerResult = superpower(base, exponent);
document.write("<h1>Result: " + powerResult);
document.write("<hr>")

// 2.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
var inputYear = parseInt(prompt("Enter a year"));
var leapYear = isLeapYear(inputYear);

if (leapYear) {
    document.write(inputYear + " is a leap year.");
} else {
    document.write(inputYear + " is not a leap year.");
}
document.write("<hr>")

// 3.

function triangle(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}
var sideA = 3;
var sideB = 4;
var sideC = 5;

var triangleArea = triangle(sideA, sideB, sideC);
document.write("The area of the triangle is: " + triangleArea.toFixed(2));
document.write("<hr>")

// 4.

var marksSubject1 = 80
var marksSubject2 = 90
var marksSubject3 = 75

function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3
    var average = totalMarks / 3
    return average
}

function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3
    var totalPossibleMarks = 300
    var percentage = (totalMarks / totalPossibleMarks) * 100
    return percentage
}

function mainFunction(subject1, subject2, subject3) {
    var average = calculateAverage(subject1, subject2, subject3)
    var percentage = calculatePercentage(subject1, subject2, subject3)
    document.write("Average marks: " + average.toFixed(2) + "<br>")
    document.write("Percentage: " + percentage.toFixed(2) + "%" + "<br>")
}
mainFunction(marksSubject1, marksSubject2, marksSubject3)
document.write("<hr>")

// 5.

var text = "Zohaib"
var searchChar = "i"
var index = customIndexOf(text, searchChar)
function customIndexOf(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i
        }
    }
    return -1
}
document.write(text + "<br>")
document.write("Index of '" + searchChar + "': " + index)
document.write("<hr>")

// 6.

var sentence = "my name is zohaib and i am 21 year old"
var result = deleteVowels(sentence)
function deleteVowels(sentence) {
    var vowels = "aeiouAEIOU"
    var sentencewithoutvowels = ""
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence.charAt(i)
        if (vowels.indexOf(char) === -1) {
            sentencewithoutvowels += char
        }
    }
    return sentencewithoutvowels
}
document.write(sentence + "<br>")
document.write(result + "<br>")
document.write("<hr>")

// 7.

var text = "Pleases read this application and give me gratuity"
var result = countSuccess(text)

function countSuccess(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var count = 0

    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text.charAt(i).toLowerCase()
        var nextChar = text.charAt(i + 1).toLowerCase()

        switch (currentChar) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                if (vowels.indexOf(nextChar) !== -1) {
                    count++
                }
                break
            default:
                break
        }
    }

    return count
}
document.write(result)
document.write("<hr>")

// 8.

var distanceInKilometers = 100
document.write("Distance in kilometer: " + distanceInKilometers + "<br>---------------------------------<br>")
var distanceInMeters = convertToMeters(distanceInKilometers)
function convertToMeters(kilometers) {
    return kilometers * 1000
}
document.write("Distance in meters: " + distanceInMeters + "<br>")



var distanceInFeet = convertToFeet(distanceInKilometers)
function convertToFeet(kilometers) {
    return kilometers * 3280.84
}
document.write("Distance in feet: " + distanceInFeet + "<br>")



var distanceInInches = convertToInches(distanceInKilometers)
function convertToInches(kilometers) {
    return kilometers * 39370.1
}
document.write("Distance in inches: " + distanceInInches + "<br>")



var distanceInCentimeters = convertToCentimeters(distanceInKilometers)
function convertToCentimeters(kilometers) {
    return kilometers * 100000
}
document.write("Distance in centimeters: " + distanceInCentimeters + "<br>")
document.write("<hr>")

// 9.

var hoursWorked = 45
var overtimePay = calculatetime(hoursWorked)
function calculatetime(hoursWorked) {
    var regularHours = 40
    var overtimeRate = 12.00
    var overtimePay = 0.00
    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours
        overtimePay = overtimeHours * overtimeRate
    }

    return overtimePay
}

document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2))
document.write("<hr>")

// 10.

var amountToWithdraw = parseFloat(prompt("Plz enter the withdraw amount"))
var currencyNotes = calculateCurrencyNotes(amountToWithdraw)
function calculateCurrencyNotes(amount) {
    var hundredNotes = Math.floor(amount)
    var fiftyNotes = 0
    var tenNotes = 0

    if (amount >= 1) {
        var remainingAmount = amount % 1
        fiftyNotes = Math.floor(remainingAmount / 0.5)
        tenNotes = Math.floor((remainingAmount % 0.5) / 0.1)
    }

    return {
        hundreds: hundredNotes,
        fifties: fiftyNotes,
        tens: tenNotes
    }
}

document.write("Currency Notes:" + "<br>")
document.write("Hundreds: " + currencyNotes.hundreds + "<br>")
document.write("Fifties: " + currencyNotes.fifties + "<br>")
document.write("Tens: " + currencyNotes.tens + "<br>")
document.write("<hr>")

// END.....




















