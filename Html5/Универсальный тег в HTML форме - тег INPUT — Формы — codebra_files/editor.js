var local_editor_size = (localStorage.getItem('edtitor_size')) ? localStorage.getItem('edtitor_size') : '16';
var local_text_wrapping = (localStorage.getItem('text_wrapping')) ? localStorage.getItem('text_wrapping') : 'true';
local_text_wrapping = (local_text_wrapping !== 'false');

var html = ace.edit("html");
html.setTheme("ace/theme/chrome");
html.getSession().setMode("ace/mode/html");
html.getSession().setUseSoftTabs(true);
html.getSession().setUseWrapMode(local_text_wrapping);
document.getElementById('html').style.fontSize = local_editor_size + 'px';
document.getElementById('html').style.fontFamily = '"PT Mono", Courier New';

var css = ace.edit("css");
css.setTheme("ace/theme/chrome");
css.getSession().setMode("ace/mode/css");
css.getSession().setUseSoftTabs(true);
css.getSession().setUseWrapMode(local_text_wrapping);
document.getElementById('css').style.fontSize = local_editor_size + 'px';
document.getElementById('css').style.fontFamily = '"PT Mono", Courier New';

var idLess = window.location.pathname.split('/');
idLess = idLess[1] + '/' + idLess[3] + '/' + idLess[4] + '/' + idLess[5];
var idLessHtml = "htmlcode"+idLess;
var idLessCss = "csscode"+idLess;
if (localStorage.getItem(idLessHtml)) { html.setValue(localStorage.getItem(idLessHtml)); }
else {
    Job.htmlCode();
    var htmlCode = html.getValue();
    htmlCode = htmlCode.replace(new RegExp("\\s+?\\n",'g'), '\n'); // убирает лишние пробелы после строки
    html.setValue(htmlCode);
}
if (localStorage.getItem(idLessCss)) { css.setValue(localStorage.getItem(idLessCss)); }
else {
    Job.cssCode();
    var cssCode = css.getValue();
    cssCode = cssCode.replace(new RegExp("\\s+?\\n",'g'), '\n'); // убирает лишние пробелы после строки
    css.setValue(cssCode);
}

localStorage.setItem('save_iframe', '0');
function browser_write() {
    var html_value = html.getValue();
    var css_value = css.getValue();

    html_value = html_value.replace(/\\/gi,"\\\\");
    html_value = html_value.replace(/\//gi,"\\/");
    html_value = html_value.replace(/'/gi,"\\\'");
    html_value = html_value.replace(/"/gi,"\\\"");
    html_value = html_value.replace(/\/\/.*/gi,"");
    css_value = css_value.replace(/\\/gi,"\\\\");
    css_value = css_value.replace(/'/gi,"\\\'");
    css_value = css_value.replace(/\/\/.*/gi,"");

    var iframe = $('#iframe');
    var htmltext = $('#htmltext');
    var csstext = $('#csstext');
    htmltext.val(html.getValue());
    csstext.val(css.getValue());
    localStorage.setItem("htmlcode"+idLess, html.getValue());
    localStorage.setItem("csscode"+idLess, css.getValue());
    if (localStorage.getItem('save_iframe') != '1') { iframe[0].src = "javascript: '" +  html_value + "<st"+"yle>" +  css_value + "</st"+"yle>" + "'"; }
    html.on('focus', function(e) { localStorage.setItem('save_iframe', '0'); });
    html.on('blur', function(e) { localStorage.setItem('save_iframe', '1'); });
    css.on('focus', function(e) { localStorage.setItem('save_iframe', '0'); });
    css.on('blur', function(e) { localStorage.setItem('save_iframe', '1'); });
}

setTimeout(function() {
    browser_write();
}, 2000);

html.on('change', function() {
    browser_write();
});

css.on('change', function() {
    browser_write();
});

function createEditor() {
    var html = ace.edit("html");
    html.setTheme("ace/theme/chrome");
    html.getSession().setMode("ace/mode/html");
    html.getSession().setUseSoftTabs(true);
    html.getSession().setUseWrapMode(local_text_wrapping);
    document.getElementById('html').style.fontSize = local_editor_size +'px';
    document.getElementById('html').style.fontFamily = 'PT Mono';

    var css = ace.edit("css");
    css.setTheme("ace/theme/chrome");
    css.getSession().setMode("ace/mode/css");
    css.getSession().setUseSoftTabs(true);
    css.getSession().setUseWrapMode(local_text_wrapping);
    document.getElementById('css').style.fontSize = local_editor_size +'px';
    document.getElementById('css').style.fontFamily = 'PT Mono';
}