$(document).ready(function(){
 //alert('Ajax');

 //load
/*  $('#datos').load('https://reqres.in/'); */

 //get
  $.get('https://reqres.in/api/users', {page: 2}, function(response){
      //console.log(response);
      response.data.forEach((elemento, index) => {
        $('#datos').append('<p>'+elemento.first_name+' - '+elemento.last_name+'</p>')
      });
  });
 //post
   

  $('#form').submit(function(e){

    e.preventDefault();

    var usuario = {
        name: $('input[name=name]').val(),
        email: $('input[name=email]').val()
     }

     /*  console.log(usuario); */

   /*  $.post($(this).attr('action'), usuario, function(response){
      console.log(response);
    }).done(function(){
      alert('Usuario Creado');
    }); */
    
    /*  dataType: 'json', 
     contentType: 'aplication/json' */

    $.ajax({
         type: 'POST',
         url: $(this).attr('action'),
         data: usuario,
         beforeSend: function(){
          console.log('Enviando Usuario...');
         },
         success: function(response){
          console.log(response)
         },
         error: function(){
          console.log('A ocurrido un error');
         },
         timeout: 1000

    });
      return false;
  });
});