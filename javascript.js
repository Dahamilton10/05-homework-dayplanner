var text0;
var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;

$(".saveBtn-0").on("click", function (event) {
    event.preventDefault();
    text0 = $(".hour-0").val();;
    localStorage.setItem("text0", text0);
});

function pullSavedText() {

};

pullSavedText()
