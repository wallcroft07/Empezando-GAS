function recgerFecha() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rango = sheet.getRange(3, 1);
  var values = rango.getValues();
   Logger.log("1/5/2018 dd/MM/yyyy");
  //Formato Japonés
  var formattedDateJP = Utilities.formatDate(new Date(values), "GMT", "yyyy-MM-dd");
  Logger.log("Japonés YYY-MM-dd");
  Logger.log(formattedDateJP);
  //Formato Europeo
  formattedDateEU= Utilities.formatDate(new Date(values), "GMT", "dd-MM-yyyy");
  Logger.log("Europeo dd-MM-yyyy");
  Logger.log(formattedDateEU);
  //Formato  USA
  formattedDateUSA  = Utilities.formatDate(new Date(values), "GMT", "MM-dd-yyyy");
  Logger.log("USA MM-dd-yyyy");
  Logger.log(formattedDateUSA);
  
  
}//Fin Función




function formatDateJP(fecha){
  
   //Formato Japonés
   return  Utilities.formatDate(new Date(fecha), "GMT+1", "yyyy/MM/dd");
 
  
}//Fin Función


function formatDateEU(fecha  ) {
 
  //Formato Europeo
  return  Utilities.formatDate(new Date(fecha), "GMT+1", "dd/MM/yyyy");
 
}//Fin Función

function formatDateUSA( fecha) {

  return Utilities.formatDate(new Date(fecha), "GMT+1", "MM/dd/yyyy");

}//Fin FUnción




  
function formatearFechaOrin(){
  var fechaFormateada;
  //Recoger el destino de formato
     var sheet = SpreadsheetApp.getActiveSheet();
  var rango = sheet.getRange(7, 1);
  var formatoPais = rango.getValues();
    //Recogemos la fecha 
    var rango = sheet.getRange(7, 2);
  var datosFecha = rango.getValue();
     Logger.log(formatoPais[0]);
  //cambiamos a string
  var indexFormatoPais=String(formatoPais[0]);
  switch(indexFormatoPais){
    case "USA":
        fechaFormateada= formatDateUSA(datosFecha);
  
      break;
      
    case "EU":
        fechaFormateada= formatDateEU(datosFecha);
      break;
      
    case "JP":
       fechaFormateada=formatDateJP(datosFecha);
      break;
      
      
  }//Fin Switch
  /*
  if(formatoPais=="USA"){
   fechaFormateada= formatDateUSA(datosFecha);
   
 
  }else
    if(formatoPais=="EU"){
         fechaFormateada= formatDateEU(datosFecha);
      
    }else{
      fechaFormateada=formatDateJP(datosFecha);
    }
*/
   sheet.getRange(8, 2).setValue(fechaFormateada);
  
}//Fin FUncion