$("a").click(function (e) {
    var btnId = "section" + e.currentTarget.id;

    $('html, body').animate({
        scrollTop: $("#" + btnId).offset().top
    }, 1000);
});
