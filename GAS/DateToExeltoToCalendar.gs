


function cogerDatosFilas(){
  //Esta funcion es para crear un calendario
  function crearCalendario(nombre){
    // Creates a new calendar named "Travel Plans" with a summary and color.
    var calendar = CalendarApp.createCalendar("Exámenes", {
      summary: 'un calendario para planificar los exámenes.',
      color: CalendarApp.Color.BLUE
      
      
    });
    return calendar;
  }
  
  //Esta funcion es para enviar un correo por cada evento
  function enviarEmail(body,titulo){
  
    
    
    // Enviar correo a direccion actual.
    var toAddress = Session.getActiveUser().getEmail();
    
    MailApp.sendEmail(toAddress,
                      titulo,
                      body);
    
}//Fin Función
  
  //Esta función da formato  al requerido para crear  un evento
  function darFormateoDate(fecha){
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = new Date(fecha);
    
    var mesWord=months[date.getMonth()];
    
    return mesWord+" "+date.getDate()+", "+date.getFullYear();
    
  }//Fin Función
  
  //Esta función añade un evento al calendario
  function añadirEvento(calendar,fecha,horaStart,horaEnd,materia,aula,sitio){
    
    
    //Crear un calendario nuevo

   
    
    calendar.createEvent(materia,new Date(fecha+' '+horaStart+' UTC+2'),
                         new Date(fecha+' '+horaEnd+' UTC+2'),
                         {location: sitio+' ,Aula: '+aula});
    
    
    
  }//Fin Función
  
  //Creamos un calendario
   
  
  //Accedemos al sheet
 
  var sheet = SpreadsheetApp.getActiveSheet();
   var rango = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  //Nombre del calendario
  var calendar = crearCalendario(rango[0][4]);//Accedemos a esta celda para poder rescatar el curso para ponerlo de nombre de calendario
   
   //A nivel de fila:
   for(var i=0;i<rango.length-1;i++){
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
     añadirEvento(calendar,formatDate,horaStart,horaEnd,materia,aula,sitio);
     //Enviar correo
     enviarEmail(formatDate+" "+horaStart+" "+horaEnd+" Aula: "+aula+" "+sitio,materia);
   }//Fin Para 
}//Fin Función
