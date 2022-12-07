'use strict'

//bom browser object model
//altura de pantall
/**
 * window.innerHeight
 * window.innerWidth
 */

function getBom(){
  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location);

}

function redirect(url){
  window.location.href = url;
}

function AbriW(url){
  window.open(url, "" , 'with=300, height=300');
}
getBom();

