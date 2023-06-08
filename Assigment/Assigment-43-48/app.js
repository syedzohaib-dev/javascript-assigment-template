// 1.

var link = document.getElementById("myLink")

link.addEventListener("click", function (event) {
    event.preventDefault()

    alert("You clicked the link!")
})

// 2.

function showalert(massage) {
    alert(massage)
}

// 3.

function deleterow(button) {
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}

// 5.

var counter = 0;

function increasecounter() {
    counter++;
    updatecounter();
}

function decreasecounter() {
    if (counter > 0) {
        counter--;
        updatecounter();
    }
}

function updatecounter() {
    document.getElementById("countervalue").textContent = counter;
}

