function openModal(imageId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = document.getElementById(imageId).src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


var fontSize = 16;

function zoomIn() {
    fontSize += 10;
    updateFontSize();
}

function zoomOut() {
    if (fontSize > 10) {
        fontSize -= 10;
        updateFontSize();
    }
}

function updateFontSize() {
    var paragraph = document.getElementById("zoomParagraph");
    paragraph.style.fontSize = fontSize + "px";
}

// END..

