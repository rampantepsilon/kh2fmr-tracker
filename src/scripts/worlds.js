//Variable to keep track of completed
var sttDone = [];
var ttDone = [];
var hbDone = [];
var dctrDone = [];
var trDone = [];
var tlodDone = [];
var bcDone = [];
var ocDone = [];
var prDone = [];
var agrDone = [];
var htDone = [];
var plDone = [];
var spDone = [];
var corDone = [];
var twtnwDone = [];
var acreDone = [];
var atlDone = [];
var dataDone = [];
var requiredDone = ["0","0","0","0"];
var formDone = ["0","0","0","0","0"];
var magicDone = ["0","0","0","0","0","0"];
var summonDone = ["0","0","0","0"];
var keybladeDone = "0";
var pageDone = "0";
var hintsFound = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
var hintsKnown = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
var notepad = "";
var disabledWorlds = [];
var formToggle = [];

//Call on load
function init(){
  hintsLoad();
  list('STT');
}

//Load Found Hints
function hintsLoad(){
  var hint = document.getElementsByClassName('hintCount2');
  var hint2 = document.getElementsByClassName('hintCount');
  for (i = 0; i < 18; i++){
    var id = 'hf' + i;
    hint[i].setAttribute('id' , id);
    var hfBox = document.getElementById(id);
    hfBox.value = hintsFound[i];
  }
  for (i = 0; i < 18; i++){
    var id2 = 'hk' + i;
    hint2[i].setAttribute('id' , id2);
    var hkBox = document.getElementById(id2);
    hkBox.value = hintsKnown[i];
  }

  document.getElementById('notepad').value = notepad;
}

