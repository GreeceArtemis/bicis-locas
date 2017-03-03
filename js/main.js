function validateForm(){
	/* Escribe tú código aquí */
  var todoCorrecto=true;
  var mensajeFinal="";
  var name=document.getElementById("name").value;
  var lastname=document.getElementById("lastname").value;
  var email=document.getElementById("input-email").value;
  var password=document.getElementById("input-password").value;
  var validaMayus=/[A-Z]/g;
  var totalMayus1=(name.match(validaMayus));
  var totalMayus2=(lastname.match(validaMayus));
  if(name.length < 1 || lastname.length < 1 ||email.length<1||password.length<1){
    todoCorrecto = false;
    mensajeFinal+="Debe ingresar el dato completo ";
    alert(mensajeFinal);
  }
else  if((!/[A-Z]/.test(name[0]))||(!/[A-Z]/.test(lastname[0]))){
    todoCorrecto =false;
    mensajeFinal="Inicial debe estar en MAYUSCULA";
    alert(mensajeFinal);
  }
else  if(/[0-9]/.test(name)||(/[0-9]/.test(lastname))){
    todoCorrecto =false;
    mensajeFinal="No se aceptan NÚMEROS-INGRESE SU NOMBRE/APELLIDO";
    alert(mensajeFinal);
  }
//  if(totalMayus2!=1&&(lastname.match(validaMayus))[0]!=lastname[0]){
  //  todoCorrecto =false;
//    mensajeFinal+="Debe ingresar con MAYUSCULA la primera letra del apellido<br> "
//  }

if(todoCorrecto){
  alert("mensajeFinal1");
}
else{
  alert("mensajeFinal2");
}
}
