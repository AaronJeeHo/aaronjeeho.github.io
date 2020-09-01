/**
 * Slideshow JS
 */

var curr_index = 1;
showDivs(curr_index);

function plusDivs(n) {
  showDivs(curr_index += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide_img");
  if (n > x.length) {
      curr_index = 1
    }

  if (n < 1) {
      curr_index = x.length
    }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  x[curr_index - 1].style.display = "block";  
}