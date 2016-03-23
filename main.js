
// Format
// LandName = [White,Blue,Black,Red,Green]
var FStrand = {landtype: "fetch", colours: "WU", total: 0};
var PDelta = {landtype: "fetch", colours: "UB", total: 0};
var BMire = {landtype: "fetch", colours: "BR", total: 0};
var WFoothills = {landtype: "fetch", colours: "RG", total: 0};
var WHeath = {landtype: "fetch", colours: "GW", total: 0};
var MFlats = {landtype: "fetch", colours: "WB", total: 0};
var AMesa = {landtype: "fetch", colours: "WR", total: 0};
var STarn = {landtype: "fetch", colours: "UR", total: 0};
var MRainforest = {landtype: "fetch", colours: "UG", total: 0};
var VCatacombs = {landtype: "fetch", colours: "BG", total: 0};

var HFountain = {landtype: "shock", colours: "WU", total: 0};
var WGrave = {landtype: "shock", colours: "UB", total: 0};
var BCrypt = {landtype: "shock", colours: "BR", total: 0};
var SGround = {landtype: "shock", colours: "RG", total: 0};
var TGarden = {landtype: "shock", colours: "GW", total: 0};
var GShrine = {landtype: "shock", colours: "WB", total: 0};
var SFoundry = {landtype: "shock", colours: "WR", total: 0};
var SVents = {landtype: "shock", colours: "UR", total: 0};
var BPool = {landtype: "shock", colours: "UG", total: 0};
var OTomb = {landtype: "shock", colours: "BG", total: 0};

var totalFetches = [FStrand, PDelta, BMire, WFoothills, WHeath, MFlats, AMesa, STarn, MRainforest, VCatacombs];
var totalShocks = [HFountain, WGrave, BCrypt, SGround, TGarden, GShrine, SFoundry, SVents, BPool, OTomb];

var numPlains = 0, numIsland = 0, numSwamp = 0, numMountain = 0, numForest = 0;
function updateTable() {
    "use strict";
    
    var EBUW = 0, EBUU = 0, EBUB = 0, EBUR = 0, EBUG = 0, i = 0, j = 0;
    EBUW += numPlains;
    EBUU += numIsland;
    EBUB += numSwamp;
    EBUR += numMountain;
    EBUG += numForest;
    //alert("Start update.");
    for (i = 0; i < 10; i += 1) {
        if (totalFetches[i].total > 0) {
            for (j = 0; j < 10; j += 1) {
                if (totalShocks[j].total > 0) {
                    if (totalShocks[j].colours.search(totalFetches[i].colours.charAt(0)) !== -1 || totalShocks[j].colours.search(totalFetches[i].colours.charAt(1)) !== -1) {
                        if (totalShocks[j].colours.search("W") !== -1) {
                            EBUW += totalFetches[i].total;
                        }
                        if (totalShocks[j].colours.search("U") !== -1) {
                            EBUU += totalFetches[i].total;
                        }
                        if (totalShocks[j].colours.search("B") !== -1) {
                            EBUB += totalFetches[i].total;
                        }
                        if (totalShocks[j].colours.search("R") !== -1) {
                            EBUR += totalFetches[i].total;
                        }
                        if (totalShocks[j].colours.search("G") !== -1) {
                            EBUG += totalFetches[i].total;
                        }
                    }
                }
            }
            if (totalFetches[i].colours.search("W") !== -1 && numPlains > 0) {
                EBUW += totalFetches[i].total;
            }
            if (totalFetches[i].colours.search("U") !== -1 && numIsland > 0) {
                EBUU += totalFetches[i].total;
            }
            if (totalFetches[i].colours.search("B") !== -1 && numSwamp > 0) {
                EBUB += totalFetches[i].total;
            }
            if (totalFetches[i].colours.search("R") !== -1 && numMountain > 0) {
                EBUR += totalFetches[i].total;
            }
            if (totalFetches[i].colours.search("G") !== -1 && numForest > 0) {
                EBUG += totalFetches[i].total;
            }
        }
    }
    for (i = 0; i < totalShocks.length; i += 1) {
        if (totalShocks[i].total > 0) {
            if (totalShocks[i].colours.search("W") !== -1) {
                EBUW += totalShocks[i].total;
            }
            if (totalShocks[i].colours.search("U") !== -1) {
                EBUU += totalShocks[i].total;
            }
            if (totalShocks[i].colours.search("B") !== -1) {
                EBUB += totalShocks[i].total;
            }
            if (totalShocks[i].colours.search("R") !== -1) {
                EBUR += totalShocks[i].total;
            }
            if (totalShocks[i].colours.search("G") !== -1) {
                EBUG += totalShocks[i].total;
            }
        }
    }
    //alert("Finishing update.");
    document.getElementById('tableEBUW').textContent = EBUW;
	document.getElementById('tableEBUU').textContent = EBUU;
	document.getElementById('tableEBUB').textContent = EBUB;
	document.getElementById('tableEBUR').textContent = EBUR;
	document.getElementById('tableEBUG').textContent = EBUG;
	
	document.getElementById('tableTotalW').innerHTML = EBUW;
	document.getElementById('tableTotalU').innerHTML = EBUU;
	document.getElementById('tableTotalB').innerHTML = EBUB;
	document.getElementById('tableTotalR').innerHTML = EBUR;
	document.getElementById('tableTotalG').innerHTML = EBUG;
    
    //alert("Updated table.");
    
    var totalLands = numPlains + numIsland + numSwamp + numMountain + numForest;
    for (i = 0; i < totalFetches.length; i += 1) {
        totalLands += totalFetches[i].total;
    }
    for (i = 0; i < totalShocks.length; i += 1) {
        totalLands += totalShocks[i].total;
    }
    
    document.getElementById('total').innerHTML = totalLands;

}

