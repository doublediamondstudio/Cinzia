$(document).ready(function () {


    $('.scrolling-wrapper').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });



});




