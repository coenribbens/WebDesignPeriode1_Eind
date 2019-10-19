function ShowFirstYear() {
    disableAllElements();
    document.getElementById('jaar1').style.display = "block";
}

function ShowSecondYear() {
    disableAllElements();
    document.getElementById('jaar2').style.display = "block";
}

function ShowThirdYear() {
    disableAllElements();
    document.getElementById('jaar3').style.display = "block";
}

function ShowFourthYear() {
    disableAllElements();
    document.getElementById('jaar4').style.display = "block";
}

function disableAllElements() {
    document.getElementById('jaar1').style.display = "none";
    document.getElementById('jaar2').style.display = "none";
    document.getElementById('jaar3').style.display = "none";
    document.getElementById('jaar4').style.display = "none";
}