
let slideIndex = 0;
showSlides();


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}

  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace( " active", "");
  // }

  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}



function blueTema() {
  var element = document.body;
  element.classList.toggle("blue-mode")

  var disableBlueMode = document.body;

  disableBlueMode.classList.remove("dark-mode-github", "btr-mode");

}

function darkTema() {
  var element = document.body;
  element.classList.toggle("dark-mode-github")

  var disableBlueMode = document.body;

  disableBlueMode.classList.remove("blue-mode", "btr-mode");
  // var tagHeader = document.getElementById("header");

  // tagHeader.style.backgroundColor = "#444444";

  // var fontBody = document.getElementsByTagName(body);
  // fontBody.style.color = "#fff";
}


function btrTema(){
  var element = document.body;
  element.classList.toggle("btr-mode")

  var disableBlueMode = document.body;

  disableBlueMode.classList.remove("blue-mode", "dark-mode-github");
}


$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    })
   })


   $(function() {
    $(".button").click(function() {
      // validate and process form here
    });
  });