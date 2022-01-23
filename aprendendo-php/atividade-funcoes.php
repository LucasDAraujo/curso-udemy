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

    function calcularSalarioComImposto($salario)
    {
        $calculaValorImposto = fn ($salario, $aliquota) => $salario - ($salario * $aliquota);

        if ($salario < 1903.98) {
            return 'RS' . $salario;
        } else if ($salario >= 1903.99 && $salario <= 2826.65) {
            return 'R$' . $calculaValorImposto($salario, 0.075);
        } else if ($salario >= 2826.6 && $salario <= 3751.05) {
            return 'R$' . $calculaValorImposto($salario, 0.15);
        } else if ($salario >= 3751.06 && $salario <= 4664.68) {
            return 'R$' . $calculaValorImposto($salario, 0.225);
        } else {
            return 'R$' . $calculaValorImposto($salario, 0.275);
        }
    
    }
    echo calcularSalarioComImposto(3000);
    ?>
</body>

</html>