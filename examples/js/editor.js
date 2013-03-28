(function() {

    function load()
    {
        var editor = new Textor.TextEditor(document.getElementById("editor"));

        if (typeof Textor.JavaScriptLanguage === 'function') {
            editor.language = new Textor.JavaScriptLanguage();
        } else if (typeof Textor.CssLanguage === 'function') {
            editor.language = new Textor.CssLanguage();
        } else if (typeof Textor.HtmlLanguage === 'function') {
            editor.language = new Textor.HtmlLanguage();
        }

        editor.theme = { 
            "fontFamily": "Menlo, Lucida Console, Courier New", 
            "fontSize": "13", 
            "backgroundColor": "#22252A",
            "backgroundBlurColor": "#000000",
            "selectionColor": "#3C424C", 
            "selectionBlurColor": "#33373F", 
            "cursorColor": "#FFFFFF", 
            "cursorBackgroundColor": "#33373F",
            "textStyle": "#FFFFFF", 
            "commentStyle": "#AAAAAA italic",
            "literalStyle": "#997777",
            "keywordStyle": "#82A0C0",
            "punctuationStyle": "#888888",
            "declarationStyle": "#FFFFFF italic",
            "errorStyle": "AA0000 bold"
        };

        editor.focus();
        
        var contents = document.getElementById('contents').innerHTML;
        editor.text = contents;
    }

    load();
})();

