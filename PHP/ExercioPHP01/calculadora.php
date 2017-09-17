<?php 
	$opcao = $_GET['opcao'];
	$numero1 = $_GET['numero1'];
	$numero2 = $_GET['numero2'];



	if ($opcao == "op1") {
		$opcao = "+";
		$resultado = $numero1 + $numero2;
		echo "Resultado de: " . $numero1 . " " . $opcao . " " . $numero2 . " = " . $resultado;
	}elseif ($opcao == "op2") {
		$opcao = "-";
		$resultado = $numero1 - $numero2;
		echo "Resultado de: " . $numero1 . " " . $opcao . " " . $numero2 . " = " . $resultado;
	}elseif ($opcao == "op3") {
		$opcao = "x";
		$resultado == $numero1 * $numero2;
		echo "Resultado de: " . $numero1 . " " . $opcao . " " . $numero2 . " = " . $resultado;
	}elseif ($opcao == "op4") {
		$opcao = "/";
		$resultado = $numero1 / $numero2;
		echo "Resultado de: " . $numero1 . " " . $opcao . " " . $numero2 . " = " . $resultado;
	}elseif ($opcao == "") {
		echo "Não foi escolhido a operação";
	}else{
		echo "Nenhum Valor informado";
	}

	echo "<br><br><a href=/calculadora.html>Voltar</a>";
	

 ?>