function list(location){
  var checkList = document.getElementById('checks');
  if (location == 'STT'){
    checkList.innerHTML = `<h3 align='center'><u>Simulated Twilight Town</u><br>
    Locations Left: <span id='sttLeft'>24</span></h3>` + stt;
    for (var i = 0; i < sttDone.length; i++){
      document.getElementById(sttDone[i]).style.textDecoration = 'line-through';
      document.getElementById(sttDone[i]).style.backgroundColor = '#fff';
      document.getElementById(sttDone[i]).style.color = '#000'
      if (sttDone[i] == '24'){
        document.getElementById('sttKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('sttLeft').innerHTML = (24 - sttDone.length);
  }
  if (location == 'TT'){
    checkList.innerHTML = `<h3 align='center'><u>Twilight Town</u><br>
    Locations Left: <span id='ttLeft'>46</span></h3>` + tt;
    for (var i = 0; i < ttDone.length; i++){
      document.getElementById(ttDone[i]).style.textDecoration = 'line-through';
      document.getElementById(ttDone[i]).style.backgroundColor = '#fff';
      document.getElementById(ttDone[i]).style.color = '#000'
      if (ttDone[i] == '24'){
        document.getElementById('tt1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (ttDone[i] == '26'){
        document.getElementById('tt2Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (ttDone[i] == '46'){
        document.getElementById('tt3Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('ttLeft').innerHTML = (46 - ttDone.length);
  }
  if (location == 'HB'){
    checkList.innerHTML = `<h3 align='center'><u>Hollow Bastion</u><br>
    Locations Left: <span id='hbLeft'>34</span></h3>` + hb;
    for (var i = 0; i < hbDone.length; i++){
      document.getElementById(hbDone[i]).style.textDecoration = 'line-through';
      document.getElementById(hbDone[i]).style.backgroundColor = '#fff';
      document.getElementById(hbDone[i]).style.color = '#000'
      if (hbDone[i] == '10'){
        document.getElementById('hb1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (hbDone[i] == '28'){
        document.getElementById('hb2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('hbLeft').innerHTML = (34 - hbDone.length);
  }
  if (location == 'DC'){
    checkList.innerHTML = `<h3 align='center'><u>Disney Castle</u><br>
    Locations Left: <span id='dctrLeft'>10</span></h3>` + dctr;
    for (var i = 0; i < dctrDone.length; i++){
      document.getElementById(dctrDone[i]).style.textDecoration = 'line-through';
      document.getElementById(dctrDone[i]).style.backgroundColor = '#fff';
      document.getElementById(dctrDone[i]).style.color = '#000'
      if (dctrDone[i] == '10'){
        document.getElementById('dcKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('dctrLeft').innerHTML = (10 - dctrDone.length);
  }
  if (location == 'TR'){
    checkList.innerHTML = `<h3 align='center'><u>Timeless River</u><br>
    Locations Left: <span id='trLeft'>12</span></h3>` + tr;
    for (var i = 0; i < trDone.length; i++){
      document.getElementById(trDone[i]).style.textDecoration = 'line-through';
      document.getElementById(trDone[i]).style.backgroundColor = '#fff';
      document.getElementById(trDone[i]).style.color = '#000'
      if (trDone[i] == '11'){
        document.getElementById('trKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('trLeft').innerHTML = (12 - trDone.length);
  }
  if (location == 'TLOD'){
    checkList.innerHTML = `<h3 align='center'><u>The Land of Dragons</u><br>
    Locations Left: <span id='tlodLeft'>28</span></h3>` + tlod;
    for (var i = 0; i < tlodDone.length; i++){
      document.getElementById(tlodDone[i]).style.textDecoration = 'line-through';
      document.getElementById(tlodDone[i]).style.backgroundColor = '#fff';
      document.getElementById(tlodDone[i]).style.color = '#000'
      if (tlodDone[i] == '19'){
        document.getElementById('tlod1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (tlodDone[i] == '28'){
        document.getElementById('tlod2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('tlodLeft').innerHTML = (28 - tlodDone.length);
  }
  if (location == 'BC'){
    checkList.innerHTML = `<h3 align='center'><u>Beast's Castle</u><br>
    Locations Left: <span id='bcLeft'>28</span></h3>` + bc;
    for (var i = 0; i < bcDone.length; i++){
      document.getElementById(bcDone[i]).style.textDecoration = 'line-through';
      document.getElementById(bcDone[i]).style.backgroundColor = '#fff';
      document.getElementById(bcDone[i]).style.color = '#000'
      if (bcDone[i] == '25'){
        document.getElementById('bc1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (bcDone[i] == '28'){
        document.getElementById('bc2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('bcLeft').innerHTML = (28 - bcDone.length);
  }
  if (location == 'OC'){
    checkList.innerHTML = `<h3 align='center'><u>Olympus Coliseum</u><br>
    Locations Left: <span id='ocLeft'>34</span></h3>` + oc;
    for (var i = 0; i < ocDone.length; i++){
      document.getElementById(ocDone[i]).style.textDecoration = 'line-through';
      document.getElementById(ocDone[i]).style.backgroundColor = '#fff';
      document.getElementById(ocDone[i]).style.color = '#000'
      if (ocDone[i] == '27'){
        document.getElementById('oc1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (ocDone[i] == '30'){
        document.getElementById('oc2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('ocLeft').innerHTML = (34 - ocDone.length);
  }
  if (location == 'PR'){
    checkList.innerHTML = `<h3 align='center'><u>Port Royal</u><br>
    Locations Left: <span id='prLeft'>29</span></h3>` + pr;
    for (var i = 0; i < prDone.length; i++){
      document.getElementById(prDone[i]).style.textDecoration = 'line-through';
      document.getElementById(prDone[i]).style.backgroundColor = '#fff';
      document.getElementById(prDone[i]).style.color = '#000'
      if (prDone[i] == '18'){
        document.getElementById('pr1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (prDone[i] == '29'){
        document.getElementById('pr2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('prLeft').innerHTML = (29 - prDone.length);
  }
  if (location == 'AGR'){
    checkList.innerHTML = `<h3 align='center'><u>Agrabah</u><br>
    Locations Left: <span id='agrLeft'>33</span></h3>` + agrabah;
    for (var i = 0; i < agrDone.length; i++){
      document.getElementById(agrDone[i]).style.textDecoration = 'line-through';
      document.getElementById(agrDone[i]).style.backgroundColor = '#fff';
      document.getElementById(agrDone[i]).style.color = '#000'
      if (agrDone[i] == '27'){
        document.getElementById('agr1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (agrDone[i] == '30'){
        document.getElementById('agr2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('agrLeft').innerHTML = (33 - agrDone.length);
  }
  if (location == 'HT'){
    checkList.innerHTML = `<h3 align='center'><u>Halloween Town</u><br>
    Locations Left: <span id='htLeft'>21</span></h3>` + ht;
    for (var i = 0; i < htDone.length; i++){
      document.getElementById(htDone[i]).style.textDecoration = 'line-through';
      document.getElementById(htDone[i]).style.backgroundColor = '#fff';
      document.getElementById(htDone[i]).style.color = '#000'
      if (htDone[i] == '17'){
        document.getElementById('ht1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (htDone[i] == '21'){
        document.getElementById('ht2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('htLeft').innerHTML = (21 - htDone.length);
  }
  if (location == 'PL'){
    checkList.innerHTML = `<h3 align='center'><u>Pride Lands</u><br>
    Locations Left: <span id='plLeft'>29</span></h3>` + pl;
    for (var i = 0; i < plDone.length; i++){
      document.getElementById(plDone[i]).style.textDecoration = 'line-through';
      document.getElementById(plDone[i]).style.backgroundColor = '#fff';
      document.getElementById(plDone[i]).style.color = '#000'
      if (plDone[i] == '28'){
        document.getElementById('pl1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (plDone[i] == '29'){
        document.getElementById('pl2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('plLeft').innerHTML = (29 - plDone.length);
  }
  if (location == 'SP'){
    checkList.innerHTML = `<h3 align='center'><u>Space Paranoids</u><br>
    Locations Left: <span id='spLeft'>18</span></h3>` + sp;
    for (var i = 0; i < spDone.length; i++){
      document.getElementById(spDone[i]).style.textDecoration = 'line-through';
      document.getElementById(spDone[i]).style.backgroundColor = '#fff';
      document.getElementById(spDone[i]).style.color = '#000'
      if (spDone[i] == '12'){
        document.getElementById('sp1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (spDone[i] == '18'){
        document.getElementById('sp2Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('spLeft').innerHTML = (18 - spDone.length);
  }
  if (location == 'COR'){
    checkList.innerHTML = `<h3 align='center'><u>Cave of Remembrance</u><br>
    Locations Left: <span id='corLeft'>18</span></h3>` + cor;
    for (var i = 0; i < corDone.length; i++){
      document.getElementById(corDone[i]).style.textDecoration = 'line-through';
      document.getElementById(corDone[i]).style.backgroundColor = '#fff';
      document.getElementById(corDone[i]).style.color = '#000'
      if (corDone[i] == '21'){
        document.getElementById('corKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('corLeft').innerHTML = (21 - corDone.length);
  }
  if (location == 'TWTNW'){
    checkList.innerHTML = `<h3 align='center'><u>The World That Never Was</u><br>
    Locations Left: <span id='twtnwLeft'>28</span></h3>` + twtnw;
    for (var i = 0; i < twtnwDone.length; i++){
      document.getElementById(twtnwDone[i]).style.textDecoration = 'line-through';
      document.getElementById(twtnwDone[i]).style.backgroundColor = '#fff';
      document.getElementById(twtnwDone[i]).style.color = '#000'
      if (twtnwDone[i] == '28'){
        document.getElementById('twtnwKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('twtnwLeft').innerHTML = (28 - twtnwDone.length);
  }
  if (location == '100'){
    checkList.innerHTML = `<h3 align='center'><u>100 Acre Wood</u><br>
    Locations Left: <span id='acreLeft'>22</span></h3>` + acre;
    for (var i = 0; i < acreDone.length; i++){
      document.getElementById(acreDone[i]).style.textDecoration = 'line-through';
      document.getElementById(acreDone[i]).style.backgroundColor = '#fff';
      document.getElementById(acreDone[i]).style.color = '#000'
      if (acreDone[i] == '22'){
        document.getElementById('acreKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('acreLeft').innerHTML = (22 - acreDone.length);
  }
  if (location == 'ATL'){
    checkList.innerHTML = `<h3 align='center'><u>Atlantica</u><br>
    Locations Left: <span id='atlLeft'>3</span></h3>` + atlantica;
    for (var i = 0; i < atlDone.length; i++){
      document.getElementById(atlDone[i]).style.textDecoration = 'line-through';
      document.getElementById(atlDone[i]).style.backgroundColor = '#fff';
      document.getElementById(atlDone[i]).style.color = '#000'
      if (atlDone[i] == '1'){
        document.getElementById('atl1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (atlDone[i] == '2'){
        document.getElementById('atl2Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (atlDone[i] == '3'){
        document.getElementById('atl3Key').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('atlLeft').innerHTML = (3 - atlDone.length);
  }
  if (location == 'DATA'){
    checkList.innerHTML = `<h3 align='center'><u>Data Fights</u><br>
    Locations Left: <span id='dataLeft'>13</span></h3>` + dataFights;
    for (var i = 0; i < dataDone.length; i++){
      document.getElementById(dataDone[i]).style.textDecoration = 'line-through';
      document.getElementById(dataDone[i]).style.backgroundColor = '#fff';
      document.getElementById(dataDone[i]).style.color = '#000'
    }
    document.getElementById('dataLeft').innerHTML = (13 - dataDone.length);
  }
}

//Mark Pages (Had to move due to bug)
function pageMark(){
  var counter = document.getElementById('pageNum');
  var pages = document.getElementById('pages');
  var currentCount = document.getElementById('pageNum').innerHTML;

  if (currentCount < 5){
    currentCount = parseInt(currentCount) + 1;
    pageDone = currentCount;
    counter.innerHTML = currentCount;
    pages.setAttribute('src', 'img/pages_1.png')
  } else {
    pageDone = "0";
    counter.innerHTML = 0;
    pages.setAttribute('src', 'img/pages_0.png')
  }
}

//Mark Keyblades (Repurposed for Reports)
function keybladeMark(){
  var counter = document.getElementById('keyNum');
  var pages = document.getElementById('keyblade');
  var currentCount = document.getElementById('keyNum').innerHTML;

  if (currentCount < 13){
    currentCount = parseInt(currentCount) + 1;
    keybladeDone = currentCount;
    counter.innerHTML = currentCount;
    pages.style.filter = "brightness(100%)";
  } else {
    keybladeDone = "0";
    counter.innerHTML = 0;
    pages.style.filter = "brightness(40%)";
  }
}

//Save Function Start
const Store = require('..\\src\\scripts\\store.js');
var saveT = new Store(
  {
    configName: 'tracker',
    defaults:{
      sttDone: sttDone,
      ttDone: ttDone,
      hbDone: hbDone,
      dctrDone: dctrDone,
      trDone: trDone,
      tlodDone: tlodDone,
      bcDone: bcDone,
      ocDone: ocDone,
      prDone: prDone,
      agrDone: agrDone,
      htDone: htDone,
      plDone: plDone,
      spDone: spDone,
      corDone: corDone,
      twtnwDone: twtnwDone,
      acreDone: acreDone,
      atlDone: atlDone,
      requiredDone: requiredDone,
      formDone: formDone,
      magicDone: magicDone,
      summonDone: summonDone,
      keybladeDone: keybladeDone,
      pageDone: pageDone,
      hintsFound: hintsFound,
      hintsKnown: hintsKnown,
      notepad: notepad,
      disabled: disabledWorlds,
      formToggle: formToggle
    }
  }
)

function save(){
  //Set Disabled Worlds
  disabledWorlds = [];
  disabledWorlds.push(sttVC);
  disabledWorlds.push(ttVC);
  disabledWorlds.push(hbVC);
  disabledWorlds.push(dcVC);
  disabledWorlds.push(trVC);
  disabledWorlds.push(lodVC);
  disabledWorlds.push(bcVC);
  disabledWorlds.push(ocVC);
  disabledWorlds.push(prVC);
  disabledWorlds.push(agrVC);
  disabledWorlds.push(htVC);
  disabledWorlds.push(plVC);
  disabledWorlds.push(spVC);
  disabledWorlds.push(corVC);
  disabledWorlds.push(twtnwVC);
  disabledWorlds.push(acreVC);
  disabledWorlds.push(atlVC);
  disabledWorlds.push(dataVC);
  disabledWorlds.push(pCharmVC);
  disabledWorlds.push(reportVC);
  disabledWorlds.push(tpVC);

  //Set Auto Forms
  formToggle = [];
  formToggle.push(vToggle);
  formToggle.push(wToggle);
  formToggle.push(lToggle);
  formToggle.push(mToggle);
  formToggle.push(fToggle);

  saveT.set('sttDone', sttDone);
  saveT.set('ttDone', ttDone);
  saveT.set('hbDone', hbDone);
  saveT.set('dctrDone', dctrDone);
  saveT.set('trDone', trDone);
  saveT.set('tlodDone', tlodDone);
  saveT.set('bcDone', bcDone);
  saveT.set('ocDone', ocDone);
  saveT.set('prDone', prDone);
  saveT.set('agrDone', agrDone);
  saveT.set('htDone', htDone);
  saveT.set('plDone', plDone);
  saveT.set('spDone', spDone);
  saveT.set('corDone', corDone);
  saveT.set('twtnwDone', twtnwDone);
  saveT.set('acreDone', acreDone);
  saveT.set('atlDone', atlDone);
  saveT.set('dataDone', dataDone);
  saveT.set('requiredDone', requiredDone);
  saveT.set('formDone', formDone);
  saveT.set('magicDone', magicDone);
  saveT.set('summonDone', summonDone);
  saveT.set('keybladeDone', keybladeDone);
  saveT.set('pageDone', pageDone);
  saveT.set('hintsFound', hintsFound);
  saveT.set('hintsKnown', hintsKnown);
  saveT.set('notepad', notepad);
  saveT.set('disabled', disabledWorlds);
  saveT.set('formToggle', formToggle);

  document.getElementById('saveText').innerHTML = 'Progress Saved';
  setTimeout(function(){
    document.getElementById('saveText').innerHTML = '';
  }, 3000);
}

function load(){
  sttDone = saveT.get('sttDone');
  ttDone = saveT.get('ttDone');
  hbDone = saveT.get('hbDone');
  dctrDone = saveT.get('dctrDone');
  trDone = saveT.get('trDone');
  tlodDone = saveT.get('tlodDone');
  bcDone = saveT.get('bcDone');
  ocDone = saveT.get('ocDone');
  prDone = saveT.get('prDone');
  agrDone = saveT.get('agrDone');
  htDone = saveT.get('htDone');
  plDone = saveT.get('plDone');
  spDone = saveT.get('spDone');
  corDone = saveT.get('corDone');
  twtnwDone = saveT.get('twtnwDone');
  acreDone = saveT.get('acreDone');
  atlDone = saveT.get('atlDone');
  dataDone = saveT.get('dataDone');
  requiredDone = saveT.get('requiredDone');
  formDone = saveT.get('formDone');
  magicDone = saveT.get('magicDone');
  summonDone = saveT.get('summonDone');
  keybladeDone = saveT.get('keybladeDone');
  pageDone = saveT.get('pageDone');
  hintsFound = saveT.get('hintsFound');
  hintsKnown = saveT.get('hintsKnown');
  notepad = saveT.get('notepad');
  disabledWorlds = saveT.get('disabled');
  formToggle = saveT.get('formToggle');

  list('STT');
  hintsLoad();

  //Update Worlds
  if (sttDone.includes('24') || sttDone.includes(24)){
    document.getElementById('worldRoxas').style.filter = "brightness(100%)"
    document.getElementById('stt').innerHTML = 'X';
  }
  if (ttDone.includes('24') || ttDone.includes(24)){
    document.getElementById('tt').innerHTML = '1';
  }
  if (ttDone.includes('26') || ttDone.includes(26)){
    document.getElementById('tt').innerHTML = '2';
  }
  if (ttDone.includes('46') || ttDone.includes(46)){
    document.getElementById('worldTT').style.filter = 'brightness(100%)';
    document.getElementById('tt').innerHTML = 'X';
  }
  if (hbDone.includes('18') || hbDone.includes(18)){
    document.getElementById('hb').innerHTML = '1';
  }
  if (hbDone.includes('28') || hbDone.includes(28)){
    document.getElementById('worldHB').style.filter = 'brightness(100%)';
    document.getElementById('hb').innerHTML = 'X';
  }
  if (dctrDone.includes('10') || dctrDone.includes(10)){
    document.getElementById('worldDC').style.filter = 'brightness(100%)';
    document.getElementById('dc').innerHTML = 'X';
  }
  if (trDone.includes('11') || trDone.includes(11)){
    document.getElementById('worldTR').style.filter = 'brightness(100%)';
    document.getElementById('tr').innerHTML = 'X';
  }
  if (tlodDone.includes('19') || tlodDone.includes(19)){
    document.getElementById('lod').innerHTML = '1';
  }
  if (tlodDone.includes('28') || tlodDone.includes(28)){
    document.getElementById('worldTLoD').style.filter = 'brightness(100%)';
    document.getElementById('lod').innerHTML = 'X';
  }
  if (bcDone.includes('25') || bcDone.includes(25)){
    document.getElementById('bc').innerHTML = '1';
  }
  if (bcDone.includes('28') || bcDone.includes(28)){
    document.getElementById('worldBC').style.filter = 'brightness(100%)';
    document.getElementById('bc').innerHTML = 'X';
  }
  if (ocDone.includes('27') || ocDone.includes(27)){
    document.getElementById('oc').innerHTML = '1';
  }
  if (ocDone.includes('30') || ocDone.includes(30)){
    document.getElementById('worldOC').style.filter = 'brightness(100%)';
    document.getElementById('oc').innerHTML = 'X';
  }
  if (prDone.includes('18') || prDone.includes(18)){
    document.getElementById('pr').innerHTML = '1';
  }
  if (prDone.includes('29') || prDone.includes(29)){
    document.getElementById('worldPR').style.filter = 'brightness(100%)';
    document.getElementById('pr').innerHTML = 'X';
  }
  if (agrDone.includes('27') || agrDone.includes(27)){
    document.getElementById('agr').innerHTML = '1';
  }
  if (agrDone.includes('30') || agrDone.includes(30)){
    document.getElementById('worldAgrabah').style.filter = 'brightness(100%)';
    document.getElementById('agr').innerHTML = 'X';
  }
  if (htDone.includes('17') || htDone.includes(17)){
    document.getElementById('ht').innerHTML = '1';
  }
  if (htDone.includes('21') || htDone.includes(21)){
    document.getElementById('worldHT').style.filter = 'brightness(100%)';
    document.getElementById('ht').innerHTML = 'X';
  }
  if (plDone.includes('28') || plDone.includes(28)){
    document.getElementById('pl').innerHTML = '1';
  }
  if (plDone.includes('29') || plDone.includes(29)){
    document.getElementById('worldPL').style.filter = 'brightness(100%)';
    document.getElementById('pl').innerHTML = 'X';
  }
  if (spDone.includes('12') || spDone.includes(12)){
    document.getElementById('sp').innerHTML = '1';
  }
  if (spDone.includes('18') || spDone.includes(18)){
    document.getElementById('worldSP').style.filter = 'brightness(100%)';
    document.getElementById('sp').innerHTML = 'X';
  }
  if (corDone.includes('21') || corDone.includes(21)){
    document.getElementById('worldCoR').style.filter = 'brightness(100%)';
    document.getElementById('cor').innerHTML = 'X';
  }
  if (twtnwDone.includes('28') || twtnwDone.includes(28)){
    document.getElementById('worldTWTNW').style.filter = 'brightness(100%)';
    document.getElementById('twtnw').innerHTML = 'X';
  }
  if (acreDone.includes('22') || acreDone.includes(22)){
    document.getElementById('world100').style.filter = 'brightness(100%)';
    document.getElementById('acre').innerHTML = 'X';
  }
  if (atlDone.includes('1') || atlDone.includes(1)){
    document.getElementById('atl').innerHTML = '1';
  }
  if (atlDone.includes('2') || atlDone.includes(2)){
    document.getElementById('atl').innerHTML = '2';
  }
  if (atlDone.includes('3') || atlDone.includes(3)){
    document.getElementById('worldAtlantica').style.filter = 'brightness(100%)';
    document.getElementById('atl').innerHTML = 'X';
  }
  if (dataDone.length == 13){
    document.getElementById('worldData').style.filter = 'brightness(100%)';
  }
  document.getElementById('dataNum').innerHTML = dataDone.length;

  //Mark Required Checks
  if (requiredDone[0] == "1"){
    requiredMark('charm');
  }
  if (requiredDone[1] == '1'){
    requiredMark('peace');
  }
  if (requiredDone[2] == '1'){
    requiredMark('nonexist');
  }
  if (requiredDone[3] == '1'){
    requiredMark('connection');
  }

  //Mark Summons
  if (summonDone[0] == "1"){
    summonMark('bBall');
  }
  if (summonDone[1] == '1'){
    summonMark('lamp');
  }
  if (summonDone[2] == '1'){
    summonMark('ukulele');
  }
  if (summonDone[3] == '1'){
    summonMark('feather');
  }

  //Mark Forms
  if (formDone[0] != "0"){
    var count = formDone[0];
    for (var i = 0; i < count; i++){
      formMark('valor');
    }
  }
  if (formDone[1] != "0"){
    var count = formDone[1];
    for (var i = 0; i < count; i++){
      formMark('wisdom');
    }
  }
  if (formDone[2] != "0"){
    var count = formDone[2];
    for (var i = 0; i < count; i++){
      formMark('limit');
    }
  }
  if (formDone[3] != "0"){
    var count = formDone[3];
    for (var i = 0; i < count; i++){
      formMark('master');
    }
  }
  if (formDone[4] != "0"){
    var count = formDone[4];
    for (var i = 0; i < count; i++){
      formMark('final');
    }
  }

  //Mark Magic
  if (magicDone[0] != "0"){
    var count = magicDone[0];
    for (var i = 0; i < count; i++){
      magicMark('fire');
    }
  }
  if (magicDone[1] != "0"){
    var count = magicDone[1];
    for (var i = 0; i < count; i++){
      magicMark('blizzard');
    }
  }
  if (magicDone[2] != "0"){
    var count = magicDone[2];
    for (var i = 0; i < count; i++){
      magicMark('thunder');
    }
  }
  if (magicDone[3] != "0"){
    var count = magicDone[3];
    for (var i = 0; i < count; i++){
      magicMark('cure');
    }
  }
  if (magicDone[4] != "0"){
    var count = magicDone[4];
    for (var i = 0; i < count; i++){
      magicMark('reflect');
    }
  }
  if (magicDone[5] != "0"){
    var count = magicDone[5];
    for (var i = 0; i < count; i++){
      magicMark('magnet');
    }
  }

  //Mark Reports (Still need to rename)
  if (keybladeDone != "0"){
    var loop = parseInt(keybladeDone);
    for (var i = 0; i < loop; i++){
      keybladeMark();
    }
  }

  //Mark Pages
  if (pageDone != "0"){
    var loop = parseInt(pageDone);
    for (var i = 0; i < loop; i++){
      pageMark();
    }
  }

  //Update Hover tooltip
  document.getElementById('sttCC').innerHTML = (24 - sttDone.length);
  document.getElementById('ttCC').innerHTML = (46 - ttDone.length);
  document.getElementById('hbCC').innerHTML = (34 - hbDone.length);
  document.getElementById('dcCC').innerHTML = (10 - dctrDone.length);
  document.getElementById('trCC').innerHTML = (12 - trDone.length);
  document.getElementById('lodCC').innerHTML = (28 - tlodDone.length);
  document.getElementById('bcCC').innerHTML = (28 - bcDone.length);
  document.getElementById('ocCC').innerHTML = (34 - ocDone.length);
  document.getElementById('prCC').innerHTML = (29 - prDone.length);
  document.getElementById('agrCC').innerHTML = (33 - agrDone.length);
  document.getElementById('htCC').innerHTML = (21 - htDone.length);
  document.getElementById('plCC').innerHTML = (29 - plDone.length);
  document.getElementById('spCC').innerHTML = (18 - spDone.length);
  document.getElementById('corCC').innerHTML = (21 - corDone.length);
  document.getElementById('twtnwCC').innerHTML = (28 - twtnwDone.length);
  document.getElementById('acreCC').innerHTML = (22 - acreDone.length);
  document.getElementById('atlCC').innerHTML = (3 - atlDone.length);
  document.getElementById('dataCC').innerHTML = (13 - dataDone.length);

  //Restore Disabled Worlds
  if (disabledWorlds[0] == 1){
    document.getElementById('stt').innerHTML = 'X';
    roxasWorld.setAttribute('src','img/Disabled/simulated_twilight_town.png');
    roxasWorld.style.filter = "brightness(100%)"
    sttVC = 1;
  }
  if (disabledWorlds[1] == 1){
    document.getElementById('tt').innerHTML = 'X';
    ttWorld.setAttribute('src','img/Disabled/twilight_town.png');
    ttWorld.style.filter = "brightness(100%)"
    ttVC = 1;
  }
  if (disabledWorlds[2] == 1){
    document.getElementById('hb').innerHTML = 'X';
    hbWorld.setAttribute('src','img/Disabled/hollow_bastion.png');
    hbWorld.style.filter = "brightness(100%)";
    hbVC = 1;
  }
  if (disabledWorlds[3] == 1){
    document.getElementById('dc').innerHTML = 'X';
    dcWorld.setAttribute('src','img/Disabled/disney_castle.png');
    dcWorld.style.filter = "brightness(100%)"
    dcVC = 1;
  }
  if (disabledWorlds[4] == 1){
    document.getElementById('tr').innerHTML = 'X';
    trWorld.setAttribute('src','img/Disabled/timeless_river.png');
    trWorld.style.filter = "brightness(100%)"
    trVC = 1;
  }
  if (disabledWorlds[5] == 1){
    document.getElementById('lod').innerHTML = 'X';
    lodWorld.setAttribute('src','img/Disabled/land_of_dragons.png');
    lodWorld.style.filter = "brightness(100%)";
    lodVC = 1;
  }
  if (disabledWorlds[6] == 1){
    document.getElementById('bc').innerHTML = 'X';
    bcWorld.setAttribute('src',"img/Disabled/beast's_castle.png");
    bcWorld.style.filter = "brightness(100%)";
    bcVC = 1;
  }
  if (disabledWorlds[7] == 1){
    document.getElementById('oc').innerHTML = 'X';
    ocWorld.setAttribute('src','img/Disabled/olympus_coliseum.png');
    document.getElementById('oc').style.filter = 'brightness(100%)'
    ocVC = 1;
  }
  if (disabledWorlds[8] == 1){
    document.getElementById('pr').innerHTML = 'X';
    prWorld.setAttribute('src','img/Disabled/port_royal.png');
    prWorld.style.filter = "brightness(100%)";
    prVC = 1;
  }
  if (disabledWorlds[9] == 1){
    document.getElementById('agr').innerHTML = 'X';
    agrWorld.setAttribute('src','img/Disabled/agrabah.png');
    agrWorld.style.filter = "brightness(100%)";
    agrVC = 1;
  }
  if (disabledWorlds[10] == 1){
    document.getElementById('ht').innerHTML = 'X';
    htWorld.setAttribute('src','img/Disabled/halloween_town.png');
    htWorld.style.filter = "brightness(100%)";
    htVC = 1;
  }
  if (disabledWorlds[11] == 1){
    document.getElementById('pl').innerHTML = 'X';
    plWorld.setAttribute('src','img/Disabled/pride_land.png');
    plWorld.style.filter = "brightness(100%)";
    plVC = 1;
  }
  if (disabledWorlds[12] == 1){
    document.getElementById('sp').innerHTML = 'X';
    spWorld.setAttribute('src','img/Disabled/space_paranoids.png');
    spWorld.style.filter = "brightness(100%)";
    spVC = 1;
  }
  if (disabledWorlds[13] == 1){
    document.getElementById('cor').innerHTML = 'X';
    corWorld.setAttribute('src','img/Disabled/cavern_of_remembrance.png');
    corWorld.style.filter = "brightness(100%)";
    corVC = 1;
  }
  if (disabledWorlds[14] == 1){
    document.getElementById('twtnw').innerHTML = 'X';
    twtnwWorld.setAttribute('src','img/Disabled/the_world_that_never_was.png');
    twtnwWorld.style.filter = "brightness(100%)";
    twtnwVC = 1;
  }
  if (disabledWorlds[15] == 1){
    document.getElementById('acre').innerHTML = 'X';
    acreWorld.setAttribute('src','img/Disabled/100_acre_wood.png');
    acreWorld.style.filter = "brightness(100%)";
    acreVC = 1;
  }
  if (disabledWorlds[16] == 1){
    document.getElementById('atl').innerHTML = 'X';
    atlWorld.setAttribute('src','img/Disabled/atlantica.png');
    atlWorld.style.filter = "brightness(100%)";
    atlVC = 1;
  }
  if (disabledWorlds[17] == 1){
    document.getElementById('dataNum').innerHTML = 'X';
    dataWorld.setAttribute('src','img/Disabled/replica_data.png');
    dataWorld.style.filter = "brightness(100%)";
    dataVC = 1;
  }
  if (disabledWorlds[18] == 1){
    pCharm.setAttribute('src','img/Required/Charm_2.png');
    pCharmVC = 1;
  }
  if (disabledWorlds[18] == 1){
    document.getElementById('keyNum').innerHTML = 'X';
    reports.setAttribute('src','img/secret_reports_1.png');
    reports.style.filter = "brightness(100%)";
    reportVC = 1;
  }
  if (disabledWorlds[19] == 1){
    document.getElementById('pageNum').innerHTML = 'X';
    pages.setAttribute('src','img/pages_2.png');
    tpVC = 1;
  }

  //Restore Auto Forms
  if (formToggle[0] == 1){
    document.getElementById('fValor').setAttribute('src', 'img/Forms/formvalor_1.png');
    vToggle = '1';
  }
  if (formToggle[1] == 1){
    document.getElementById('fWisdom').setAttribute('src', 'img/Forms/formwisdom_1.png');
    wToggle = '1';
  }
  if (formToggle[2] == 1){
    document.getElementById('fLimit').setAttribute('src', 'img/Forms/formlimit_1.png');
    lToggle = '1';
  }
  if (formToggle[3] == 1){
    document.getElementById('fMaster').setAttribute('src', 'img/Forms/formmaster_1.png');
    mToggle = '1';
  }
  if (formToggle[4] == 1){
    document.getElementById('fFinal').setAttribute('src', 'img/Forms/formfinal_1.png');
    fToggle = '1';
  }

  document.getElementById('saveText').innerHTML = 'Progress Loaded';
  setTimeout(function(){
    document.getElementById('saveText').innerHTML = '';
  }, 3000);
}