function changePlains() {
    "use strict";
    numPlains = +basicW.value;
    updateTable();
}

function changeIsland() {
    "use strict";
    numIsland = +basicU.value;
    updateTable();
}

function changeSwamp() {
    "use strict";
    numSwamp = +basicB.value;
    updateTable();
}

function changeMountain() {
    "use strict";
    numMountain = +basicR.value;
    updateTable();
}

function changeForest() {
    "use strict";
    numForest = +basicG.value;
    updateTable();
}

function changeFStrand() {
    "use strict";
    FStrand.total = +fetchWU.value;
    updateTable();
}

function changePDelta() {
    "use strict";
    PDelta.total = +fetchUB.value;
    updateTable();
}

function changeBMire() {
    "use strict";
    BMire.total = +fetchBR.value;
    updateTable();
}

function changeWFoothills() {
    "use strict";
    WFoothills.total = +fetchRG.value;
    updateTable();
}

function changeWHeath() {
    "use strict";
    WHeath.total = +fetchGW.value;
    updateTable();
}

function changeMFlats() {
    "use strict";
    MFlats.total = +fetchWB.value;
    updateTable();
}

function changeAMesa() {
    "use strict";
    AMesa.total = +fetchWR.value;
    updateTable();
}

function changeSTarn() {
    "use strict";
    STarn.total = +fetchUR.value;
    updateTable();
}

function changeMRainforest() {
    "use strict";
    MRainforest.total = +fetchUG.value;
    updateTable();
}

function changeVCatacombs() {
    "use strict";
    VCatacombs.total = +fetchBG.value;
    updateTable();
}

function changeHFountain() {
    "use strict";
    HFountain.total = +shockWU.value;
    updateTable();
}

function changeWGrave() {
    "use strict";
    WGrave.total = +shockUB.value;
    updateTable();
}

function changeBCrypt() {
    "use strict";
    BCrypt.total = +shockBR.value;
    updateTable();
}

function changeSGround() {
    "use strict";
    SGround.total = +shockRG.value;
    updateTable();
}

function changeTGarden() {
    "use strict";
    TGarden.total = +shockGW.value;
    updateTable();
}

function changeGShrine() {
    "use strict";
    GShrine.total = +shockWB.value;
    updateTable();
}

function changeSFoundry() {
    "use strict";
    SFoundry.total = +shockWR.value;
    updateTable();
}

function changeSVents() {
    "use strict";
    SVents.total = +shockUR.value;
    updateTable();
}

function changeBPool() {
    "use strict";
    BPool.total = +shockUG.value;
    updateTable();
}

function changeOTomb() {
    "use strict";
    OTomb.total = +shockBG.value;
    updateTable();
}