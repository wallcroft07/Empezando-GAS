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




function formatDateJP(values){
  
   //Formato Japonés
   return  Utilities.formatDate(new Date(values), "GMT+1", "yyyy/MM/dd");
 
  
}//Fin Función


function formatDateEU(values  ) {
 
  //Formato Europeo
  return  Utilities.formatDate(new Date(values), "GMT+1", "dd/MM/yyyy");
 
}//Fin Función

function formatDateUSA( values) {

  return Utilities.formatDate(new Date(values), "GMT+1", "MM/dd/yyyy");

  
  
  
  
}//Fin FUnción




  
function formatearFechaOrin(){
  //Recoger el destino de formato
     var sheet = SpreadsheetApp.getActiveSheet();
  var rango = sheet.getRange(7, 1);
  var formatoPais = rango.getValues();
    //Recogemos la fecha 
    var rango = sheet.getRange(7, 2);
  var datosFecha = rango.getValues();
  Logger.log(datosFecha);
  Logger.log(formatoPais);
  switch(formatoPais){
      case "USA":
     datosFecha= formatDateUSA(datosFecha);
      break;
     case "EU":
      datosFecha= formatDateEU(datosFecha);
      break;
        case "JP":
     datosFecha= formatDateJP(datosFecha);
      break;
      
  }//Fin Switch
   sheet.getRange(8, 2).setValue(datosFecha);
}