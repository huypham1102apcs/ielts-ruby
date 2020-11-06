$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky-header');
                }
                else{
                    $('nav').removeClass('sticky-header');
                }
            },{
                offset:'500px'
            }
        )

        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });
    }
)

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) $(".ontop").fadeIn();
        else $(".ontop").fadeOut();
    });
    $(".ontop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});

