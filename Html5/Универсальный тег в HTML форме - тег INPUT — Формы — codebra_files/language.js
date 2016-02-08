var language = location.pathname.split('/');
language = (language[2] !== 'ru' && language[2] !== 'en') ? language[1] : language[2];
language_ajax = language;

if (language === 'ru') {
    var Lang = {
        index: {
            complite: 'Выполнено',
            switch_post: 'Убрать уроки, показать курсы',
            switch_post_blog: 'Убрать статьи, показать разделы'
        },
        course: {
            min: 'мин.',
            max_time: 'Максимум на чтение',
            word: 'Слов',
            complite: 'Выполнено на',
            until: 'До следующей проверки',
            s: 'сек',
            check: 'Проверить задание',
            go_next: 'Перейти на следующий урок',
            hide_job: 'Свернуть задание',
            show_job: 'Развернуть задание',
            check_adb: 'Отключите расширение блокирующее рекламу и ждите на 20 секунд меньше!',
            load: 'Загрузка...'
        },
        header: {
            like: 'Спасибо за участие',
            like_add: 'Вы поставили лайк'
        },
        live_practice: {
            nice: 'Идеально',
            good: 'Хорошо',
            bad: 'Еще далеко'
        }
    }
}

else if (language === 'en') {
    var Lang = {
        index: {
            complite: 'Made',
            switch_post: 'To remove lessons, view courses',
            switch_post_blog: 'To remove the article, to show the sections'
        },
        course: {
            min: 'minutes',
            max_time: 'The maximum reading',
            word: 'Words',
            complite: 'Made on',
            until: 'Before the next inspection',
            s: 'sec',
            check: 'Check out the job',
            go_next: 'Go to next lesson',
            hide_job: 'To minimize the task',
            show_job: 'Expand task',
            check_adb: 'Disable the extension that blocks ads and wait for 20 seconds less!',
            load: 'Load...'
        },
        header: {
            like: 'Thank you for participating',
            like_add: 'You like'
        },
        live_practice: {
            nice: 'Perfect',
            good: 'Good',
            bad: 'Far'
        }
    }
}