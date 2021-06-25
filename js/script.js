$(document).ready(function(){

  $('.choix li').click(function(){
    if($(this).hasClass('platreserve')){
      $(this).removeClass('platreserve');
      $(this).addClass('choixBorder');
      $(this).siblings().addClass('choixBorder');
    } else {
      $(this).addClass('platreserve');
      $(this).removeClass('choixBorder');
      $(this).siblings().removeClass('choixBorder');
      $(this).siblings().removeClass('platreserve');
    }
  });//end of .choix li click

  $('#reserverBtn').click(function(){
    $('.choixIntitulé, .voteOption, .choix, #reserverBtn').hide();
    $('#recu').show();
    $('#aVote').show();
  });

  $('.entreeOption li').click(function(){
    var liHaveClass = $('.voteOption .entreereserve');
    //console.log(liHaveClass.length);
    if(liHaveClass.length < 2){
      $(this).addClass('entreereserve');
      $(this).removeClass('choixBorder');
    } else if(liHaveClass.length = 2){
      $(this).addClass('entreereserve');
      $(this).siblings().removeClass('choixBorder');
      $(this).removeClass('choixBorder');
    }
  });//end of entree li click

  $('.platViandeOption li').click(function(){
    var liHaveClassV = $('.voteOption .platViandereserve');
    //console.log(liHaveClass.length);
    if(liHaveClassV.length < 1){
      $(this).addClass('platViandereserve');
      $(this).removeClass('choixBorder');
    } else if(liHaveClassV.length = 1){
      $(this).addClass('platViandereserve');
      $(this).siblings().removeClass('choixBorder');
      $(this).removeClass('choixBorder');
    }
  });//end of viande li click

  $('.vegeOption li').click(function(){
    var liHaveClassVege = $('.voteOption .platvegereserve');
    //console.log(liHaveClass.length);
    if(liHaveClassVege){
      $(this).addClass('platvegereserve');
      $(this).removeClass('choixBorder');
      $(this).siblings().removeClass('choixBorder');
    }
  });//end of végé li click

  $('.dessertOption li').click(function(){
    var liHaveClassD = $('.voteOption .dessertreserve');
    //console.log(liHaveClass.length);
    if(liHaveClassD.length < 2){
      $(this).addClass('dessertreserve');
      $(this).removeClass('choixBorder');
    } else if(liHaveClassD.length = 2){
      $(this).addClass('dessertreserve');
      $(this).siblings().removeClass('choixBorder');
      $(this).removeClass('choixBorder');
    }
  });//end of dessert li click

  $('.champsDate select').click(function(){
    $('.champsDate option').css('color', 'black');
  });

});//end of document.ready
