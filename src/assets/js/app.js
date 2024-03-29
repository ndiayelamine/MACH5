$(document).ready(function () {
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

function cambiaAlbum(el) {
  //$(".filter-button").on('click', function (event) {
  var value = $(el).attr('data-filter');

  if (value == "all") {
    //$('.filter').removeClass('hidden');
    $('.filter').show('1000');
  } else {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    $(".filter").not('.' + value).hide('3000');
    $('.filter').filter('.' + value).show('3000');

  }
  // });

  if ($(".filter-button").removeClass("active")) {
    $(el).removeClass("active");
  }
  $(el).addClass("active");
}
