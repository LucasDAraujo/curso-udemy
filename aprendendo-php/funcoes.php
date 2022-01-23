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

    //Standard function
    function dizerBemVindo()
    {
        echo 'Bem-vindo';
    }

    //Arrow function
    $calcularAreaTerreno = fn ($largura, $altura) => $largura * $altura;


    echo $calcularAreaTerreno(2, 3);
    echo '<br />';
    dizerBemVindo();
    ?>
</body>

</html>