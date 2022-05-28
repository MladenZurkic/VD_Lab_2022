
let asocijacija;
let vreme = 10;

function inicijalizacija() {
    document.getElementById("printIgraci").innerHTML = 
    "Igrac1: <b>" + localStorage.getItem("igrac1") + "</b>" + 
    "<br>Igrac2: <b>" + localStorage.getItem("igrac2") + "</b>";
    asocijacija = localStorage.getItem("asocijacija1").split(",");
    alert("Igra pocinje i traje maksimalno 4 minuta");

    document.getElementById("brojac").innerHTML = "" + vreme;
    zapocni();
    setTimeout(zaustaviIgru, 240000);
}

let naPotezu = "blue";
let vremeIsteklo = 1;
let kraj = 0;
let otvorioPolje = false;
let poeniBlue = 0;
let poeniRed = 0;

/*function igra() {
    
    while(!kraj) {

    }
}
*/

function zapocni() {
    handler = setInterval(stoperica, 1000);
}

function stoperica() {
    vreme--;
    document.getElementById("brojac").innerHTML = "" + vreme;
    if(!vreme) {
        document.getElementById("daljeButton").click();
    }
}

function zaustavi() {
    clearInterval(handler);
    if(!kraj) {
        vreme = 11;
        zapocni();
    }
    else {
        document.getElementById("brojac").innerHTML = "kraj!";
    }
}


function zaustaviIgru() {
    if(vremeIsteklo) {
        alert("Isteklo je 4 minuta!");
    }
    kraj = 1;
}

$(document).ready(function() { 

    $(".buttonkolona").click(function() {
        if(!otvorioPolje) {
            $(this).css("background-color", "rgb(196, 185, 185)");
            //$(this).css("color", "white");
            $(this).text(asocijacija[$(this).attr("id")]);
            otvorioPolje = true;
        }
        else {
            alert("Vec ste otvorili polje!");
        }
    });

    $(".inputPolje").change(function() {
        alert($(this).val());
    });

    $("#daljeButton").click(function() {
        if(naPotezu == "blue")
            naPotezu = "red";
        else
            naPotezu = "blue";
        otvorioPolje = 0;
        zaustavi();
    });
});


