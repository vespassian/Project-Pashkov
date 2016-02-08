Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function(purl, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    google: function(purl) {
        url  = 'https://plus.google.com/share?';
        url += 'url='      + encodeURIComponent(purl);
        Share.popup(url);
    },
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0');
    }
};

function check_free() {
    if ($.cookie("check_free")) {
        var cook_check = parseInt($.cookie("check_free"), 10);
        $.cookie("check_free", cook_check + Config.bounce_job, {expires: 7, path: '/'});
    }
    else {
        $.cookie("check_free", Config.bounce_job, {expires: 7, path: '/'});
    }
}

$('.vkontakte').click(function() {
    var url = location.href;
    var title = $('title').text();
    var img = 'http://codebra.ru/img/codebra.jpg';
    var desc = $('meta[name="description"]').attr('content');
    Share.vkontakte(url, title, img, desc);

    if ($(this).data('clear') === '') {
        $(this).data('clear', 'true');

        $.ajax({
            url: "/ajax/ajax_share.php",
            type: "POST",
            data:{'share_inc': true},
            cache: false
        });
    }
});

$('.facebook').click(function() {
    var url = location.href;
    var title = $('title').text();
    var img = 'http://codebra.ru/img/codebra.jpg';
    var desc = $('meta[name="description"]').attr('content');
    Share.facebook(url, title, img, desc);

    if ($(this).data('clear') === '') {
        $(this).data('clear', 'true');

        $.ajax({
            url: "/ajax/ajax_share.php",
            type: "POST",
            data:{'share_inc': true},
            cache: false
        });
    }
});

$('.twitter').click(function() {
    var url = location.href;
    var title = $('title').text();
    Share.twitter(url, title);

    if ($(this).data('clear') === '') {
        $(this).data('clear', 'true');

        $.ajax({
            url: "/ajax/ajax_share.php",
            type: "POST",
            data:{'share_inc': true},
            cache: false
        });
    }
});

$('.odnoklassniki').click(function() {
    var url = location.href;
    var desc = $('meta[name="description"]').attr('content');
    Share.odnoklassniki(url, desc);

    if ($(this).data('clear') === '') {
        $(this).data('clear', 'true');

        $.ajax({
            url: "/ajax/ajax_share.php",
            type: "POST",
            data:{'share_inc': true},
            cache: false
        });
    }
});

$('.google_plus').click(function() {
    var url = location.href;
    Share.google(url);

    if ($(this).data('clear') === '') {
        $(this).data('clear', 'true');

        $.ajax({
            url: "/ajax/ajax_share.php",
            type: "POST",
            data:{'share_inc': true},
            cache: false
        });
    }
});

// управление окном бонуса соц. сетей.
$('#course_cursor').css('display', 'none');

if ($(window).width() > 1024) {
    $('#course_cursor .close_bounce').click(function () {
        $('#course_cursor').css('display', 'none');
    });

    if (parseInt($.cookie("check_free_view"), 10) > 4) {
        $('#course_cursor').css('display', 'none');
    }
    else if (!$.cookie("check_free_view")) {
        $.cookie("check_free_view", 1, {expires: Config.day_bounce_job, path: '/'});
    }
    else if ($.cookie("check_free_view")) {
        var cook_check = parseInt($.cookie("check_free_view"), 10);
        $.cookie("check_free_view", cook_check + 1, {expires: Config.day_bounce_job, path: '/'});
    }
}