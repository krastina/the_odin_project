slide = 1;
sliderInt = 1;
sliderNext = 2;
count = $('#slider > img').length;

$(document).ready(function(){
  $('#slider img#1').fadeIn(300);
  //startSlider();
  startSlider(slide);
  $('.left').click(function(){
    prev();
  })
  $('.right').click(function(){
    next();
  })
});


function startSlider(){
  loop = setInterval(function(){
    $('#slider > img').fadeOut(300);
    $('#slider img#' + sliderNext).fadeIn(300);
    sliderInt = sliderNext;
    sliderNext += 1;
    if(sliderNext > count){
      sliderNext=1;
      sliderInt=1;
    }
  },2000);
};

function prev() {
  newSlide = sliderInt - 1;
  showSlide(newSlide);
}

function next() {
  newSlide = sliderInt + 1;
  showSlide(newSlide);
}

function showSlide(id) {
  clearInterval(loop);
  if(id>count){
    id = 1;
  } else if (id<1){
    id = count;
  }
  $('#slider > img').fadeOut(300);
  $('#slider img#' + id).fadeIn(300);
  sliderInt = id;
  sliderNext = id + 1;
  startSlider();
}

$('#slider>img').hover(
  function(){
    clearInterval(loop);
},
  function(){
    startSlider();
  }
);
