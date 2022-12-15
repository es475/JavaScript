$(document).ready(function(){
  //alert('Aqui estoy');

  var caja = $('#caja');

  $('#mostrar').hide();
  
  $('#mostrar').click(function(){
    $(this).hide();
    $('#ocultar').show();
      caja.slideDown('slow');
    
  });

  $('#ocultar').click(function(){
    $(this).hide();
    $('#mostrar').show();
      caja.slideUp('slow', function(){
        console.log('Cartel oculto');
      });
  });

  $('#todo').click(function(){
      caja.slideToggle('fast');
  });

  $('#animate').click(function(){
    caja.animate({
          marginLeft: '500px',
          fontSize: '40px',
          height: '100px'
        }, 'slow')
        .animate({
           borderRadius: '900px',
           marginTop: '300px'
        }, 'slow')
        .animate({
           borderRadius: '0px',
           marginLeft: '0px'
        }, 'slow')
        .animate({
            marginTop: '15px',
            fontSize: '19px',
            height: '50px'
        }, 'slow');
   
  })

  /**
   * fast
   * normal
   * show mostrar
   * hide esconder
   * fadeIn slow
   * fadeOunt slow
   * fadeTo slow, 1 o 0
   * toggle
   * fadeToggle
   * slideDown
   * slideUp
   */


});