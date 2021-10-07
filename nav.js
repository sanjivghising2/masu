$(document).ready(function () {

    initNavbar();

});

function initNavbar(){
    // 0 = hide, 1 = visible
  var menuState = 0;
    /* Add a Click event listener to btn-select */
    $(".nav-hamburger").on("click",function() {
        $(this).toggleClass('change');
      if(menuState === 0) {
        $(".nav-menu-options").slideDown("slow");
        menuState = 1;
      } else {
        $(".nav-menu-options").slideUp("slow");
        menuState = 0;
      }
    });
}