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

        let asocijacija1 = ["ALEKSANDRA IVOSEV, RUKA, 7.62, META, CZ 99, PISTOLJ, ZLATNA, ORDEN, GRUDI, BRONZANA, MEDALJA, BALASEVIC, PETROVARADIN, DUNAV, EXIT, NOVI SAD, FALKONSI, OLIMPIJADA, KOKA KOLA, DZORDZIJA, ATLANTA"];
        localStorage.setItem("asocijacija1", asocijacija1);
        let asocijacija2 = ["BULEVAR, OSMEH, DUNAV, IZBOR, PROSTRAN, ŠIROK, LIPE, KUĆE, GLAVNA, SLEPA, ULICA, SAGA, BOGOVI, PRVI, VEČE, SUMRAK, TABAK, ROTO, OSFET, DUBOKA, ŠTAMPA"];
        localStorage.setItem("asocijacija2", asocijacija2);
        let asocijacija3 = ["CEV, OTPAD, VODE, PACOVI, GRADSKA, KANALIZACIJA, ZENICA, ŠVEDSKA, LEGURA, GVOŽĐE, ČELIK, BOCA, BOJLER, UPALJAČ, ŠPORET, PLIN, ŠARAC, GATLING, MAKSIM, NIKOLETINA, MITRALJEZ"];
        localStorage.setItem("asocijacija3", asocijacija3);
        let asocijacija4 = ["KORAK, SVADBA, RADECKI, IGMAN, DRINA, MARŠ, GOLMAN, KARNEVAL, PRVI MAJ, DEFILE, PARADA, NEDELJA, PATULJCI, GL. GODINA, ČUDA, SEDAM, DUŽINA, RIMSKA, NAUTIČKA, ZELENA, MILJA"];
        localStorage.setItem("asocijacija4", asocijacija4);
        let asocijacija5 = ["SPORT, MALI, KOPAČKE, LIGA EVROPE, STADION, FUDBAL, TABLA, PATIKE, EVROLIGA, DVORANA, KOŠARKA, BUBREZI, ANĐEO, MANASTIR, VEŠ, BELI, KENGUR, GLAVA, PLAŽA, LAPTOP, TORBA"];
        localStorage.setItem("asocijacija5", asocijacija5);
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