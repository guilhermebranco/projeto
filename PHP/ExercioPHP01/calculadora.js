
function validar(){

	//validacao numero

	if (document.getElementById("numero1").value == ""){
		alert ("Digite um número 1");
		return false;
	}else{
		if (document.getElementById("numero2").value == ""){
			alert ("Digite um número 2");
			return false;
		}else{
			return true;	
		}
	}


		
}

//quando usar a função validar as divs não aparecem na pagina	

/*function validar(){
	if (document.getElementById('op1').checked && frmCalc.n1div1.value = "") {
		alert ("Digite um número");
		return false;
	}
	return true;
}
*/



