'use strict'

$(document).ready(() => {
  console.log('Estamos listos...');

  //selector de id
$('#rojo').css('background','red')
          .css('color', 'white');

$('#amarillo').css('background','yellow')
              .css('color', 'green');                      

$('#verde').css('background','green')
           .css('color','white');

           //selectores de clases
var mi_class = $('.zebra').css('padding','2px');
//console.log(mi_class.eq(1));
/* mi_class.css('border', '5px dashed black'); */
mi_class.eq(1).css('background', 'orange'); 

$('.borde').click(function(){
  console.log('click');
  //no se tiene que poner punto de clase
  $(this).addClass('zebra');
});

//selectores por etiqueta
$('h1').css('color', 'orange');

var parrafos = $('p').css('cursor','pointer');
parrafos.click(function(){
  var thi = $(this);
  if(thi.hasClass('grande')){

    thi.removeClass('grande');
    
  }else{
    thi.addClass('grande');
    
  }
});

//selecionar por atributo
$('[title="google"]').css('background', '#ccc')
                     .css('text-decoration','none')
                     .css('padding', '3px');
$('[title="facebook"]').css('background', 'blue')
                       .css('text-decoration','none')
                       .css('color', 'white')
                       .css('padding', '3px')
                       .css('border-radius', '5px');

//Otros

/* $('p,a').addClass('margen-superior'); */
/* buscar elementos con clase */
/* var buscar = $('#caja').find('.resaltado'); */
/* var buscar = $('#caja .resaltado'); */
/* var buscar = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="google"]'); */
var buscar = $('#elemento2').parent().find('.resaltado');

console.log(buscar);

});


