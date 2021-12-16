$(() => {
    $(window).on("scroll", () => {
        if ($(window).scrollTop() > 0) {
            $(".nav-fondo").addClass("change")
        } else {
            $(".nav-fondo").removeClass("change")
        }
    })
})





