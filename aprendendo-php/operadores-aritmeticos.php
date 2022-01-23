<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de PHP</title>
</head>

<body>
    <?php
    $num1 = 13;
    $num2 = 14;
    echo "A soma de " . $num1 . " e " . $num2 . " é: " . ($num1 + $num2);
    echo '<br/>';
    echo "A subtração de " . $num1 . " e " . $num2 . " é: " . ($num1 - $num2);
    echo '<br/>';

    echo "A multiplicação de " . $num1 . " e " . $num2 . " é: " . ($num1 * $num2);
    echo '<br/>';
    echo "A divisão de " . $num1 . " e " . $num2 . " é: " . ($num1 / $num2);
    echo '<br/>';
    echo "O módulo da divisão de " . $num1 . " e " . $num2 . " é: " . ($num1 % $num2);
    ?>
</body>

</html>