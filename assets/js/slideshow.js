/**
 * Slideshow JS
 */

var curr_index = 0;
play_slides();

function play_slides() {
  var i;
  var slides = document.getElementsByClassName("slide_img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  curr_index++;

  if (curr_index > slides.length) {
    curr_index = 1
  }

  slides[curr_index - 1].style.display = "block";
  setTimeout(play_slides, 5000)
}