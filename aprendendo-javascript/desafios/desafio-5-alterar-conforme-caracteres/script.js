function modificaBackgroundOnFocus() {
    document.getElementById("entrada").style.backgroundColor = "#FFFF00";
}

function modificaBackgroundOnBlur() {
    texto = document.getElementById("entrada").value;
    if (texto.length < 3) {
        document.getElementById("entrada").style.backgroundColor = "#FF0000";
    } else {
        document.getElementById("entrada").style.backgroundColor = "#00FF00";
    }
}
