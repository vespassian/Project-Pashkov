/* задержка проверки */
/* доделать куки */
/* изменить везде код и на англ версии */
function delay_check_job() {
    var pause = '';
    var cookie_check = parseInt($.cookie(Config.delay_new_user.cookie), 10);

    // проверяем, новый юзер или нет
    if (cookie_check > Config.delay_new_user.check) {
        pause = ((typeof(count_script) === 'undefined')) ? Config.time_job_what : Config.time_job;
    } else {
        pause = Config.delay_new_user.time;

        // записываем в куки
        if (!$.cookie(Config.delay_new_user.cookie)) {
            $.cookie(Config.delay_new_user.cookie, "1", {expires: 300, path: '/'});
        } else {
            var promotion_counter = parseInt($.cookie(Config.delay_new_user.cookie), 10);
            promotion_counter += 1;
            $.cookie(Config.delay_new_user.cookie, String(promotion_counter), {expires: 300, path: '/'});
        }
    }

    if (cookie_check > Config.delay_new_user.check) {
        if ((typeof(count_script) === 'undefined')) {
            if (!$('*').is('#no_income')) {
                $('#go_test .ad').text(Lang.course.check_adb);
                $("#go_test .text").css('margin', '-5px 0 2px 0');
            }
        }
    }

    var pause_function = setInterval(function () {
        if (pause >= 0) {
            $("#go_test .text").text(Lang.course.until + ' ' + pause + ' ' + Lang.course.s);
            pause--;
        }

        if (pause < 0) {
            $("#go_test .text").text(Lang.course.check);
            check_job = true;
            $("#go_test .text").css('margin', '0 0 0 0');
            $('#go_test .ad').text('');
            clearTimeout(pause_function);
        }
    }, 1000);
}