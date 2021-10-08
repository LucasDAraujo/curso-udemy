let x = 1
while (x <= 10) {
    document.write(x + '<br>');
    x++
}
document.write('<h3>fim</h3>');
document.write('<hr>');

x = 1
while (true) {
    if (x >= 40) {
        document.write('<h3>fim</h3>');
        break
    }
    document.write(x + '<br>');
    x++

}
document.write('<hr>');


x = 1
while (true) {
    x++
    if (x === 5) {
        document.write('<h3>PULOU</h3>');
        continue
    }
    if (x >= 40) {
        document.write('<h3>fim</h3>');
        break
    }
    document.write(x + '<br>');

}