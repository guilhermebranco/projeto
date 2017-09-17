function validar(){
	   var nome = document.frm.nome.value
	   var email = document.frm.email.value
	   var sobre = document.frm.sobre.value

		if(nome == ""){
		   alert('Nome é obrigatorio');
		   return false;
		}
		if(email == ""){
		   alert('O E-mail é obrigatorio');
		   return false;
		}
		if(!document.getElementById("sexoM").checked && !document.getElementById("sexoF").checked){
		   alert('Escolha o Sexo');
		   return false;
		}		
		if(email == ""){
		   alert('O E-mail é obrigatorio');
		   return false;
		}
		if(sobre == ""){
			alert('Por favor, digue algo sobre você')
			return false;
		}
		if(!document.getElementById("concordo").checked){
		   alert('É obrigatório concordar');
		   return false;
		}
		return true;
	}
