let hElements = document.querySelectorAll(".h");

function cresce() {
    hElements.forEach(function(element) {
        element.style.transform = "scale(1)";
    });
}

window.onload = cresce;
