
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

//Creerò 2 funzioni che mi permetteranno di far funzionare il carosello,
//--> cliccando sulla freccetta dx 'next' le immagini andranno avanti assieme ai pallini blu
//--> Per andare avanti :
//    parto dall''immagineCorrente' a cui si rimuoverà la classe 'active',
//    se l'elemento è in classe 'last' verrà aggiunta la classe 'active' e quindi sarà visibile la prima immagine
//    altrimenti all'immagineCorrente sarà visibile un'immagine successiva
//    stessa logica applicata ai pallini

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
//--> cliccando sulla freccetta sx 'prev' le immagini andranno indietro assieme ai pallini blu
//--> Per andare indietro:
//    parto dall''immagineCorrente' a cui si rimuoverà la classe 'active',
//    se l'elemento è in classe 'first' verrà aggiunta la classe 'active' e quindi sarà visibile l'ultima' immagine
//    altrimenti all'immagineCorrente sarà visibile un'immagine precedente
//    stessa logica applicata ai pallini
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
