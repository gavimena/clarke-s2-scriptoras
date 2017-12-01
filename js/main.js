'use strict';
//prueba cargar imagen
function archivo(evt) {
      var files = evt.target.files; // FileList object

        //Obtenemos la imagen del campo "file".
      for (var i = 0, f; f = files[i]; i++) {
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }

           var reader = new FileReader();

           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };
           })(f);

           reader.readAsDataURL(f);
       }
}

      document.getElementById('files').addEventListener('change', archivo, false);
			// duplico para img prev
			function archivo2(evt) {
			      var files = evt.target.files; // FileList object

			        //Obtenemos la imagen del campo "file".
			      for (var i = 0, f; f = files[i]; i++) {
			           //Solo admitimos imágenes.
			           if (!f.type.match('image.*')) {
			                continue;
			           }

			           var reader = new FileReader();

			           reader.onload = (function(theFile) {
			               return function(e) {
			               // Creamos la imagen.
			                      document.getElementById("prefoto").innerHTML = ['<img class="thumb2" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
			               };
			           })(f);

			           reader.readAsDataURL(f);
			       }
			}

			      document.getElementById('files').addEventListener('change', archivo2, false);
	//fin prueba cargar imagen

//Datos principales
function clicknombre(){
var nombreIntroducido = prompt("¿Cuál es tu nombre");
document.getElementById('nombreformulario').value=nombreIntroducido;
}
function clickapellido(){
var apellidoIntroducido = prompt("¿Cuáles son tus apellidos?");
document.getElementById('apellidoformulario').value=apellidoIntroducido;
}
function clickprofesion(){
var profesionIntroducido = prompt("¿Cuál es tu profesión");
document.getElementById('profesionformulario').value=profesionIntroducido;
}
function clickemail(){
var emailIntroducido = prompt("¿Cuál es tu email");
document.getElementById('emailformulario').value=emailIntroducido;
}
function clicktelefono(){
var telefonoIntroducido = prompt("¿Cuál es tu teléfono móvil?");
document.getElementById('telefonoformulario').value=telefonoIntroducido;}

//fin promp datos principales


//guardar datos principales introducidos
function guardardatosprincipales(){
document.getElementById('prenombre').innerHTML=document.getElementById('nombreformulario').value;
document.getElementById('preapellidos').innerHTML=document.getElementById('apellidoformulario').value;
document.getElementById('preprofesion').innerHTML=document.getElementById('profesionformulario').value;
document.getElementById('preemail').innerHTML=document.getElementById('emailformulario').value;
document.getElementById('pretelefono').innerHTML=document.getElementById('telefonoformulario').value;
}
//About
//función para abrir el desplegable
function editar(idContent){
document.getElementById(idContent).style.display = 'block';
}
//función para cerrar sección
function ocultar(idContent){
	document.getElementById(idContent).style.display = 'none';
}

/*var aboutMe = document.querySelector("#about");
var aboutInput = prompt("Haz una breve descripción sobre ti.");
aboutMe.innerHTML = aboutInput;
*/

//Experiencia y Formación

//Desplegable mes
var monthOptions = '<option value="mes">Mes</option>';
monthOptions = monthOptions + '<option value="Ene"> Enero</option>';
monthOptions = monthOptions + '<option value="Feb"> Feb</option>';
monthOptions = monthOptions + '<option value="Mar">Marzo</option>';
monthOptions = monthOptions + '<option value="Abr">Abril</option>';
monthOptions = monthOptions + '<option value="May">Mayo</option>';
monthOptions = monthOptions + '<option value="Jun">Junio</option>';
monthOptions = monthOptions + '<option value="Jul">Julio</option>';
monthOptions = monthOptions + '<option value="Ago">Agosto</option>';
monthOptions = monthOptions + '<option value="Sep">Septiembre</option>';
monthOptions = monthOptions + '<option value="Oct">Octubre</option>';
monthOptions = monthOptions + '<option value="Nov">Noviembre</option>';
monthOptions = monthOptions + '<option value="Dic">Diciembre</option>';

//Se aplica en todos los que tengan la clase .month
var months = document.querySelectorAll('.month');
for (var i = 0; i < months.length; i++) {
	months[i].innerHTML = monthOptions;
}

//desplegable años
var years = 2030;
var yearOptions = ''; //almacena options de html que van en el select

for (var initialYear=1950; initialYear<years; initialYear++) {
  yearOptions = yearOptions + '<option>' + (initialYear) + '</option>';
}
//Se aplica en todos los que tengan la clase year
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = yearOptions;
}
//Funciones para obtener el valor de los campos de texto experiencia con prompt
function clickCargo(){
var cargoIntroducido = prompt("Introduce el nombre del puesto de trabajo.");
document.getElementById('job').value=cargoIntroducido;
}
function clickEmpresa(){
var empresaIntroducida = prompt("Introduce el nombre de la empresa.");
document.getElementById('company').value=empresaIntroducida;
}

