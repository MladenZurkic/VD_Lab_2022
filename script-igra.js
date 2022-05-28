
let asocijacija;
let vreme = 10;

function inicijalizacija() {

    let random = Math.random() * 5 + 1;
    random = Math.floor(random);
    let odabranaAsocijacija = "asocijacija" + random;
    document.getElementById("printIgraci").innerHTML = 
    "Igrac1: <b>" + localStorage.getItem("igrac1") + "</b>" + 
    "<br>Igrac2: <b>" + localStorage.getItem("igrac2") + "</b>";
    asocijacija = localStorage.getItem(odabranaAsocijacija).split(", ");
    alert("Igra pocinje i traje maksimalno 4 minuta");

    document.getElementById("brojac").innerHTML = "" + vreme;
    document.getElementById("igracNaPotezu").innerHTML = "Na potezu je plavi takmičar";
    document.getElementById("igracNaPotezu").style.color = "blue";
    zapocni();
    setTimeout(zaustaviIgru, 240000);
}

let naPotezu = "blue";
let vremeIsteklo = 1;
let kraj = false;
let otvorioPolje = false;
let poeniBlue = 0;
let poeniRed = 0;
let otvorenaPolja = new Array(20).fill(0);
let brojPoena = 0;

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
        if(poeniBlue > poeniRed) {
            alert("Pobednik je PLAVI takmičar - " + localStorage.getItem("igrac1") + "! Čestitamo!");
            document.getElementById("igracNaPotezu").innerHTML = "Pobednik je plavi takmičar. Poeni: " + poeniBlue;
            document.getElementById("igracNaPotezu").style.color = "blue";
        }
        else if(poeniBlue < poeniRed) {
            alert("Pobednik je CRVENI takmičar - " + localStorage.getItem("igrac2") + "! Čestitamo!");
            document.getElementById("igracNaPotezu").innerHTML = "Pobednik je crveni takmičar. Poeni: " + poeniRed;
            document.getElementById("igracNaPotezu").style.color = "red";
        }
        else {
            alert("Rezultat je nerešen, čestitke igračima!");
            document.getElementById("igracNaPotezu").innerHTML = "Nerešeno!";
            document.getElementById("igracNaPotezu").style.color = "black";
        }
            
        document.getElementById("brojac").innerHTML = "kraj!";
    }
}


function zaustaviIgru() {
    if(!kraj) {
        if(vremeIsteklo) {
            alert("Isteklo je 4 minuta!");
        }
        kraj = true;
        zaustavi();
    }
}
    
   



