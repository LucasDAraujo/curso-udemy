<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade</title>
</head>

<body>
    <?php
    //Definir se uma pessoa pode ou não doar sangue
    $idade = 15;
    $peso = 80;
    ($idade >= 16 && $idade <= 69) && ($peso >= 50)  ? print('Atende aos requisitos') : print('Não atende aos requisitos');
    ?>
</body>

</html>