//Función para introducir en la previsualización los datos obtenidos de experiencia
function saveExperience(){
document.getElementById('job-preview').innerHTML=document.getElementById('job').value;
document.getElementById('company-preview').innerHTML=document.getElementById('company').value;
document.getElementById('start-job-month-preview').innerHTML=document.getElementById('month-job-start').value;
document.getElementById('end-job-month-preview').innerHTML=document.getElementById('month-job-end').value;
document.getElementById('start-job-year-preview').innerHTML=document.getElementById('year-job-start').value;
document.getElementById('end-job-year-preview').innerHTML=document.getElementById('year-job-end').value;
}

//Funciones para obtener el valor de los campos de texto de Formación con prompt
function clickEstudios(){
var tituloIntroducido = prompt("Indica el nombre de la titulación.");
document.getElementById('educ-title').value=tituloIntroducido;
}
function clickCentro(){
var centroIntroducido = prompt("Indica el centro de estudios.");
document.getElementById('center').value=centroIntroducido;
}

//Función para introducir en la previsualización los datos obtenidos de formación
function saveTraining(){
document.getElementById('education-title-preview').innerHTML=document.getElementById('educ-title').value;
document.getElementById('education-center-preview').innerHTML=document.getElementById('center').value;
document.getElementById('start-education-month-preview').innerHTML=document.getElementById('month-training-start').value;
document.getElementById('end-education-month-preview').innerHTML=document.getElementById('month-training-end').value;
document.getElementById('start-education-year-preview').innerHTML=document.getElementById('year-training-start').value;
document.getElementById('end-education-year-preview').innerHTML=document.getElementById('year-training-end').value;
}
//Fin de Experiencia y Formación
//Skills
var newSkill = document.querySelectorAll(".skilli");
var skill;
//alert(newSkill.length);
for(var i = 0; i < newSkill.length; i++){
	//skill = prompt("Introduce skill");
	newSkill[i].innerHTML = skill;
}

//languages form section
// function showPromptLanguage() {
//   var newTextLanguage = document.querySelectorAll('.textBarPreview');
//     for (var i = 0; i < newTextLanguage.length; i++) {
//       var text = prompt("Introduce un idioma");
//       newTextLanguage[i].innerHTML = text;
//       var percentage = prompt("Introduce el porcentaje");
//       var newPercentageLanguage = document.querySelectorAll('.percentageBar').style.width = percentage + '%';
//       newPercentageLanguage[i].innerHTML = percentage;
//     }
// 	}

	function showPromptLanguage() {
    var newTextLanguage = document.querySelectorAll('.textBarPreview');
    for (var i = 0; i < newTextLanguage.length; i++) {
      var text = prompt("Introduce un idioma");
      newTextLanguage[i].innerHTML = text;
    }

	}

	function showPromptPercentage() {
    var newPercentageLanguage = document.querySelectorAll('.percentageBar1');
    for (var i = 0; i < newPercentageLanguage.length; i++) {
      var percentage = prompt("Introduce el porcentaje");
      // newPercentageLanguage[i] = percentage + '%';
      // newPercentageLanguage[i].innerHTML = newPercentageLanguage[i].style.width = percentage + '%';
    }
	}
	// function addInput() {
	// 	var addNewInput = document.querySelector('.languagesForm');
	// 	var addInput = document.createElement('input');
  //   addInput.style.cssText = 'background-color: black;'
	// 	addNewInput.append(addInput);
	// }

//Hobbies form
function showHobbiesForm() {
  document.getElementById('hobbiesForm').style.display = 'block';
}


/*Redes sociales*/
function showNetsocial() {
  var netSocial = document.querySelectorAll('.printnet');
  for (var i=0; i<netSocial.length; i++){
    var text = prompt("Introduce tu usuario de "+netSocial[i].innerHTML);
    netSocial[i].href = netSocial[i].href + text;
  }
}

/*javascript de redes sociales
function setValue(net){
	var inputSocial = document.getElementById(net);
	setSocialMedia(inputSocial.value, net);
}

function setSocialMedia(value, net){
	var aNet = document.getElementById('a-'+net);
	var url;
	if(net == 'linkedin'){
		aNet.href = aNet.href+value;
	}else if(net == 'Facebook'){
		aNet.href = aNet.href+value;
	}else if(net == 'Github'){
		aNet.href = aNet.href+value;
	}else if(net == 'Twitter'){
		aNet.href = aNet.href+value;
	}
}
*/
/*enlace codigo qr*/
var listElem = document.querySelector('.list');

var content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

listElem.innerHTML = content;
