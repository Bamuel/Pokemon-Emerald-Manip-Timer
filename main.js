function beep() {
    var x = document.getElementById("sound").value;
    var beep = new Audio("res/"+ x);
    if (d > 0) {
        beep.play();
        console.log(d);
    }
}

//Default

var beeps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //lazy to create auto sized array
//program crashes if you have 55 different splits at once

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
    document.getElementById("otherpic").style.display = "none";
    //var MudkipTime = "1000/3000/7000/8000/10000"; //quick 10sec test

    if (document.getElementById('mudkipoffsets').value.length == 0) {
        var MudkipTime = document.getElementById('mudkipoffsets').placeholder;
    }
    else {
        var MudkipTime = document.getElementById('mudkipoffsets').value;
    }
    var MudkipTimeSplits = MudkipTime.split("/");
    var interval = document.getElementById('actionInterval').value;
    var intervalamount = document.getElementById('actionCount').value;

    if (run == 1) {
        go(parseInt(MudkipTimeSplits[MudkipTimeSplits.length - 1]));
        for (var i = 0; i <= MudkipTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(MudkipTimeSplits[i]));
            if (!!intervalamount && !!interval) {
                for (j = 1; j < intervalamount; j++) {
                    beeps[i] = setTimeout(beep, parseInt(MudkipTimeSplits[i]) - (interval * j));
                }
            }
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
    document.getElementById("otherpic").style.display = "none";

    if (document.getElementById('Abraoffsets').value.length == 0) {
        var AbraTime = document.getElementById('Abraoffsets').placeholder;
    }
    else {
        var AbraTime = document.getElementById('Abraoffsets').value;
    }
    var AbraTimeSplits = AbraTime.split("/");
    var interval = document.getElementById('actionInterval').value;
    var intervalamount = document.getElementById('actionCount').value;

    if (run == 1) {
        go(parseInt(AbraTimeSplits[AbraTimeSplits.length - 1]));
        for (var i = 0; i <= AbraTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(AbraTimeSplits[i]));
            if (!!intervalamount && !!interval) {
                for (j = 1; j < intervalamount; j++) {
                    beeps[i] = setTimeout(beep, parseInt(AbraTimeSplits[i]) - (interval * j));
                }
            }
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
    document.getElementById("otherpic").style.display = "none";

    if (document.getElementById('taillowOffsets').value.length == 0) {
        var TaillowTime = document.getElementById('taillowOffsets').placeholder;
    }
    else {
        var TaillowTime = document.getElementById('taillowOffsets').value;
    }
    var TaillowTimeSplits = TaillowTime.split("/");
    var interval = document.getElementById('actionInterval').value;
    var intervalamount = document.getElementById('actionCount').value;

    if (run == 1) {
        go(parseInt(TaillowTimeSplits[TaillowTimeSplits.length - 1]));
        for (var i = 0; i <= TaillowTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(TaillowTimeSplits[i]));
            if (!!intervalamount && !!interval) {
                for (j = 1; j < intervalamount; j++) {
                    beeps[i] = setTimeout(beep, parseInt(TaillowTimeSplits[i]) - (interval * j));
                }
            }
        }
    }
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
    document.getElementById("otherpic").style.display = "none";

    if (document.getElementById('wingullOffsets').value.length == 0) {
        var WingullTime = document.getElementById('wingullOffsets').placeholder;
    }
    else {
        var WingullTime = document.getElementById('wingullOffsets').value;
    }
    var WingullTimeSplits = WingullTime.split("/");
    var interval = document.getElementById('actionInterval').value;
    var intervalamount = document.getElementById('actionCount').value;

    if (run == 1) {
        go(parseInt(WingullTimeSplits[WingullTimeSplits.length - 1]));
        for (var i = 0; i <= WingullTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(WingullTimeSplits[i]));
            if (!!intervalamount && !!interval) {
                for (j = 1; j < intervalamount; j++) {
                    beeps[i] = setTimeout(beep, parseInt(WingullTimeSplits[i]) - (interval * j));
                }
            }
        }
    }
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
    document.getElementById("otherpic").style.display = "none";

    if (document.getElementById('rayquazaOffsets').value.length == 0) {
        var RayquazaTime = document.getElementById('rayquazaOffsets').placeholder;
    }
    else {
        var RayquazaTime = document.getElementById('rayquazaOffsets').value;
    }
    var RayquazaTimeSplits = RayquazaTime.split("/");
    var interval = document.getElementById('actionInterval').value;
    var intervalamount = document.getElementById('actionCount').value;

    if (run == 1) {
        go(parseInt(RayquazaTimeSplits[RayquazaTimeSplits.length - 1]));
        for (var i = 0; i <= RayquazaTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(RayquazaTimeSplits[i]));
            if (!!intervalamount && !!interval) {
                for (j = 1; j < intervalamount; j++) {
                    beeps[i] = setTimeout(beep, parseInt(RayquazaTimeSplits[i]) - (interval * j));
                }
            }
        }
    }
}
function other(run){
    stop();
    document.getElementById("selectPokemon").style.border = "#000000 2px solid";
    document.getElementById("content").style.border = "#000000 2px solid";
    document.getElementById("mudkippic").style.display = "none";
    document.getElementById("abrapic").style.display = "none";
    document.getElementById("rayquazapic").style.display = "none";
    document.getElementById("taillowpic").style.display = "none";
    document.getElementById("wingullpic").style.display = "none";
    document.getElementById("otherpic").style.display = "block";

    if (document.getElementById('otherOffsets').value.length == 0) {
        var OtherTime = document.getElementById('otherOffsets').placeholder;
    }
    else {
        var OtherTime = document.getElementById('otherOffsets').value;
    }
    var OtherTimeSplits = OtherTime.split("/");
    var interval = document.getElementById('actionInterval').value;
    var intervalamount = document.getElementById('actionCount').value;

    if (run == 1) {
        go(parseInt(OtherTimeSplits[OtherTimeSplits.length - 1]));
        for (var i = 0; i <= OtherTimeSplits.length - 1; i++) {
            beeps[i] = setTimeout(beep, parseInt(OtherTimeSplits[i]));
            if (!!intervalamount && !!interval) {
                for (j = 1; j < intervalamount; j++) {
                    beeps[i] = setTimeout(beep, parseInt(OtherTimeSplits[i]) - (interval * j));
                }
            }
        }
    }
}

function start() {
    if (document.querySelector('input[name="pokemon"]:checked').value == "mudkip") {
        mudkip(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "abra") {
        abra(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "taillow") {
        taillow(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "wingull") {
        wingull(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "Rayquaza") {
        rayquaza(1);
    } else if (document.querySelector('input[name="pokemon"]:checked').value == "other") {
        other(1);
    } else {
        console.log("error lol")
    }
}

var IOsettings = closed;

function settings() {
    if (IOsettings == "open") {//it closes
        IOsettings = "closed";
        document.getElementById("settingsdiv").style.display = "none";
    } else {
        IOsettings = "open";
        document.getElementById("settingsdiv").style.display = "block";
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
    d = c;//the logs

    //console.log(c);
    //console.log(document.getElementById('timer').innerHTML);
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