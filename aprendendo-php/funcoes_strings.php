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
    $texto = "Curso de PHP";

    echo $texto . '<br />';
    echo '<hr>';
    echo strtolower($texto) . ' <br />';
    echo '<hr>';
    echo strtoupper($texto) . ' <br />';
    echo '<hr>';
    echo ucfirst($texto) . ' <br />';
    echo '<hr>';
    echo strlen($texto) . ' <br />';
    echo '<hr>';
    echo str_replace('P','B',$texto) . ' <br />';
    echo '<hr>';
    echo substr($texto,0,5) . ' <br />';
    
    ?>
</body>

</html>