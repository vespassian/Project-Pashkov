var SaveProgress = {
    join_progress: function(arr) {
        return arr.join(';');
    },

    split_progress: function(string) {
        return  string.split(';');
    },

    set_progress: function(course, lesson) {
        if (localStorage.getItem("all_progress")) {
            var html_progress_item, check_item = false;
            var html_progress = localStorage.getItem("all_progress");
            html_progress = SaveProgress.split_progress(html_progress);

            for (var i = 0; i < html_progress.length; i++) {
                html_progress_item = html_progress[i].split(':');
                if (html_progress_item[0] == course) {
                    if (html_progress_item[1] == lesson) {
                        if (html_progress_item[2] == '0') {
                            html_progress_item[2] = '1';
                            html_progress[i] = html_progress_item[0] +':'+ html_progress_item[1] +':'+ html_progress_item[2];
                        }
                        check_item = true;
                    }
                }
            }

            html_progress = SaveProgress.join_progress(html_progress);

            if (check_item === false) {
                html_progress += ';'+ course +':'+ lesson +':1';
            }

            localStorage.setItem("all_progress", html_progress);

            // закидываем в БД
            $.ajax({
                url: "/ajax/lesson/synchronization_database.php",
                type: "POST",
                data: {'progress': localStorage.getItem("all_progress"), 'key': 'to_database'},
                cache: false
            });
        }
        else {
            localStorage.setItem("all_progress", course +':'+ lesson +':1');
        }
    },

    get_progress: function() {
        var html_progress_item;
        var html_progress = localStorage.getItem("all_progress");
        html_progress = SaveProgress.split_progress(html_progress);

        for (var j = 1; j <= $('#html_progress a span').length; j++) {
            for (var i = 0; i < html_progress.length; i++) {
                html_progress_item = html_progress[i].split(':');
                if (html_progress_item[0] == $('#html_progress a:nth-of-type('+ j +') .name').data('course')) {
                    if (html_progress_item[1] == $('#html_progress a:nth-of-type('+ j +') .name').data('lesson')) {
                        $('#html_progress a:nth-of-type('+ j +') .check').attr('class', 'check true');
                        $('#html_progress a:nth-of-type('+ j +') .check').html('&#10003;');
                    }
                }
            }
        }

        //alert($('#html_progress a:nth-of-type(1) span').text());
        //alert($('#html_progress a span').length);
    }
};

/*
var array_progress = [
    'dating:1.1:1',
    'dating:1.2:0',
    'dating:1.3:1',
];

var string = SaveProgress.join_progress(array_progress);
var arr = SaveProgress.split_progress(string);
*/

//SaveProgress.set_progress('markup', '1.1');
//alert(localStorage.getItem("all_progress"));

SaveProgress.get_progress();