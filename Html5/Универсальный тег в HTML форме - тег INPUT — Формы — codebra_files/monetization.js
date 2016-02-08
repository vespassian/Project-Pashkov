$(document).ready(function() {
    //$('#left #theory').css('height', 'calc(100% - 180px - 10px)');

    if (typeof(count_script) === 'undefined') {
        if ($(window).width() >= 1024) {
            //createManagementWhatImage('what_lesson', 'lesson', 'what_is');
            //createManagementWhatImage('what_index', 'index', 'what_index_big');
        }

        $('#what_profile').css('display', 'none');
        $('#left #what_link').css('display', 'none');
        $('#what_index_big').css('display', 'none');
        $('#title_what').css('display', 'none');
        $('#what_index_big_css').css('display', 'none');
        $('#what_suggestions').css('display', 'none');
        $('#what_sidebar_scroll').css('display', 'none');

        //$('#left #what_link_bait').css('display', 'none');
        $('#left #what_is').css('display', 'none');
        $('#left #theory').css('height', 'calc(100% - 38px)');
        $('#left #job').css('height', 'calc(100% - 41px)');

        // live-practice
        $('#code_example.live_practice').css('height', 'calc(100% - 38px)');
        $('#code_example.live_practice').css('margin-top', '0px');
        $('#code_browser.live_practice').css('height', 'calc(100% - 38px)');
        $('#code_browser.live_practice').css('margin-top', '0px');

        $('#what_index').css('display', 'none');
    }

    if ($('#no_income')) {
        $('#what_profile').css('display', 'none');
        $('#left #what_link').css('display', 'none');
        $('#what_index_big').css('display', 'none');
        $('#title_what').css('display', 'none');
        $('#what_index_big_css').css('display', 'none');
        $('#what_suggestions').css('display', 'none');
        $('#what_sidebar_scroll').css('display', 'none');

        $('#what_index').css('display', 'none');
    }
});