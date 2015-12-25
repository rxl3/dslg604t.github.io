var EBUW;
var EBUU;
var EBUB;
var EBUR;
var EBUG;

var EBTW;
var EBTU;
var EBTB;
var EBTR;
var EBTG;

var total;

function updateTable() {
    var EBUW = +basicW.value + +fetchGW.value + +fetchWU.value + +fetchWB.value + +fetchWR.value + +shockGW.value + +shockWU.value + +shockWB.value + +shockWR.value;
	var EBUU = +basicU.value + +fetchWU.value + +fetchUB.value + +fetchUR.value + +fetchUG.value + +shockWU.value + +shockUB.value + +shockUR.value + +shockUG.value;
    var EBUB = +basicB.value + +fetchUB.value + +fetchBR.value + +fetchWB.value + +fetchBG.value + +shockUB.value + +shockBR.value + +shockWB.value + +shockBG.value;
    var EBUR = +basicR.value + +fetchBR.value + +fetchRG.value + +fetchWR.value + +fetchUR.value + +shockBR.value + +shockRG.value + +shockWR.value + +shockUR.value;
    var EBUG = +basicG.value + +fetchRG.value + +fetchGW.value + +fetchUG.value + +fetchBG.value + +shockRG.value + +shockGW.value + +shockUG.value + +shockBG.value;
	
	var total = +basicW.value + +fetchGW.value + +fetchWU.value + +fetchWB.value + +fetchWR.value + +shockGW.value + +shockWU.value + +shockWB.value + +shockWR.value +
	            +basicU.value + +fetchUB.value + +fetchUR.value + +fetchUG.value + +shockUB.value + +shockUR.value + +shockUG.value +
				+basicB.value + +fetchBR.value + +fetchBG.value + +shockBR.value + +shockBG.value +
				+basicR.value + +fetchRG.value + +shockRG.value +
				+basicG.value;
	
	document.getElementById('tableEBUW').textContent = EBUW
	document.getElementById('tableEBUU').textContent = EBUU
	document.getElementById('tableEBUB').textContent = EBUB
	document.getElementById('tableEBUR').textContent = EBUR
	document.getElementById('tableEBUG').textContent = EBUG
	
	document.getElementById('tableTotalW').innerHTML = EBUW;
	document.getElementById('tableTotalU').innerHTML = EBUU;
	document.getElementById('tableTotalB').innerHTML = EBUB;
	document.getElementById('tableTotalR').innerHTML = EBUR;
	document.getElementById('tableTotalG').innerHTML = EBUG;
	
	document.getElementById('total').innerHTML = total;
}