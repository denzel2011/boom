var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    Textbox.innerHTML = content;
    console.log(content);
}