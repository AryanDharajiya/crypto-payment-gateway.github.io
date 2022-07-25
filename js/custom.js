// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.boxShadow = "0 7px 14px 0 rgb(52 58 64 / 6%)";
  } else {
    document.querySelector(".navbar").style.boxShadow = "none";
  }
}