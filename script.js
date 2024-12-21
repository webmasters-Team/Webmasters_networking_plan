(function($) {
    $(document).ready(function(){
      $('.item-1').on('click', function(){
        $(this).toggleClass('is--active');
        $('.line').toggleClass('is--active');
        $('.block').toggleClass('is--active');
      });
    });
  }(jQuery));