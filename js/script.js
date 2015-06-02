
function navAnim(){
    $('.button-collapse').on('click',function(){
      $('#slide-out li a').addClass('animated slideInLeft');
    });
}


  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    
    //on window resize remove
    $( window ).resize(function() {
      $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
    });

    $('.modal-trigger').leanModal();


    $('.img-card').on('click', function(){
      $(this).removeClass('card');
    });

    navAnim();
  });