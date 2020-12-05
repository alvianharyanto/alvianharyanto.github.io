// menu-show //
$(document).ready(function () {
    $('#icon').click(function () {
        $('#menu-bar').toggleClass('change'),
            $('ul').toggleClass('show-menu'),
            $('#menu-bg').toggleClass('menu-bg-show')
    });
});