//Definimos nuestras variables
var nombre = prompt("Ingresa un nombre: ","Alejandro Perez");
var carrera = prompt("Carrera: ", "Desarrolador Web");
//ingresos ramo 1 + sus 3 notas
var ramo1a = prompt("Ingresa ramo: ", "HTML");
var notaramo1a  = prompt("ingresa nota 1 ["+ramo1a+"] : ", 4 );
var notaramo2a  = prompt("ingresa nota 2 ["+ramo1a+"] : " , 5);
var notaramo3a  = prompt("ingresa nota 3 ["+ramo1a+"] : ", 4);
var promedioramo1 =(parseInt(notaramo1a) + parseInt(notaramo2a) + parseInt(notaramo3a))/3;
//ingresos ramo 2 + sus 3 notas
var ramo2b = prompt("Ingresa ramo: ","CSS");
var notaramo1b  = prompt("ingresa nota 1 ["+ramo2b+"]" , 3);
var notaramo2b  = prompt("ingresa nota 2 ["+ramo2b+"]" , 4);
var notaramo3b  = prompt("ingresa nota 3 ["+ramo2b+"]" , 5);
var promedioramo2 =(parseInt(notaramo1b) + parseInt(notaramo2b) + parseInt(notaramo3b)) / 3;
//ingresos ramo 3 + sus 2 notas y queda pendite la nota 3 y el promedio
var ramo3c = prompt("Ingresa ramo: " , "JavaScript"); 
var notaramo1c  = prompt("ingresa nota 1 ["+ramo3c+"]" , 2);
var notaramo2c  = prompt("ingresa nota 2 ["+ramo3c+"]" , 6);
var notaramo3c  = ("Pendiente");
var promedioramo3  = ("Pendiente");
//variables para sacar nota aprobacion
const notaMinima = 4;
const divisor = 3;
var notaAprob = ((parseFloat(notaMinima) * parseFloat(divisor)) - (parseFloat(notaramo1c) + parseFloat(notaramo2c)));

//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>");
document.write('<p>Nombre: ' + nombre + '</p> ');
document.write('<p>Carrera: ' + carrera + '</p>');
//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
//ramo 1
document.write("<td scope='row'>"+ramo1a+"</th>");
document.write("<td>"+notaramo1a+"</td>");
document.write("<td>"+notaramo2a+"</td>");
document.write("<td>"+notaramo3a+"</td>");
document.write("<td>"+parseFloat(promedioramo1)+"</td>");
document.write("<tr>");
document.write("</tbody>");
//ramo 2
document.write("<td scope='row'>"+ramo2b+"</th>");
document.write("<td>"+notaramo1b+"</td>");
document.write("<td>"+notaramo2b+"</td>");
document.write("<td>"+notaramo3b+"</td>");
document.write("<td>"+parseFloat(promedioramo2)+"</td>");
document.write("<tr>");
document.write("</tbody>");
//ramo 3
document.write("<td scope='row'>"+ramo3c+"</th>");
document.write("<td>"+notaramo1c+"</td>");
document.write("<td>"+notaramo2c+"</td>");
document.write("<td>"+notaramo3c+ "</td>");
document.write("<td>"+promedioramo3+ "</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table>");
//Mensaje para saber nota para aprobar
document.write('<p>Para Aprobar el ramo '+ramo3c+' con nota 4. Nesecitas obtener un '+notaAprob+' en la nota 3.</p>');
//Aquí cerramos nuestra tabla
document.write("</div>");
//Aquí cerramos nuestro div contenedor



