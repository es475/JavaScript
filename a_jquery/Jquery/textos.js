'use strict'

$(document).ready(function(){
  checkLinks();
//prepend
//before
  $('#add_bu').removeAttr('disabled')
              .click(function(){
              $('#menu').append('<li><a href="'+$("#add").val()+'"></a></li>');

              $("#add").val('')
              checkLinks();
              });
  
});

function checkLinks(){
  $('a').each(function(index){
    var that = $(this); 
    var enlace = that.attr('href');

    that.attr('target','_black');
    that.remove

    that.text(enlace);
  });
}
/* console.log($('a').length); */
/* alert('hola'); */