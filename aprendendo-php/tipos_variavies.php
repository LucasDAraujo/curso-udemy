<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos var</title>
</head>

<body>
    <?php
    $numero = 10;
    $pessoa = array(
        "nome" => $nome = "Jorginho",
        "Idade" => $idade = 20,
        "peso" => $peso = 82.5,
        "fumante" => $fumante = false
    );

    echo $numero  * 20 . " <br>";

    $arrayLegal = array('didi', 'tio patinhas');
    echo $arrayLegal[0];
    ?>
    <hr>
    <h1>Ficha cadastral</h1>
    <br>
    <p>Nome: <?= $pessoa["nome"] ?></p>
    <p>idade: <?= $pessoa["idade"] ?></p>
    <p>peso: <?= $pessoa["peso"] . 'kg' ?></p>
    <p>fumante: <?php $pessoa["fumante"] ? print('sim') : print ('não')  ?>
    </p>
</body>

</html>