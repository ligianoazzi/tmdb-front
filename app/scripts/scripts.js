$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#custom-search-input').css('position','fixed');
                $('#custom-search-input').css('top','0px');
                $('#custom-search-input').css('width','57%');
                $('#back-to-top').fadeIn();
            } else {
                $('#custom-search-input').css('width','100%');              
                $('#custom-search-input').css('position','relative');              
                $('#back-to-top').fadeOut();
            }



        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});