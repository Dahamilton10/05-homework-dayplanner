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

$(".saveBtn-1").on("click", function (event) {
    event.preventDefault();
    text1 = hour1Element.val();
    localStorage.setItem("text1", text1);
});

$(".saveBtn-2").on("click", function (event) {
    event.preventDefault();
    text2 = hour2Element.val();
    localStorage.setItem("text2", text2);
});

$(".saveBtn-3").on("click", function (event) {
    event.preventDefault();
    text3 = hour3Element.val();
    localStorage.setItem("text3", text3);
});

$(".saveBtn-4").on("click", function (event) {
    event.preventDefault();
    text4 = hour4Element.val();
    localStorage.setItem("text4", text4);
});

$(".saveBtn-5").on("click", function (event) {
    event.preventDefault();
    text5 = hour5Element.val();
    localStorage.setItem("text5", text5);
});

$(".saveBtn-6").on("click", function (event) {
    event.preventDefault();
    text6 = hour6Element.val();
    localStorage.setItem("text6", text6);
});

$(".saveBtn-7").on("click", function (event) {
    event.preventDefault();
    text7 = hour7Element.val();
    localStorage.setItem("text7", text7);
});

$(".saveBtn-8").on("click", function (event) {
    event.preventDefault();
    text8 = hour8Element.val();
    localStorage.setItem("text8", text8);
});

function pullSavedText() {
    if (localStorage.text0) {
        text0 = localStorage.getItem("text0");
        $(".hour-0").val(text0);
    };

    if (localStorage.text1) {
        text1 = localStorage.getItem("text1");
        $(".hour-1").val(text1);
    };

    if (localStorage.text2) {
        text2 = localStorage.getItem("text2");
        $(".hour-2").val(text2);
    };

    if (localStorage.text3) {
        text3 = localStorage.getItem("text3");
        $(".hour-3").val(text3);
    };

    if (localStorage.text4) {
        text4 = localStorage.getItem("text4");
        $(".hour-4").val(text4);
    };

    if (localStorage.text5) {
        text5 = localStorage.getItem("text5");
        $(".hour-5").val(text5);
    };

    if (localStorage.text6) {
        text6 = localStorage.getItem("text6");
        $(".hour-6").val(text6);
    };

    if (localStorage.text7) {
        text7 = localStorage.getItem("text7");
        $(".hour-7").val(text7);
    };

    if (localStorage.text8) {
        text8 = localStorage.getItem("text8");
        $(".hour-8").val(text8);
    };
};

function changeColor() {
    time = moment().format('HH');
    console.log(time);
    if (time == "0"){
        console.log("working");
        itIs12AM();
    };
    if (time == "1"){
        console.log("1 AM");
        itIs1AM();
    };
    if (time == "2"){
        console.log("2 AM");
        itIs2AM();
    };
    if (time == "3"){
        console.log("3 AM");
        itIs3AM();
    };
    if (time == "4"){
        console.log("4 AM");
        itIs4AM();
    };
    if (time == "5"){
        console.log("5 AM");
        itIs5AM();
    };
    if (time == "6"){
        console.log("6 AM");
        itIs6AM();
    };
    if (time == "7"){
        console.log("7 AM");
        itIs7AM();
    };
    if (time == "8"){
        console.log("8 AM");
        itIs8AM();
    };
    if (time == "9"){
        console.log("9 AM");
        itIs9AM();
    };
    if (time == "10"){
        console.log("10 AM");
        itIs1AM();
    };
    if (time == "11"){
        console.log("11 AM");
        itIs11AM();
    };
    if (time == "12"){
        console.log("12 PM");
        itIs12PM();
    };
    if (time == "13"){
        console.log("1 PM");
        itIs1PM();
    };
    if (time == "14"){
        console.log("2 PM");
        itIs2PM();
    };
    if (time == "15"){
        console.log("3 PM");
        itIs3PM();
    };
    if (time == "16"){
        console.log("4 PM");
        itIs4PM();
    };
    if (time == "17"){
        console.log("5 PM");
        itIs5PM();
    };
    if (time == "18"){
        console.log("6 PM");
        itIs6PM();
    };
    if (time == "19"){
        console.log("7 PM");
        itIs7PM();
    };
    if (time == "20"){
        console.log("8 PM");
        itIs8PM();
    };
    if (time == "21"){
        console.log("9 PM");
        itIs9PM();
    };
    if (time == "22"){
        console.log("10 PM");
        itIs10PM();
    };
    if (time == "23"){
        console.log("11 PM");
        itIs11PM();
    };
};