$(document).ready(function() { 

    $(".buttonkolona").click(function() {
        if(otvorenaPolja[$(this).attr("id")]) {
            alert("Polje je vec otvoreno!");
        }
        else if(!otvorioPolje) {
            $(this).css("background-color", "rgb(196, 185, 185)");
            $(this).text(asocijacija[$(this).attr("id")]);
            otvorenaPolja[$(this).attr("id")] = 1;
            otvorioPolje = true;
        }
        else {
            alert("Vec ste otvorili polje!");
        }
    });

    $(".inputPolje").change(function() {
        proveraUnosa($(this).attr("id"),$(this).val());
    });

    $("#daljeButton").click(function() {
        if(naPotezu == "blue") {
            naPotezu = "red";
            if(!kraj) {
                document.getElementById("igracNaPotezu").innerHTML = "Na potezu je crveni takmičar";
                document.getElementById("igracNaPotezu").style.color = "red";
            }

        }
        else {
            naPotezu = "blue";
            if(!kraj) {
                document.getElementById("igracNaPotezu").innerHTML = "Na potezu je plavi takmičar";
                document.getElementById("igracNaPotezu").style.color = "blue";
            }
        }
        otvorioPolje = 0;
        zaustavi();
    });

    function proveraUnosa(id, text) {
        if(asocijacija[id] == text && !otvorenaPolja[id] && otvorioPolje) {
            if(id != 0) {
                farbanjePolja(id);
                racunanjePoena(id);
                otvaranjePolja(id);
            }
            else {
                farbanjePolja(0);
                racunanjePoena(0);
                otvaranjePolja(0);
                kraj = true;
                zaustavi();
            }
        }
        else if(otvorenaPolja[id]) {
            alert("Polje je vec pogodjeno!");
            document.getElementById(id).value = asocijacija[id];
        }
        else if(!otvorioPolje) {
            alert("Morate prvo da otvorite polje!");
            document.getElementById(id).value = "";
        }
        else {
            alert("Netacno!");
            document.getElementById(id).value = "";
            document.getElementById("daljeButton").click();
        }
    }

    function farbanjePolja(id) {
        if(id != 0) {
            $("#" + (id - 1)).css("background-color", naPotezu).css("color", "white");
            $("#" + (id - 2)).css("background-color", naPotezu).css("color", "white");
            $("#" + (id - 3)).css("background-color", naPotezu).css("color", "white");
            $("#" + (id - 4)).css("background-color", naPotezu).css("color", "white");
            $("#" + (id)).css("background-color", naPotezu).css("color", "white");
        }
        else {
            $("#" + (id)).css("background-color", naPotezu).css("color", "white");
            if(!otvorenaPolja[5])
                farbanjePolja(5);
            if(!otvorenaPolja[10])
                farbanjePolja(10);
            if(!otvorenaPolja[15])
                farbanjePolja(15);
            if(!otvorenaPolja[20])
                farbanjePolja(20);
        }
    }

    function racunanjePoena(id) {
        if(id != 0) {
            brojPoena = 5;
            if(!otvorenaPolja[id - 1])
                brojPoena++;
            if(!otvorenaPolja[id - 2])
                brojPoena++;
            if(!otvorenaPolja[id - 3])
                brojPoena++;
            if(!otvorenaPolja[id - 4])
                brojPoena++;
            if(naPotezu == "blue") {
                poeniBlue += brojPoena;
                document.getElementById("poeniBlue").value = poeniBlue;
                brojPoena = 0;
            }
            else {
                poeniRed += brojPoena;
                document.getElementById("poeniRed").value = poeniRed;
                brojPoena = 0;
            }
        }
        else {
            if(!otvorenaPolja[5]) {
                racunanjePoena(5);
                if(naPotezu == "blue")
                    poeniBlue -= 5;
                else
                    poeniRed -= 5;
            }
            if(!otvorenaPolja[10]) {
                racunanjePoena(10);
                if(naPotezu == "blue")
                    poeniBlue -= 5;
                else
                    poeniRed -= 5;
            }
            if(!otvorenaPolja[15]) {
                racunanjePoena(15);
                if(naPotezu == "blue")
                    poeniBlue -= 5;
                else
                    poeniRed -= 5;
            }
            if(!otvorenaPolja[20]) {
                racunanjePoena(20);
                if(naPotezu == "blue")
                    poeniBlue -= 5;
                else
                    poeniRed -= 5;
            }
            if(naPotezu == "blue")
            poeniBlue += 10;
        else
            poeniRed += 10;
            document.getElementById("poeniBlue").value = poeniBlue;
            document.getElementById("poeniRed").value = poeniRed;
        }
    }

    function otvaranjePolja(id) {
        if(id != 0) {
            otvorenaPolja[id] = 1;
                $("#" + (id - 1)).text(asocijacija[id - 1]);
                otvorenaPolja[id - 1] = 1;
                $("#" + (id - 2)).text(asocijacija[id - 2]);
                otvorenaPolja[id - 2] = 1;
                $("#" + (id - 3)).text(asocijacija[id - 3]);
                otvorenaPolja[id - 3] = 1;
                $("#" + (id - 4)).text(asocijacija[id - 4]);
                otvorenaPolja[id - 4] = 1;
        }
        else {
            if(!otvorenaPolja[5]) {
                otvaranjePolja(5);
                document.getElementById("5").value = asocijacija[5];
                otvorenaPolja[5] = 1;
            }
            if(!otvorenaPolja[10]) {
                otvaranjePolja(10);
                document.getElementById("10").value = asocijacija[10];
                otvorenaPolja[10] = 1;
            }
            if(!otvorenaPolja[15]) {
                otvaranjePolja(15);
                document.getElementById("15").value = asocijacija[15];
                otvorenaPolja[15] = 1;
            }
            if(!otvorenaPolja[20]) {
                otvaranjePolja(20);
                document.getElementById("20").value = asocijacija[20];
                otvorenaPolja[20] = 1;
            }
        }
    }

});
