function beep() {
    var beep = new Audio("res/beep.wav");
    beep.play();
    console.log(d);
}

var beep1;
var beep2;
var beep3;
var beep4;
var beep5;
var beep6;

var beeps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //lazy to create auto sized array

function mudkip(run) {
    stop();
    clearTimeout(0);
    document.getElementById("selectPokemon").style.border = "#EFBD00 2px solid";
    document.getElementById("content").style.border = "#7BCEEF 2px solid";
    document.getElementById("mudkippic").style.display = "block";
    document.getElementById("abrapic").style.display = "none";
    document.getElementById("rayquazapic").style.display = "none";
    document.getElementById("taillowpic").style.display = "none";
    document.getElementById("wingullpic").style.display = "none";
    var MudkipTime = document.getElementById('mudkipoffsets').value;
    //var MudkipTime = "1000/3000/7000/8000/10000"; //quick 10sec test
    var MudkipTimeSplits = MudkipTime.split("/");

    if (run == 1) {
        go(parseInt(MudkipTimeSplits[MudkipTimeSplits.length - 1]));
        for (var i = 0; i <= MudkipTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(MudkipTimeSplits[i]));
        }
    }
}


function abra(run) {
    stop();
    document.getElementById("selectPokemon").style.border = "#FFAD42 2px solid";
    document.getElementById("content").style.border = "#FFAD42 2px solid";
    document.getElementById("mudkippic").style.display = "none";
    document.getElementById("abrapic").style.display = "block";
    document.getElementById("rayquazapic").style.display = "none";
    document.getElementById("taillowpic").style.display = "none";
    document.getElementById("wingullpic").style.display = "none";
    var AbraTime = document.getElementById('Abraoffsets').value;
    var AbraTimeSplits = AbraTime.split("/");
    if (run == 1) {
        go(parseInt(AbraTimeSplits[AbraTimeSplits.length - 1]));
        for (var i = 0; i <= AbraTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(AbraTimeSplits[i]));
        }
    }
}

function taillow(run) {
    stop();
    document.getElementById("selectPokemon").style.border = "#931F46 2px solid";
    document.getElementById("content").style.border = "#6B7D9A 2px solid";
    document.getElementById("mudkippic").style.display = "none";
    document.getElementById("abrapic").style.display = "none";
    document.getElementById("rayquazapic").style.display = "none";
    document.getElementById("taillowpic").style.display = "block";
    document.getElementById("wingullpic").style.display = "none";
}

function wingull(run) {
    stop();
    document.getElementById("selectPokemon").style.border = "#EBBE95 2px solid";
    document.getElementById("content").style.border = "#636B73 2px solid";
    document.getElementById("mudkippic").style.display = "none";
    document.getElementById("abrapic").style.display = "none";
    document.getElementById("rayquazapic").style.display = "none";
    document.getElementById("taillowpic").style.display = "none";
    document.getElementById("wingullpic").style.display = "block";
}

function rayquaza(run) {
    stop();
    document.getElementById("selectPokemon").style.border = "#F7E739 2px solid";
    document.getElementById("content").style.border = "#498969 2px solid";
    document.getElementById("mudkippic").style.display = "none";
    document.getElementById("abrapic").style.display = "none";
    document.getElementById("rayquazapic").style.display = "block";
    document.getElementById("taillowpic").style.display = "none";
    document.getElementById("wingullpic").style.display = "none";
}

function start() {
    if (document.querySelector('input[name="pokemon"]:checked').value == "mudkip") {
        mudkip(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "abra") {
        abra(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "taillow") {
        taillow(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "Rayquaza") {
        rayquaza(1);
    } else {
        console.log("error lol")
    }
}

/*
Gen 1: RBGY - 30fps
Gen 2: GSC - 30fps
Gen 3: RSE/FRLG - 60fps
Gen 4: DPPt/HGSS - 30fps
Gen 5: BW/B2W2 - 30fps (60fps in battles)
Gen 6: XY/ORAS - 30fps
Gen 7: SM (likely USUM as well) - 30fps
*/

var end, now = Date.now, raf = window.requestAnimationFrame;
var d;

function displayTime() {
    var c = end - now();

    document.getElementById('timer').innerHTML = ms2TimeString(c > 0 ? (raf(displayTime), c) : beep() & console.log("beeped"));
    d = c;
    //console.log(c);
    //console.log(document.getElementById('timer').innerHTML);

    // if (c >= 8000 && c <= 8010){ //This will cause bugs
    //     beep();
    // }
    //
}

function stop() {
    end = now();
    for (var i = 0; i < beeps.length; i++) {
        clearTimeout(beeps[i]);
    }
}

function go(duration) {
    end = now() + duration;
    raf(displayTime);
}

function ms2TimeString(a, k, s, m, h) {
    return k = a % 1e3,
        s = a / 1e3 % 60 | 0,
        m = a / 6e4 % 60 | 0,
        h = a / 36e5 % 24 | 0,
    (h ? (h < 10 ? '0' + h : h) + ':' : '') +
    (m < 10 ? 0 : '') + m + ':' +
    (s < 10 ? 0 : '') + s + '.' +
    (k < 100 ? k < 10 ? '00' : 0 : '') + k
}