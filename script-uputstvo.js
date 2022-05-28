function proveraUnosaImena() {
    let igrac1 = document.getElementById("igrac1name").value;
    let igrac2 = document.getElementById("igrac2name").value;
    if(!igrac1 && !igrac2)
        alert("Igraci nisu uneli svoja imena!");
    else if(!igrac1)
        alert("Igrac 1 nije uneo svoje ime!");
    else if(!igrac2)
        alert("Igrac 2 nije uneo svoje ime!");
    else{
        localStorage.setItem("igrac1", igrac1);
        localStorage.setItem("igrac2", igrac2);
        document.getElementById("igraci").innerHTML = 
        "Plavi takmičar: <b>" + igrac1 + "</b>" + 
        "<br>Crveni takmičar: <b>" + igrac2 + "</b>" + "<br> Ucitavanje igre..";

        let asocijacija1 = ["ALEKSANDRA IVOSEV", "RUKA", "7.62", "META", "CZ 99", "PISTOLJ", "ZLATNA", "ORDEN", "GRUDI", "BRONZANA", "MEDALJA", "BALASEVIC", "PETROVARADIN", "DUNAV", "EXIT", "NOVI SAD", "FALKONSI", "OLIMPIJADA", "KOKA KOLA", "DZORDZIJA", "ATLANTA"];
        localStorage.setItem("asocijacija1", asocijacija1);
        zapocni();
    }
}

let handler;
let vreme = 3;


function zapocni() {
    handler = setInterval(stoperica, 1000);
    setTimeout(zaustavi, 3500);
}

function stoperica() {
    vreme--;
    document.getElementById("vreme").innerHTML = "Igra pocinje za.. " + vreme;
}

function zaustavi() {
    clearInterval(handler);
    window.location.href = "asocijacije-igra.html";
}