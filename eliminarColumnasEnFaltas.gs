function cogerDatos() {
    //Accedemos al sheet
   var sheet = SpreadsheetApp.getActiveSheet();
   var rango = sheet.getRange(4, 1, 1, sheet.getLastColumn()).getValues();
  
  
//  var sheet =SpreadsheetApp.getActiveSheet();
 // var rango=sheet.getRange(4, 1, sheet.getLastRow(), 1);
//sheet.deleteColumns(1);
// var ss = SpreadsheetApp.getActiveSpreadsheet();
//var sheet = ss.getSheets()[0];

//var range = sheet.getRange(1,1);
//range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
    
  //A nivel de fila:
   for(var i=0;i<rango[0].length;i++){
 Logger.log(rango[0][1]);
     if(String(rango[0][i])=="falta"){
        Logger.log("ha entrado");
       var range = sheet.getRange(5,i+1,sheet.getLastRow(),sheet.getLastColumn());
       range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
     }//Fin Si
  
   }//Fin Para
}
