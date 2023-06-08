// 1.

function displayformdata() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmedpassword = document.getElementById('confirmpassword').value


    var formdata = ("First name" + firstname + "<br>" + "last name" + lastname + "<br>" + " E-mail " + email + "<br>" + "password" + password + "<br>" + "confirmedpassword" + confirmedpassword + "<br>")
    document.getElementById("formdata").innerHTML = formdata
}


// 2.

function toggleDetails() {
    var details = document.getElementById("itemDetails");
    var button = document.getElementById("readMoreBtn");

    if (details.style.display === "none") {
        details.style.display = "block";
        button.innerHTML = "Read less";
    } else {
        details.style.display = "none";
        button.innerHTML = "Read more";
    }
}

// 3.

var students = [];

function addStudent() {
    var student = {}; 

    student.name = document.getElementById("name").value;
    student.age = document.getElementById("age").value;
    student.grade = document.getElementById("grade").value;

    students.push(student); 

    displayStudents();
    clearForm(); 
}

function displayStudents() {
    var table = document.getElementById("studentTable");

    
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    
    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        var row = table.insertRow();

        var nameCell = row.insertCell();
        nameCell.innerHTML = student.name;

        var ageCell = row.insertCell();
        ageCell.innerHTML = student.age;

        var gradeCell = row.insertCell();
        gradeCell.innerHTML = student.grade;

        var actionsCell = row.insertCell();
        actionsCell.innerHTML = '<button onclick="editStudent(' + i + ')">Edit</button> ' +
            '<button onclick="deleteStudent(' + i + ')">Delete</button>';
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents(); 
}

function editStudent(index) {
    var student = students[index];

    document.getElementById("editForm").style.display = "block"; // Show the edit form

    
    document.getElementById("editName").value = student.name;
    document.getElementById("editAge").value = student.age;
    document.getElementById("editGrade").value = student.grade;

    
    document.getElementById("editIndex").value = index.toString();
}

function updateStudent() {
    var index = parseInt(document.getElementById("editIndex").value);

    students[index].name = document.getElementById("editName").value;
    students[index].age = document.getElementById("editAge").value;
    students[index].grade = document.getElementById("editGrade").value;

    displayStudents(); 

    closeEditForm(); 
}

function closeEditForm() {
    document.getElementById("editForm").style.display = "none";
    clearEditForm(); 
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}

function clearEditForm() {
    document.getElementById("editName").value = "";
    document.getElementById("editAge").value = "";
    document.getElementById("editGrade").value = "";
    document.getElementById("editIndex").value = "";
}

displayStudents();






