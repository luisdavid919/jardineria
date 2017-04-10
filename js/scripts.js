 <!-- Script to Activate the Carousel -->
    <script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
    </script>

<script>
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    //$("#navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() < 50) {
                $('#navbar').fadeIn();
            } else {
                $('#navbar').fadeOut();
            }
        });
    });

});
  }(jQuery));

    
   <script async src='https://pepper.swat.io/embed.js?eyJwb3NpdGlvbiI6InJpZ2h0IiwiY29sb3IiOiJCOEU5ODYiLCJjdXN0b21Db2xvciI6ZmFsc2UsImljb24iOiJwaG9uZSIsInByb25vdW4iOiJ1cyIsImxhbmd1YWdlIjoiZXMiLCJicmFuZGVkIjpmYWxzZSwiaW50cm9UZXh0IjpudWxsLCJjaGFubmVscyI6W1siZmFjZWJvb2siLCJqYXJkaW5lcmlhY3VhdGljYSIsInNvY2lhbCJdLFsicGhvbmUiLCIrNTIwMTc3NzI0MjY5NjgiLCJjbGFzc2ljIl1dfQ=='></script>

    $('.carousel').carousel({
        interval: 10000 //changes the speed
    })