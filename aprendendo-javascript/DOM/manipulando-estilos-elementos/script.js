function modificaEstilo(bgColor) {
    document.getElementById("retangulo").style.backgroundColor = bgColor;
    document.getElementById("retangulo").style.width =
        Math.ceil(Math.random() * 1000) + "px";

    document.getElementById("retangulo").style.height =
        Math.ceil(Math.random() * 1000) + "px";
}
