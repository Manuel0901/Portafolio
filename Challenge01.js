//FUNCION PARA ENCRIPTAR EL TEXTO DE ENTRADA
function EncriptarTexto(){
  var Entrada = document.getElementById('EntradaTexto');
  var Salida = "";
  //creamos una iteracion for
  for(var i = 0; i < Entrada.value.length; i++){
    Salida += String.fromCharCode(Entrada.value.charCodeAt(i) + 1);
  }
  document.getElementById('SalidaTexto').value = Salida;
}

//creamos la funcion para desencriptar el texto
function DesencriptarTexto(){
  var Entrada = document.getElementById("SalidaTexto").value;
  var Salida = '';
  //creamos el for que ayuda a desencriptar restando 1 
  for(var i = 0;i < Entrada.length; i++){
    Salida += String.fromCharCode(Entrada.charCodeAt(i) - 1);
  }
  document.getElementById('SalidaTexto').value = Salida;
}

//funcion para copiar texto
function CopiarTexto(){
  var SalidaTexto = document.getElementById('SalidaTexto');
  SalidaTexto.select();
  SalidaTexto.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("El texto encriptado ha sido copiado al portapapeles.");
}