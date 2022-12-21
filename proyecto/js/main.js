$(document).ready(function(){

  /* $(function(){ */
  /*  });
  */
   /* slider */
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1236,
      responsive: true,
      pager: true,
      speed: 1500
    });

    /* La parte de los post */

    var posts = [
        {
          title: 'Prueba tiempo',
          date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
          content: 'Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"'
        },
        {title: 'Prueba de Titulo 1',
         date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
         content: "Rectetur, adipisicing elit. Amet veniam repudiandae esse vero tenetur nisi blanditiis facere nostrum voluptate ut deleniti hic, cupiditate atque veritatis, dolor sed aperiam a officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"
         },
        {title: 'Prueba de Titulo 2',
         date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
         content: "Rectetur, adipisicing elit. Amet veniam repudiandae esse vero tenetur nisi blanditiis facere nostrum voluptate ut deleniti hic, cupiditate atque veritatis, dolor sed aperiam a officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"
         },
        {title: 'Prueba de Titulo 3',
         date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
         content: "Rectetur, adipisicing elit. Amet veniam repudiandae esse vero tenetur nisi blanditiis facere nostrum voluptate ut deleniti hic, cupiditate atque veritatis, dolor sed aperiam a officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"
         },
        {title: 'Prueba de Titulo 4',
        date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
         content: "Rectetur, adipisicing elit. Amet veniam repudiandae esse vero tenetur nisi blanditiis facere nostrum voluptate ut deleniti hic, cupiditate atque veritatis, dolor sed aperiam a officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"
         },
        {title: 'Prueba de Titulo 5',
        date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
         content: "Rectetur, adipisicing elit. Amet veniam repudiandae esse vero tenetur nisi blanditiis facere nostrum voluptate ut deleniti hic, cupiditate atque veritatis, dolor sed aperiam a officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"
         },
        {title: 'Prueba de Titulo 6',
        date: 'Publicado el dia: '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
         content: "Rectetur, adipisicing elit. Amet veniam repudiandae esse vero tenetur nisi blanditiis facere nostrum voluptate ut deleniti hic, cupiditate atque veritatis, dolor sed aperiam a officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque ipsum quo dolor maiores explicabo voluptatum sint illo dolores! Corrupti hic omnis sint minima veniam, est aut asperiores error tempora"
         },
        
    ];

    posts.forEach(( item, index) => {
      var post = `
      <article class="post">
      <h2>${item.title}</h2>
      <a href="#" class="button-more">Leer más</a>
      <span class="date">${item.date}</span>
      <p>
        ${item.content}
      </p>
    
    </article>
      `;
      
      $('#posts').append(post);
    });
    // console.log(posts);

    //selectores de temas
    var theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css');
        localStorage.setItem('tema', 'css/green.css');
    });
    
    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css');
        localStorage.setItem('tema', 'css/red.css');
    });
    
    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css');
        localStorage.setItem('tema', 'css/blue.css');
    });

    //comprobamos si existe tema en el storage
    if(localStorage.getItem('tema')){
      var storage = localStorage.getItem('tema');
      theme.attr('href', storage);
    }else{
      theme.attr('href', 'css/green.css');
    }

    //scroll arriba de la web
    $('.subir').click(function(e){
      e.preventDefault();
       console.log('click');
      $('html, body').animate({
        scrollTop: 0
      }, 500);
       return false;
    });

    //login falso

    $('#login form').submit(function(){
       var name = $('#form_name').val();
       var email = $('#form_email').val();
       var pass = $('#form_pass').val();

       localStorage.setItem('name', name);
       localStorage.setItem('email', email);
      //  localStorage.setItem('pass', pass);
    });

    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    // var pass = localStorage.getItem('pass');
    if( name != null && name != 'undefined' && email != null && email != 'undefined'){
      var par = $('#about p');
      par.html('<br/><strong>Bienvenido, '+name+ ' y tu correo es: '+ email+'</strong>');
      par.append("<a href='#' id='logout'>Cerrar sesión</a>");

      $('#login').hide();

      $('#logout').click(function(){
        localStorage.clear();
        location.reload();
      });

    }

});