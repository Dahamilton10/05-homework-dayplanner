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
    if (time == "0 hours ago"){
        console.log("working");
        itIs12AM();
    };
    if (time == "1 hours ago"){
        console.log("1 AM");
        itIs1AM();
    };
    if (time == "2 hours ago"){
        console.log("2 AM");
        itIs2AM();
    };
    if (time == "3 hours ago"){
        console.log("3 AM");
        itIs3AM();
    };
    if (time == "4 hours ago"){
        console.log("4 AM");
        itIs4AM();
    };
    if (time == "5 hours ago"){
        console.log("5 AM");
        itIs5AM();
    };
    if (time == "6 hours ago"){
        console.log("6 AM");
        itIs6AM();
    };
    if (time == "7 hours ago"){
        console.log("7 AM");
        itIs7AM();
    };
    if (time == "8 hours ago"){
        console.log("8 AM");
        itIs8AM();
    };
    if (time == "9 hours ago"){
        console.log("9 AM");
        itIs9AM();
    };
    if (time == "10 hours ago"){
        console.log("10 AM");
        itIs1AM();
    };
    if (time == "11 hours ago"){
        console.log("11 AM");
        itIs11AM();
    };
    if (time == "12 hours ago"){
        console.log("12 PM");
        itIs12PM();
    };
    if (time == "13 hours ago"){
        console.log("1 PM");
        itIs1PM();
    };
    if (time == "14 hours ago"){
        console.log("2 PM");
        itIs2PM();
    };
    if (time == "15 hours ago"){
        console.log("3 PM");
        itIs3PM();
    };
    if (time == "16 hours ago"){
        console.log("4 PM");
        itIs4PM();
    };
    if (time == "17 hours ago"){
        console.log("5 PM");
        itIs5PM();
    };
    if (time == "18 hours ago"){
        console.log("6 PM");
        itIs6PM();
    };
    if (time == "19 hours ago"){
        console.log("7 PM");
        itIs7PM();
    };
    if (time == "20 hours ago"){
        console.log("8 PM");
        itIs8PM();
    };
    if (time == "21 hours ago"){
        console.log("9 PM");
        itIs9PM();
    };
    if (time == "22 hours ago"){
        console.log("10 PM");
        itIs10PM();
    };
    if (time == "23 hours ago"){
        console.log("11 PM");
        itIs11PM();
    };
};