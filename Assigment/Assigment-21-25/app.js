// 1.

var firstname = prompt("Plz enter your first name")
var lastname = prompt("Plz enter your last name")
var fullname = (firstname + " " + lastname)
document.write("<h1>Full name " + fullname)
document.write("<hr>")

// 2.

var favoritemobile = prompt("Plz write your favorite mobile phone model")

// favoritemobile.length

document.write("My favorite mobile phone is: " + favoritemobile + "<br>length of string: " + favoritemobile.length)
document.write("<hr>")

// 3.

var pak = ("Pakistani")
var index = pak.indexOf("t")
document.write("String: " + pak + "<br>")
document.write("Index of 't' " + index + "<br>")
document.write("<hr>")

// 4.

var lastindex = ("Hello world")
var index = lastindex.lastIndexOf("l")
document.write("String: " + lastindex + "<br>")
document.write("last Index of 'l' " + index + "<br>")
document.write("<hr>")

// 5.

var paki = ("Pakistani")

var characterindex = paki.charAt("3")
document.write("String " + paki + "<br>")
document.write("index of '3' " + characterindex + "<br>")
document.write("<hr>")

// 6.

// var firstname = prompt("Plz enter your first name")
// var lastname = prompt("Plz enter your last name")
var fullname = (firstname.concat(" ", lastname))
document.write("<h1>Full name " + fullname)
document.write("<hr>")


// 7.

var city = "Hyderabad"

var newcity = city.replace("Hyder", "Islam")

document.write("City: " + city + "<br>")
document.write("After replacement: " + newcity)
document.write("<hr>")

// 8.

var massage = ("Ali and Sami are best friends. They play cricket and football together")

var newmassage = massage.replace(/and/g, "&")
document.write(newmassage)
document.write("<hr>")

// 9.

var string = "472"
var number = parseInt(string)

document.write("value " + string + "<br>")
document.write("Type " + typeof string + "<br>")
document.write("value " + number + "<br>")
document.write("Type " + typeof number + "<br>")
document.write("<hr>")


// 10.

var user = prompt("Plz write the some word")
document.write("User input: " + user + "<br>")
document.write("Upper case: " + user.toUpperCase() + "<br>")
document.write("<hr>")

// 11.

var usertitel = prompt("Plz write the speatial word ")
document.write("User input: " + usertitel + "<br>")
document.write("Title case: " + usertitel.charAt(0).toUpperCase() + usertitel.slice(1).toLowerCase())
document.write("<hr>")

// 12.

var num = (35.36)
var str = num.toString()
document.write("Number: " + num + "<br>")
document.write("Result: " + str.replace(".", "") + "<br>")
document.write("<hr>")


// 13.

var user_name = prompt("Plz write the valid user name")

if (user_name.includes('!') || user_name.includes(',') || user_name.includes('.') || user_name.includes('@')) {
    document.write("Plz enter the valid user name")
}
else {
    document.write("username correct")
}
document.write("<hr>")

// 14.

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var user = prompt("wellcome to suad bakery what do you want to sir!\n[“cake”, “apple pie”, “cookie”, “chips”, “patties”]")
var user = user.toLowerCase()
if (user === bakery[0] || user === bakery[1] || user === bakery[2] || user === bakery[3] || user === bakery[4]) {
    document.write(user + " is available")
}
else {
    document.write("We are sorry " + user + " is not available")
}
document.write("<hr>")

// 15.

var password = prompt("Plz enter your password")
document.write("Enter password: " + password + "<br>")
if (password.length < 6 || !/[a - zA - Z]/.test(password) || /[0 - 9]/.test(password)) {
    document.write("password don't match<br>")
    document.write("Plz inter a valid password<br>")
}
else {
    document.write("Password correct<br>")
}
document.write("<hr>")

// 16.

var university = "University Of Karachi";
var array = university.split("");

for (var i = 0; i < array.length; i++) {
    if (array[i] !== " ") {
        document.write(array[i] + "<br>");
    }
}
document.write("<hr>")

// 17.

var userinput = prompt("Plz  enter the word")
var lastcharacter = userinput[userinput.length - 1]
document.write("User input: " + userinput + "<br>")
document.write("Last character of input: " + lastcharacter + "<br>")
document.write("<hr>")
// 18.

var fox = ("the quick brown fox jumps over the lazy dog")
var wordcount = "the"
var word = fox.split("")
var count = 0
for (i = 0; i < word.length; i++) {
    if (word[1] === wordcount) {
        count++
    }
}
document.write("Text: " + fox + "<br>")
document.write("There are 2 occerence of word " + wordcount )
document.write("<hr>")

// END..




