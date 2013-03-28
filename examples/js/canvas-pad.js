(function() {
    var content = document.getElementById('content').innerHTML,
        editor = null;

    function load()
    {
        editor = new Textor.TextEditor(document.getElementById("editor"));
        editor.addEventListener("textchanged", update);
        editor.language = new Textor.JavaScriptLanguage();
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
            "errorStyle": "AA0000 bold" };
        editor.focus();
        editor.text = content;
    }

    var canvas = null;
    var context = null;

    function update()
    {
        if (context === null)
        {
            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
        }

        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);

        try
        {
            eval(editor.text);
        }
        catch (exception)
        {
            context.font = "bold 13px Menlo,Lucida Console,Courier New";
            context.fillStyle = "#a00";
            context.fillText(exception.toString(), 8, 18);
        }    

        context.restore();
    }

    load();
})();
