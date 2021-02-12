jQuery(document).ready(function($){

    var silder_count = 0;
    $(".scale-text-slider").find("div").eq(silder_count).addClass('active');
    var total_sliders = $(".scale-text-slider").find("div").length;
    var total_slider_order = total_sliders - 1;


    if ( silder_count < total_sliders ) {

        setInterval(function(){ 

            silder_count++;

            $(".scale-text-slider").find("div").eq(silder_count).addClass('active');
            $(".scale-text-slider").find("div").eq(silder_count-1).removeClass('active');
            if (silder_count > total_slider_order ) {
                silder_count = 0
                $(".scale-text-slider").find("div").eq(silder_count).addClass('active');
            }

        console.log(silder_count);
        console.log("total-count " + total_sliders);
        },5000);

    }
});