/*if ($(window).width() > 1024) {
    var win_donate = $('#win_money_robokassa');

    // пожертвование закрыть
    $('#win_money_robokassa #button_donate_close').click(function () {
        win_donate.css('display', 'none');
    });

    var check_donation = complite_lesson_donate();
    if (check_donation > 9 && check_donation % 5 === 0) {
        if ($.cookie("boolean_complite_donat") != check_donation) {
            $('#money_robokassa').css('display', 'block');
            win_donate.css('display', 'block');

            $.ajax({
                url: "/ajax/ajax_window_donate.php",
                type: "POST",
                data:{'money_window_add_post': true},
                cache: false
            });
        }

        $.cookie("boolean_complite_donat", check_donation, {expires: Config.day_donation, path: '/'});
    }

    if (parseInt(check_donation, 10) % 5 !== 0) {
        if (!$.cookie("promotion_counter")) {
            $.cookie("promotion_counter", "1", {expires: 30, path: '/'});
        } else {
            var promotion_counter = parseInt($.cookie("promotion_counter"), 10);
            promotion_counter += 1;
            $.cookie("promotion_counter", String(promotion_counter), {expires: 30, path: '/'});
        }

        if (parseInt($.cookie("promotion_counter"), 10) % 10 === 0) {
            $('#win_promotion').css('display', 'block');

            $.ajax({
                url: "/ajax/ajax_window_promotion.php",
                type: "POST",
                data:{'promotion_window_inc': true},
                cache: false
            });
        }
    }

    var number_lesson_to_donate = complite_lesson_donate_text();
    $('#money_robokassa #number_lesson_user').text(number_lesson_to_donate);
}*/

/* вернуть кол-во уроков */
function complite_lesson_donate() {
    var html_progress = localStorage.getItem("all_progress");
    html_progress = String(html_progress.split(';').length);
    return html_progress;
}

/* вернуть кол-во уроков с текстом */
function complite_lesson_donate_text() {
    var html_progress = localStorage.getItem("all_progress");
    html_progress = String(html_progress.split(';').length);

    if (html_progress.substr(-1) == 0) {
        html_progress += ' уроков';
    } else if ((html_progress.substr(-1) == 1) && (html_progress.substr(-2) != 11)) {
        html_progress += ' урок';
    } else if (((html_progress.substr(-1) == 2) || (html_progress.substr(-1) == 3) || (html_progress.substr(-1) == 4)) && (html_progress.substr(-2) != 12) && (html_progress.substr(-2) != 13) && (html_progress.substr(-2) != 14)) {
        html_progress += ' урока';
    } else {
        html_progress += ' уроков';
    }

    return html_progress;
}

/* ajax сохранение кол-ва кликов по донату */
/*$('#money_add').click(function() {
    $.ajax({
        url: "/ajax/ajax_donate.php",
        type: "POST",
        data:{'money_add_post': true},
        cache: false
    });
});
*/
/* пожертвования */

$('#money_write').priceFormat({
    prefix: '',
    centsSeparator: '.',
    thousandsSeparator: ' ',
    suffix: ' руб.'
});

$('#money_add').click(function() {
    $.ajax({
        url: "/ajax/donate/send_donate.php",
        type: "POST",
        cache: false,
        data: {'send_donate': $('#money_write').unmask()},
        success: function (html) {
            $('#money_result').html(html);
            $('#robokassa_send').submit();
        }
    });
});

$('#win_promotion_close').click(function() {
    $('#win_promotion').css('display', 'none');
});