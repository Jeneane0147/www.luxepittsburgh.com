// Wait for the dom to load
$('document').ready(function(){

  // Add ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal('.show-me');

  /*
  ** Toggle's body class
  ** change the CSS accordingly: body.menu-visible for a visible menu - body.menu-hidden for a hidden menu
  */
  function toggleMenu() {

    // Change the body class
    $('body').toggleClass('menu-visible menu-hidden');

  }

  // Bind click event to the hamburger button
  $('body').on('click', '.toggle-menu', toggleMenu);

});

// Wait for images to load
$(window).on('load', function(){

  // Flexslider
  $('.flexslider').flexslider();

});
