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
    //gettype() => retorna o tipo da variável
    $valor = 10;
    echo gettype($valor);
    $valor2 = (float) $valor;
    echo '<br />';
    echo gettype($valor2);
    $valor2 = (string)$valor2;
    echo '<br />' .  $valor2 . ' ' . getType($valor2);

    echo '<hr />';

    $valor3 = 13.5;
    echo $valor3 . ' ' . getType($valor3);
    $valor3 = (int)$valor3;
    echo '<br />' . $valor3 . ' ' . getType($valor3);
    ?>
</body>

</html>