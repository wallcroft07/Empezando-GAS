/*
 t 0ª Pedir  la posición donde empieza, para obtener los rangos
 t 1º Recorrer la primera fila, y si es falta, .Rango 1,1,1,lastColum
 t 2º Eliminar esa columna, fila+1 hasta  last colum. Con nuevo rango 1+1,1,lastRow,1
*/
function recorrerFila(){
  
  // Cogemos los datos iniciales, de fila y columna ( filtro númerico )
  var fila = Browser.inputBox('Fila inicial', Browser.Buttons.OK_CANCEL);
  while(!parseInt(fila)){
    var fila = Browser.inputBox('Fila inicial', Browser.Buttons.OK_CANCEL);
  }//Fin Mientras
  var columna = Browser.inputBox('Columna inicial sin contar los nombres', Browser.Buttons.OK_CANCEL);
  while(!parseInt(fila)){
    var columna = Browser.inputBox('Columna inicial sin contar los nombres', Browser.Buttons.OK_CANCEL);
  }//Fin Mientras
  
  
  //Accedemos al sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  //Rango de cabecera
  var rango = sheet.getRange(fila, columna, 1, sheet.getLastColumn()).getValues();
  for(var i=0;i<rango[0].length;i++){
  //Comparamos si es falta 
    //comparamos  dos veces por posible tilde
    if(String(rango[0][i]).toLowerCase().search("limite")==-1&&
      String(rango[0][i]).toLowerCase().search("límite")==-1){
      //Accedemos al nuevo rango
      var rangoEliminar=sheet.getRange(5, i+2,sheet.getLastRow(),1);
      //Eliminarmos columna seleccionada
      rangoEliminar.clear();
    }//Fin Si
  }//Fin Para
}//Fin Función




