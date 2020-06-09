
$(document).ready(function () {
  $('.next').click(
    function (){
        getImageNext()

    }
  );
  $('.prev').click(
    function(){
      getImagePrev()

    }
  );

});

//Creerò 2 funxioni che mi permetteranno di far funzionare il carosello, ovvero:
//--> Per andare avanti :
//    partendo dall'img 'first' rimuoverà la stessa e aggiungerà la successiva
//    fino ad arrivare all'ultima img,'last', per poi ritornare all'img 'first'
//    secondo la logica che se un img contiene la claasse 'last' renderà nuovamente visibile
//    l'img con classe 'first', per poi ricominciare da capo
//    stessa logica applicata ai pallini
//--> Per andare indietro:

function getImageNext(){
  var immagineCorrente = $('.images img.active');
  var pallinoCorrente = $ ('.nav i.active');

  immagineCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  if(immagineCorrente.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');


  }else {
    immagineCorrente.next().addClass('active');
    pallinoCorrente.next().addClass('active');
  }

}
function getImagePrev(){
  var immagineCorrente = $ ('.images img.active');
  var pallinoCorrente = $ ('.nav i.active');

  immagineCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  if (immagineCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');

  }else {
    immagineCorrente.prev('img').addClass('active');
    pallinoCorrente.prev().addClass('active');
  }
}
