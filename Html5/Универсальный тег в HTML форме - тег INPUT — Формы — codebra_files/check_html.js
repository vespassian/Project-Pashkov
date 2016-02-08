//$('#job .content').scrollTop(18);

var $html_code = '', $css_code = '';
var $id_lessons = window.location.pathname.split('/'); $id_lessons = $id_lessons[3] + '/' + $id_lessons[4] + '/' + $id_lessons[5];
var check_job = true;
var check_begin = true;
var check_complite = true;
var check_load = false;
var go_test_text = $("#go_test .text").text();
$("#go_test .text").text(Lang.course.load);

// загрузка
setTimeout(function() {
    $("#go_test .text").text(go_test_text);
    check_load = true;
}, Config.time_run);

$("#go_test").on('click', function () {
    if (check_load === true) {
        if (check_job === true) {
            // записываем в переменные и отправляем
            check_job = false;
            $html_code = html.getValue();
            $css_code = css.getValue();
            ajaxHtml($html_code, $css_code, $id_lessons, language_ajax);

            // проверяем ретурн
            setTimeout(function () {
                var $array_complite = $('#answer').text().split(' ');
                var $check_number = 0, $max_check_number = $array_complite.length;

                for (var i = 0; i < $max_check_number; i++) {
                    var $number = $('#number_' + (i + 1));

                    if ($number.attr('class') == 'error' && parseInt($array_complite[i], 10) == 1) {
                        $number.attr('class', 'complite');
                    }

                    if ($number.attr('class') == 'complite' && parseInt($array_complite[i], 10) == 1) {
                        $check_number++;
                    }

                    if ($number.attr('class') == 'complite' && parseInt($array_complite[i], 10) == 0) {
                        $number.attr('class', 'error');
                    }
                }

                var $goto = $('#goto'), $goto_check = $('#goto_check'), $process = $('#process'), $percent = Math.round(($check_number / $max_check_number) * 100) + '%';
                if ($check_number === $max_check_number) {
                    $process.html('');
                    $goto.html('<a href = "' + Setting.nextLessons + '">' + Lang.course.go_next + '</a>');
                    $('#job img').css('display', 'none');

                    // сохраняем статистику
                    var url = location.pathname;
                    var course = url.split('/')[3];
                    var lesson = url.split('/')[4] + '.' + url.split('/')[5];
                    SaveProgress.set_progress(course, lesson);
                }
                else {
                    $goto.html('');
                    $process.html('<div class = "percent">' + Lang.course.complite + ' ' + $percent + '</div>');
                    $('#job img').css('display', 'block');
                }
            }, 1000);

            // не даем нажать на кнопку несколько сек.
            delay_check_job();
        }
    }
});
