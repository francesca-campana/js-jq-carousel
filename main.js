
$(document).ready(function () {
  $('.next').click(
    function (){
      getImageNext()

    }
  );

});

//Creerò 2 funxioni che mi permetteranno di far funzionare il carosello, ovvero:
//--> una funzione che partendo dall'img 'first' rimuoverà la stessa e aggiungerà la successiva
//    fino ad arrivare all'img 'last'. Arrivati qui se contiene la classe 'last' ritornerà alla 'first'
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
