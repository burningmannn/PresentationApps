var slideIndex = 1;

function sliderFunc() {
    showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
}

$(document).ready(function() {
  sliderFunc();
  $('.fetch-data').click(function(e) {
      e.preventDefault(); // prevent the default link behavior

      var url = $(this).data('html'); // get the URL from the data-html attribute

      // make the AJAX request
      $.ajax({
          url: url,
          method: 'GET',
          success: function(data) {
              // display the data on the page
              $('#Box').empty();
              $('#Box').html(data);
              sliderFunc();
          },
          error: function(xhr, status, error) {
              console.error(error);
          }
      });
  });
});