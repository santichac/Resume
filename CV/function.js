(function(){
    $(".programacion ul li")
        .find(".bar")
        .each(function(i){
            $(this)
            .find(".barra")
            .delay(i*150)
            .animate({
                width:
                $(this)
                    .parents()
                    .attr("data-percent") + "%"
                },
                1000,
                "linear",
                function(){
                    return $(this).css({
                        "transition-duration": ".5s"
                    });
                }
            );
        });
    
}.call(this));