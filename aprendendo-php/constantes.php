<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Constantes</title>
</head>

<body>
    <?php
    // Definindo constantes
    define('BD_URL', 'endereco_bd_dev');
    define('BD_USUARIO', 'usuario_dev');
    define('BD_SENHA', 'senha_dev');

    echo BD_URL . '<br>' . BD_USUARIO . '<br>' . BD_SENHA;
    ?>
</body>

</html>