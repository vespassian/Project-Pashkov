// расположение блоков для экрана более 1600
if ($('html').width() >= 1600 && $('#theory').text() !== '') {
    var code_html = $('#code_html');
    var code_css = $('#code_css');

    if (window.location.pathname.search(/lessons\-additionally/i) == -1) {
        if (code_html.text() !== '' && code_css.text() !== '') {
            var code_browser = $('#code_browser');
            var job = $('#job');
            var pages = $('#pages');
            var center = $('#center');
            var code = $('#code');
            var setting = $('#setting');

            pages.css('display', 'none');
            center.css('display', 'none');
            setting.css('width', 'calc(100% + 10px)');

            code.css({
                width: 'calc(100% + 45px)',
                background: 'inherit'
            });

            code_html.css({
                display: 'block',
                margin: '0 0 0 0',
                width: 'calc(100% / 2)',
                zIndex: '99999999999'
            });

            code_css.css({
                float: 'left',
                display: 'block',
                margin: '0 0 0 5px',
                width: 'calc(100% / 2 - 5px - 45px)'
            });

            job.css({
                float: 'left',
                display: 'block',
                margin: '0 0 0 0',
                width: 'calc(100% / 2 + 22px)',
                height: 'calc(50% - 8px)'
            });

            code_browser.css({
                float: 'left',
                display: 'block',
                margin: '6px 0 0 calc(50% + 5px)',
                width: 'calc(100% / 2 - 5px - 45px)',
                height: 'calc(100% + 33px)'
            });
        }

        else if (code_html.text() !== '' && code_css.text() === '') {
            var code_browser = $('#code_browser');
            var job = $('#job');
            var pages = $('#pages');
            var center = $('#center');
            var right = $('#right');
            var code = $('#code');
            var setting = $('#setting');

            right.css({
                width: 'calc(100% - 768px + 35px)',
                height: right.height() + pages.height() + 5 + 'px'
            });

            pages.css('display', 'none');
            center.css('display', 'none');

            code.css({
                background: 'inherit'
            });

            code_html.css({
                display: 'block',
                margin: '0 0 0 0',
                width: 'calc(100% / 2)',
                zIndex: '99999999999'
            });

            code_browser.css({
                float: 'left',
                display: 'block',
                margin: '0 0 0 5px',
                width: 'calc(100% / 2 - 5px)',
                height: 'calc(100% + 0px)'
            });
        }
    }
}

/*if ($('html').width() >= 1600) {
    var code_html = $('#code_html');
    var code_css = $('#code_css');
    if (window.location.pathname.search(/lessons\-additionally/i) == -1) {
        if (code_html.text() !== '' && code_css.text() !== '') {
            var code_browser = $('#code_browser');
            var job = $('#job');
            var pages = $('#pages');
            var center = $('#center');
            var code = $('#code');
            var setting = $('#setting');

            pages.css('display', 'none');
            center.css('display', 'none');

            code.css({
                width: 'calc(100% + 45px)',
                height: 'calc(50%)',
                background: 'inherit'
            });

            code_html.css({
                display: 'block',
                margin: '0 0 0 0',
                width: 'calc(100% / 2)',
                zIndex: '99999999999'
            });

            code_css.css({
                float: 'left',
                display: 'block',
                margin: '0 0 0 5px',
                width: 'calc(100% / 2 - 5px - 45px)'
            });

            job.css({
                float: 'left',
                display: 'block',
                margin: '0 0 8px 0'
            });

            code_browser.css({
                float: 'left',
                display: 'block',
                margin: '6px 0 0 0',
                width: 'calc(100% - 45px)',
                height: 'calc(100% - 44px)'
            });

            setting.css({
                float: 'left',
                margin: (code_browser.height() + 11) + 'px 0 0 -5px',
                width: 'calc(100% + 10px)'
            });
        }
    }
}*/

// #center
if ($('html').width() > 1160) {
    if (window.location.pathname.search(/lessons\-additionally/i) == -1) {
        if (window.location.pathname.search(/lessons\-javascript/i) == -1) {
            $('#area #right').css('width', ($('#area #right').width() + 45) + 'px');
        }
    }
}

if ($('html').width() <= 1160 && $('html').width() > 1024) {
    $('#area #center').css('display', 'block');

    if (window.location.pathname.search(/lessons\-additionally/i) != -1) {
        $('#area #right').css('width', ($('#area #right').width() - 45) + 'px');
    }

    if (window.location.pathname.search(/lessons\-javascript/i) != -1) {
        $('#area #right').css('width', ($('#area #right').width() - 45) + 'px');
    }
}