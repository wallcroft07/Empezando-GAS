function cogerDatosFilas(){
  //Esta función da formato  al requerido para crear  un evento
  function darFormateoDate(fecha){
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = new Date(fecha);
    
    var mesWord=months[date.getMonth()];
    
    return mesWord+" "+date.getDate()+", "+date.getFullYear();
    
  }//Fin Función
  
  //Esta función añade un evento al calendario
  function añadirEvento(fecha,horaStart,horaEnd,materia,aula,sitio){
    var event = CalendarApp.getDefaultCalendar().createEvent(materia,
                                                             new Date(fecha+' '+horaStart+' UTC+2'),
                                                             new Date(fecha+' '+horaEnd+' UTC+2'),
                                                             {location: sitio+' ,Aula: '+aula});
    
  }//Fin Función
  
  
  //Accedemos al sheet
   var sheet = SpreadsheetApp.getActiveSheet();
   var rango = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
   //A nivel de fila:
   for(var i=0;i<rango.length;i++){
     //Fecha
     var fechaFila =rango[i][0];
     //Hora split "-"
     var hora= rango[i][1].split("-");
     //Hora principio
     var horaStart=hora[0];
     //Hora final 
     var horaEnd=hora[1];
     //Materia
     var materia =rango[i][2];
     //Aula
     var aula =rango[i][3];
     //Sitio
     var sitio= rango[i][4];
     //Dar formato para la funcion de crearEventos 
     var formatDate=darFormateoDate(fechaFila);
     //Añadimos  con los datos recogidos en una fila al evento
     añadirEvento(formatDate,horaStart,horaEnd,materia,aula,sitio);
   }//Fin Para 
}//Fin Función
