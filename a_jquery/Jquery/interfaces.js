$(document).ready(function(){
  //mover un elemento por la pagina
  var elemento = $('.elemento');
        elemento.draggable();

  //redimencionar los elementos
        elemento.resizable();

  //seleccinar elementos
  /* $('.lista-seleccionable').selectable(); */
  
  //ordenar los elementos
  $('.lista-seleccionable').sortable({
    update: function(event, ui){
      console.log('A cambiado la lista');
    }
  });

  //drop
  $('#movido').draggable();
  $('#area').droppable({
    drop: function(){
      console.log('Has soltado algo en el area');
    }

  });

  //efectos
  /**
   * fadeToggle
   * affect
   * blind
   * slide
   * puff
   * fold
   * scale
   * shake
   */
  $('#mostrar').click(function(){
    $('.cajas').toggle('shake', 4000);
  });

  //tooltip
  $(document).tooltip();

  //cuadros de dialogo
  $('#lanzar').click(function(){
    $('#popup').dialog();

  });

  //calendario Datepicker
  $('#calendario').datepicker();

  //tabs
  $('#pestanas').tabs();

});