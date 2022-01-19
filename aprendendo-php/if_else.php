<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>If else</title>
</head>

<body>
    <?php
    echo 'Resultado é:' . $resultado = true . '<br>';


    if (!$resultado) {
        echo "$resultado é legal";
    } else {
        echo "0 não é legal";
    }
    echo '<br>';
    $resultado ? print 'é verdadeiro' : print 'é falso';

    //----------------------------------------------------------------

    $a = 4;
    $b = 5;
    echo '<br>';
    if ($a - $b < $a) {
        echo "$a é maior que $a - $b";
    } elseif ($a - $b === $a) {
        echo "$a é igual a $a - $b";
    } else {
        echo "$a é menor que $a - $b";
    }

    ?>
</body>

</html>