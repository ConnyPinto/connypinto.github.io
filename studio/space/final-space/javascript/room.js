$(document).ready(function () {
    $('body').click(function (e) {
        console.log(e);
        if (!$(e.target).is('a')) {
            window.location.href = 'window.html';
        }
    });
});