// Wait for the dom to load
$('document').ready(function(){

  // Add ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.show-me');
  
});

// Wait for images to load
$(window).on('load', function(){

  // Flexslider
  $('.flexslider').flexslider();

});
