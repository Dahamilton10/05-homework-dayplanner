var text0;
var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;
var time;
var date;
var dateElement = $(".date-element");
var hour0Element = $(".hour-0");
var hour1Element = $(".hour-1");
var hour2Element = $(".hour-2");
var hour3Element = $(".hour-3");
var hour4Element = $(".hour-4");
var hour5Element = $(".hour-5");
var hour6Element = $(".hour-6");
var hour7Element = $(".hour-7");
var hour8Element = $(".hour-8");

$(".saveBtn-0").on("click", function (event) {
    event.preventDefault();
    text0 = hour0Element.val();
    localStorage.setItem("text0", text0);
});

function pullSavedText() {
    if (localStorage.text0) {
        text0 = localStorage.getItem("text0");
        $(".hour-0").val(text0);
    };
};

function changeColor() {
    time = moment().startOf('day').fromNow();
    console.log(time);
    if (time == "12 hours ago"){
        console.log("working");
        itIs12PM();
    };
};