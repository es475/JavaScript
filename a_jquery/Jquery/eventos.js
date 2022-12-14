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
  var datos = $('#datos');

  form.focus(function(){
    $(this).css('border', '2px solid green');
  });

  form.blur(function(){
    $(this).css('border', '1px solid #ccc');
    datos.text($(this).val()).show();
  });

  //mousedown y mouseup
  datos.mousedown(function(){
    $(this).css('border-color', 'gray');
  });

  datos.mouseup(function(){
    $(this).css('border-color', 'black');
  });

  //mousemove
  /* console.log('En X: ' + event.clientX);
  console.log('En Y: '+event.clientY); */
  var sigue = $('#sigue');
  $(document).mousemove(function(){
    $('body').css('cursor', 'none');
    sigue.css('left', event.clientX)
         .css('top', event.clientY);
  });



});