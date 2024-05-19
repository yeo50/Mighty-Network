$(document).ready(function() {
    $(".fa-bars").click(function() {
         console.log("Hamburger icon clicked")
        $(this).toggleClass("fa-times")
        $(".navbar").toggleClass("nav-toggle")
    })
  $(".email-popup").click(function() {
      console.log("emailpopup is hover");
      $(this).toggleClass("email-popup_toggle::before")
  })
})
// document.addEventListener('DOMContentLoaded', (event) => {
//   const h1Element = document.getElementById('changingText');
//   const texts = ['community', 'course', 'blog','podcast', 'masterclass', 'training', 'coaching']; 

//   let currentIndex = 0;

//   function changeText() {
//     h1Element.textContent = texts[currentIndex];
//     currentIndex = (currentIndex + 1) % texts.length;
//   }


//   setInterval(changeText, 2000);
// });
 var typed = new Typed('#element', {
      strings: ['community', 'course', 'blog','podcast', 'masterclass', 'training', 'coaching'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });
let slideIndex = 1;
showSlides(slideIndex );
function plusSlide(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}
function showSlides(n) {
    let i;
    let slide =document.getElementsByClassName("slide");
    let dot = document.getElementsByClassName("dot");
    if ( n > slide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slide.length
    }
    for ( i = 0; i<slide.length ; i++) {
        slide[i].style.display = "none"
    }
    for (i =0 ; i<dot.length ; i++) {
        dot[i].className = dot[i].className.replace(" active","")
    }
    slide[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active"
}


