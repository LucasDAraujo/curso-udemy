<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concatenação</title>
</head>

<body>
    <?php
    $nome = 'Jorge';
    $cor = 'verde';
    $idade = 29;
    $texto = ' Oi ' . $nome . ', vi que sua cor favorita é ' . $cor . ', que você possui ' . $idade . ' anos e que gosta de jogar videogame.';
    echo "Oi  $nome, vi que sua cor favorita é $cor, que você possui $idade anos e que gosta de jogar videogame";
    echo '<br>' . $texto;
    ?>
</body>

</html>