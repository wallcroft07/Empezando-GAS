/*

Funcionalidad extra, coger una fecha, y pasarlo a los otros formatos restantes

Posible funcionalidad, recoger en una funcion todo lo repetido en las distintas funct

*/
function formatearRestantesFechas(){
  //Entorno:
   var sheet; var rango; var formatoPais;var rangoFechas; var fechaFormateadaPrimera;
  var fechaFormateadaSegunda; var strFormatoFecha;var iFechas;
  //Algoritmo:
  iFechas=0;
    sheet = SpreadsheetApp.getActiveSheet();
   //Cogemos el formato al que queremos pasar 
   rango = sheet.getRange(1, 1);
  formatoPais = rango.getValues();
 
   //Cogemos el listado de fechas 
  //Los rangos se pueden poner lastrow last colum si estuviera en una hoja sola
  rangoFechas=sheet.getRange(1, 2, sheet.getLastRow(), 1).getValues();
  //En este caso cogemos el formato que está  las fechas, para pasar a las dos restantes 
    //cambiamos a string el formato de Fecha
  strFormatoFecha=String(formatoPais[0]);
  for(var i=0;i<rangoFechas.length;i++){
    switch(strFormatoFecha){
      case "USA":
        fechaFormateadaPrimera=formatDateEU(rangoFechas[i]);
        fechaFormateadaSegunda=formatDateJP(rangoFechas[i]);
        break;
      case "EU":
        fechaFormateadaPrimera=formatDateUSA(rangoFechas[i]);
        fechaFormateadaSegunda=formatDateJP(rangoFechas[i]);
        break;
      case "JP":
        fechaFormateadaPrimera=formatDateEU(rangoFechas[i]);
        fechaFormateadaSegunda=formatDateUSA(rangoFechas[i]);
        break;
    }//Fin Switch
    sheet.getRange(1+i, 3).setValue(fechaFormateadaPrimera).setBackground("red").setFontColor("white");
    sheet.getRange(1+i, 4).setValue(fechaFormateadaSegunda).setBackground("green").setFontColor("white");
    iFechas++;
  }//Fin For
  sheet.getRange(1, 5).setValue(iFechas+" fechas cambiadas");
}//Fin Función




function formatearFechasRango(){
  //Entorno:
  var sheet; var rango; var formatoPais;var rangoFechas; var fechaFormateada;
  var strFormatoFecha;var iFechas;//Contador para saber cuantas fechas 
  //Algoritmo:
  iFechas=0;
   sheet = SpreadsheetApp.getActiveSheet();
  //Cogemos el formato al que queremos pasar 
   rango = sheet.getRange(1, 1);
  formatoPais = rango.getValues();
   //Cogemos el listado de fechas 
  //Los rangos se pueden poner lastrow last colum si estuviera en una hoja sola
  rangoFechas=sheet.getRange(1, 2, sheet.getLastRow(), 1).getValues();
  //cambiamos a string el formato de Fecha
  strFormatoFecha=String(formatoPais[0]);
  for(var i=0;i<rangoFechas.length;i++){
      switch(strFormatoFecha){
    case "USA":
        fechaFormateada= formatDateUSA(rangoFechas[i]);
        break;
     case "EU":
        fechaFormateada= formatDateEU(rangoFechas[i]);
      break;
     case "JP":
       fechaFormateada=formatDateJP(rangoFechas[i]);
      break;
      }//Fin Switch
       sheet.getRange(1+i, 3).setValue(fechaFormateada);
    iFechas++;
  }//Fin For
  sheet.getRange(1, 4).setValue(iFechas+" fechas cambiadas");
}//Fin Función



function formatDateJP(fecha){
  
   //Formato Japonés
   return  Utilities.formatDate(new Date(fecha), "GMT+2", "yyyy/MM/dd");
 
  
}//Fin Función


function formatDateEU(fecha  ) {
 
  //Formato Europeo
  return  Utilities.formatDate(new Date(fecha), "GMT+2", "dd/MM/yyyy");
 
}//Fin Función

function formatDateUSA( fecha) {
  //Formato USA
  return Utilities.formatDate(new Date(fecha), "GMT+2", "MM/dd/yyyy");

}//Fin FUnción



