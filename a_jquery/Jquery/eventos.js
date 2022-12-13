'use strict'

$(document).ready(function(){
 // alert('Eventos en Función');

  //eventos mouse hover y mouseout
   var caja = $('#caja');
  /*
  caja.mouseover(function(){
    $(this).css('background', 'red');
  });

  caja.mouseout(function(){
    $(this).css('background', 'green');
  });
 */
  //hover

  function cambiaR(){
    $(this).css('background', 'red');
  }

  function cambiaG(){
    $(this).css('background', 'green');
  }

  caja.hover(cambiaR, cambiaG);

  //evento click, doble click
  caja.click(function(){
    $(this).css('background', 'blue')
           .css('color', 'white');
  });

  caja.dblclick(function(){
    $(this).css('background','pink')
           .css('color', 'black');
  });

  //focus y blur
  var form = $('#nombre');

  form.focus(function(){
    $(this).css('border', '2px solid green');
  });

  form.blur(function(){
    $(this).css('border', '1px solid #ccc');
    $('#datos').text($(this).val()).show();
  });


});