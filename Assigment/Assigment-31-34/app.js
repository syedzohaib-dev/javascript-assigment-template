// 1.

var current = new Date()
document.write("<h1>" + current)
document.write("<hr>")

// 2.

var monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var current = new Date()
var currentmonth = current.getMonth();
document.write("Current month: " + monthlist[currentmonth])
document.write("<hr>")

// 3.

var daylist = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'sat']
var currentday = new Date()
var newday = currentday.getDay()
document.write("Today is " + daylist[newday])
document.write("<hr>")

// 4.

var current = new Date()
if (current.getDay() === 0 || current.getDay() === 6) {
    document.write("It's Fun Day")
}
else {
    document.write("It's not fun day")
}
document.write("<hr>")

// 5.

var current = new Date()
var daylist = current.getDate()
if (daylist < 16) {
    document.write("First fifteen day of the month")
}
else {
    document.write("last day of the month")
}
document.write("<hr>")

// 6.

var Current = new Date()
var minut = current.getTime() / (1000 * 60)
var milisecond = current.getTime()
document.write(current + "<br>")
document.write("Elapsed milisecond since january 1 1970: " + milisecond + "<br>")
document.write("Elapsed minut since january 1 1970: " + minut + "<br>")
document.write("<hr>")

// 7.

var current = new Date()
var noon = current.getHours()
if (noon > 12) {
    document.write("Its AM")
}
else {
    document.write("Its PM")
}
document.write("<hr>")

// 8.

var laterdate = new Date(2020, 11, 31)
document.write("Later date: " + laterdate)
document.write("<hr>")

// 9.

var current = new Date()
var past = new Date(2015, 06, 18)
var minus = current.getTime() - past.getTime()
var passing = Math.floor(minus / (1000 * 60 * 60 * 24))
document.write(passing + " days have passed since 1st ramzan 2015")
document.write("<hr>")

// 10.

var current = new Date()
var past = new Date('sat, dec, 5, 2015 22:50:16')
var timelapesd = Math.floor((current - past) / 1000)

document.write("On reference date: " + past + "<br>")
document.write(timelapesd + " second has passed since begining of 2015 <br>")
document.write("<hr>")

// 11.

var current = new Date()
var pasthour = new Date('sat, dec, 5, 2015 23:08:16')
var hourlapsed = Math.floor((current - pasthour) / (1000 * 60 * 60))
document.write("Current date: " + current + "<br>")
document.write(hourlapsed + " hours ago, it's was " + pasthour)
document.write("<hr>")

// 12.

var currentnew = new Date()
var current = new Date()

current.setFullYear(current.getFullYear() - 100)
document.write("Current date: " + currentnew + "<br>")
document.write("100 year back: " + current)
document.write("<hr>")

// 13.

var age = prompt("Plz enter your age")

var current = new Date().getFullYear()
var claculate = current - age
document.write("Your age is " + age + "<br>")
document.write("Your birth year is " + claculate + "<br>")
document.write("<hr>")

// 14.

var costomername = ("zohaib")
var month = ("June")
var unitnumber = (410)
var perunit = (32)
var latecharge = 350
var duedate = (unitnumber * perunit)
var afterduedate = (duedate + latecharge)

document.write("K-Electric Bill<br><br>")
document.write("-------------------------------------<br>")
document.write("Costomer name: " + costomername + "<br>")
document.write("Month: " + month + "<br>")
document.write("Number of unit: " + unitnumber + "<br>")
document.write("Charges per unit: " + perunit + "<br>")
document.write("-------------------------------------<br>")
document.write("Net amount payable (within due date): " + duedate + "<br>")
document.write("Late payment surcharge: " + latecharge + "<br>")
document.write("Groos amount payable (after due date): " + afterduedate + "<br>")


// END.




