function ajaxJquery($html_code, iframe_value, $id, lang, $css_code) {
    $.ajax({
        url: "/ajax/ajax_jquery.php",
        type: "POST",
        data:{'html_code':$html_code, 'css_code':iframe_value, 'id':$id, 'lang':lang, 'html':$css_code},
        cache: false,
        success: function(html){
            $("#answer").html(html);
        }
    });
}

function ajaxJavaScript($html_code, $css_code, $id, lang) {
    $.ajax({
        url: "/ajax/ajax_javascript.php",
        type: "POST",
        data:{'html_code':$html_code, 'css_code':$css_code, 'id':$id, 'lang':lang},
        cache: false,
        success: function(html){
            $("#answer").html(html);
        }
    });
}

function ajaxPhp($html_code, $css_code, $id, lang) {
    $.ajax({
        url: "/ajax/ajax_php.php",
        type: "POST",
        data:{'html_code':$html_code, 'css_code':$css_code, 'id':$id, 'lang':lang},
        cache: false,
        success: function(html){
            $("#answer").html(html);
        }
    });
}

function ajaxHtml($html_code, $css_code, $id, lang) {
    $.ajax({
        url: "/ajax/ajax_html.php",
        type: "POST",
        data:{'html_code':$html_code, 'css_code':$css_code, 'id':$id, 'lang':lang},
        cache: false,
        success: function(html){
            $("#answer").html(html);
        }
    });
}

function ajaxCss($html_code, $css_code, $id, lang) {
    $.ajax({
        url: "/ajax/ajax_css.php",
        type: "POST",
        data:{'html_code':$html_code, 'css_code':$css_code, 'id':$id, 'lang':lang},
        cache: false,
        success: function(html){
            $("#answer").html(html);
        }
    });
}