//Variable to keep track of completed
var sttDone = [];
var ttDone = [];
var hbDone = [];
var dctrDone = [];
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
var requiredDone = ["0","0","0","0"];
var formDone = ["0","0","0","0","0"];
var magicDone = ["0","0","0","0","0","0"];
var summonDone = ["0","0","0","0"];
var keybladeDone = "0";
var pageDone = "0";
var hintsFound = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
var hintsKnown = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
var notepad = ['']

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

  document.getElementById('notepad').value = notepad[0];
}

function list(location){
  var checkList = document.getElementById('checks');
  if (location == 'STT'){
    checkList.innerHTML = `<h3 align='center'><u>Simulated Twilight Town</u><br>
    Locations Left: <span id='sttLeft'>25</span></h3>` + stt;
    for (var i = 0; i < sttDone.length; i++){
      document.getElementById(sttDone[i]).style.textDecoration = 'line-through';
      document.getElementById(sttDone[i]).style.backgroundColor = '#fff';
      document.getElementById(sttDone[i]).style.color = '#000'
      if (sttDone[i] == '24'){
        document.getElementById('sttKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('sttLeft').innerHTML = (25 - sttDone.length);
  }
  if (location == 'TT'){
    checkList.innerHTML = `<h3 align='center'><u>Twilight Town</u><br>
    Locations Left: <span id='ttLeft'>47</span></h3>` + tt;
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
    document.getElementById('ttLeft').innerHTML = (47 - ttDone.length);
  }
  if (location == 'HB'){
    checkList.innerHTML = `<h3 align='center'><u>Hollow Bastion</u><br>
    Locations Left: <span id='hbLeft'>35</span></h3>` + hb;
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
    document.getElementById('hbLeft').innerHTML = (35 - hbDone.length);
  }
  if (location == 'DC' || location == 'TR'){
    checkList.innerHTML = `<h3 align='center'><u>Disney Castle / Timeless River</u><br>
    Locations Left: <span id='dctrLeft'>23</span></h3>` + dctr;
    for (var i = 0; i < dctrDone.length; i++){
      document.getElementById(dctrDone[i]).style.textDecoration = 'line-through';
      document.getElementById(dctrDone[i]).style.backgroundColor = '#fff';
      document.getElementById(dctrDone[i]).style.color = '#000'
      if (dctrDone[i] == '10'){
        document.getElementById('dcKey').setAttribute('src', 'img/keyhole_1.png')
      }
      if (dctrDone[i] == '21'){
        document.getElementById('trKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('dctrLeft').innerHTML = (23 - dctrDone.length);
  }
  if (location == 'TLOD'){
    checkList.innerHTML = `<h3 align='center'><u>The Land of Dragons</u><br>
    Locations Left: <span id='tlodLeft'>29</span></h3>` + tlod;
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
    document.getElementById('tlodLeft').innerHTML = (29 - tlodDone.length);
  }
  if (location == 'BC'){
    checkList.innerHTML = `<h3 align='center'><u>Beast's Castle</u><br>
    Locations Left: <span id='bcLeft'>29</span></h3>` + bc;
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
    document.getElementById('bcLeft').innerHTML = (29 - bcDone.length);
  }
  if (location == 'OC'){
    checkList.innerHTML = `<h3 align='center'><u>Olympus Coliseum</u><br>
    Locations Left: <span id='ocLeft'>35</span></h3>` + oc;
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
    document.getElementById('ocLeft').innerHTML = (35 - ocDone.length);
  }
  if (location == 'PR'){
    checkList.innerHTML = `<h3 align='center'><u>Port Royal</u><br>
    Locations Left: <span id='prLeft'>30</span></h3>` + pr;
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
    document.getElementById('prLeft').innerHTML = (30 - prDone.length);
  }
  if (location == 'AGR'){
    checkList.innerHTML = `<h3 align='center'><u>Agrabah</u><br>
    Locations Left: <span id='agrLeft'>34</span></h3>` + agrabah;
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
    document.getElementById('agrLeft').innerHTML = (34 - agrDone.length);
  }
  if (location == 'HT'){
    checkList.innerHTML = `<h3 align='center'><u>Halloween Town</u><br>
    Locations Left: <span id='htLeft'>22</span></h3>` + ht;
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
    document.getElementById('htLeft').innerHTML = (22 - htDone.length);
  }
  if (location == 'PL'){
    checkList.innerHTML = `<h3 align='center'><u>Pride Lands</u><br>
    Locations Left: <span id='plLeft'>30</span></h3>` + pl;
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
    document.getElementById('plLeft').innerHTML = (30 - plDone.length);
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
    Locations Left: <span id='twtnwLeft'>29</span></h3>` + twtnw;
    for (var i = 0; i < twtnwDone.length; i++){
      document.getElementById(twtnwDone[i]).style.textDecoration = 'line-through';
      document.getElementById(twtnwDone[i]).style.backgroundColor = '#fff';
      document.getElementById(twtnwDone[i]).style.color = '#000'
      if (twtnwDone[i] == '28'){
        document.getElementById('twtnwKey').setAttribute('src', 'img/keyhole_1.png')
      }
    }
    document.getElementById('twtnwLeft').innerHTML = (29 - twtnwDone.length);
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
    Locations Left: <span id='atlLeft'>4</span></h3>` + atlantica;
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
    document.getElementById('atlLeft').innerHTML = (4 - atlDone.length);
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

//Mark Keyblades
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
      hintsKnown: hintsKnown
    }
  }
)
//Set Values if non-existent
if (!saveT.get('sttDone')){
  saveT.set('sttDone', sttDone);
}
if (!saveT.get('ttDone')){
  saveT.set('ttDone', ttDone);
}
if (!saveT.get('hbDone')){
  saveT.set('hbDone', hbDone);
}
if (!saveT.get('dctrDone')){
  saveT.set('dctrDone', dctrDone);
}
if (!saveT.get('tlodDone')){
  saveT.set('tlodDone', tlodDone);
}
if (!saveT.get('bcDone')){
  saveT.set('bcDone', bcDone);
}
if (!saveT.get('ocDone')){
  saveT.set('ocDone', ocDone);
}
if (!saveT.get('prDone')){
  saveT.set('prDone', prDone);
}
if (!saveT.get('agrDone')){
  saveT.set('agrDone', agrDone);
}
if (!saveT.get('htDone')){
  saveT.set('htDone', htDone);
}
if (!saveT.get('plDone')){
  saveT.set('plDone', plDone);
}
if (!saveT.get('spDone')){
  saveT.set('spDone', spDone);
}
if (!saveT.get('corDone')){
  saveT.set('corDone', corDone);
}
if (!saveT.get('twtnwDone')){
  saveT.set('twtnwDone', twtnwDone);
}
if (!saveT.get('acreDone')){
  saveT.set('acreDone', acreDone);
}
if (!saveT.get('atlDone')){
  saveT.set('atlDone', atlDone);
}
if (!saveT.get('requiredDone')){
  saveT.set('requiredDone', requiredDone);
}
if (!saveT.get('formDone')){
  saveT.set('formDone', formDone);
}
if (!saveT.get('magicDone')){
  saveT.set('magicDone', magicDone);
}
if (!saveT.get('summonDone')){
  saveT.set('summonDone', summonDone);
}
if (!saveT.get('keybladeDone')){
  saveT.set('keybladeDone', keybladeDone);
}
if (!saveT.get('pageDone')){
  saveT.set('pageDone', pageDone);
}
if (!saveT.get('hintsFound')){
  saveT.set('hintsFound', hintsFound);
}
if (!saveT.get('hintsKnown')){
  saveT.set('hintsKnown', hintsKnown);
}
if (!saveT.get('notepad')){

}

function save(){
  saveT.set('sttDone', sttDone);
  saveT.set('ttDone', ttDone);
  saveT.set('hbDone', hbDone);
  saveT.set('dctrDone', dctrDone);
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
  saveT.set('requiredDone', requiredDone);
  saveT.set('formDone', formDone);
  saveT.set('magicDone', magicDone);
  saveT.set('summonDone', summonDone);
  saveT.set('keybladeDone', keybladeDone);
  saveT.set('pageDone', pageDone);
  saveT.set('hintsFound', hintsFound);
  saveT.set('hintsKnown', hintsKnown);
  saveT.set('notepad', notepad);
}

function load(){
  sttDone = saveT.get('sttDone');
  ttDone = saveT.get('ttDone');
  hbDone = saveT.get('hbDone');
  dctrDone = saveT.get('dctrDone');
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
  requiredDone = saveT.get('requiredDone');
  formDone = saveT.get('formDone');
  magicDone = saveT.get('magicDone');
  summonDone = saveT.get('summonDone');
  keybladeDone = saveT.get('keybladeDone');
  pageDone = saveT.get('pageDone');
  hintsFound = saveT.get('hintsFound');
  hintsKnown = saveT.get('hintsKnown');
  notepad = saveT.get('notepad');

  list('STT');
  hintsLoad();

  //Update Worlds
  if (sttDone.includes('24')){
    document.getElementById('worldRoxas').style.filter = "brightness(100%)"
    document.getElementById('stt').innerHTML = 'X';
  }
  if (ttDone.includes('24')){
    document.getElementById('tt').innerHTML = '1';
  }
  if (ttDone.includes('26')){
    document.getElementById('tt').innerHTML = '2';
  }
  if (ttDone.includes('46')){
    document.getElementById('worldTT').style.filter = 'brightness(100%)';
    document.getElementById('tt').innerHTML = 'X';
  }
  if (hbDone.includes('18')){
    document.getElementById('hb').innerHTML = '1';
  }
  if (hbDone.includes('28')){
    document.getElementById('worldHB').style.filter = 'brightness(100%)';
    document.getElementById('hb').innerHTML = 'X';
  }
  if (dctrDone.includes('10')){
    document.getElementById('worldDC').style.filter = 'brightness(100%)';
    document.getElementById('dc').innerHTML = 'X';
  }
  if (dctrDone.includes('21')){
    document.getElementById('worldTR').style.filter = 'brightness(100%)';
    document.getElementById('tr').innerHTML = 'X';
  }
  if (tlodDone.includes('19')){
    document.getElementById('lod').innerHTML = '1';
  }
  if (tlodDone.includes('28')){
    document.getElementById('worldTLoD').style.filter = 'brightness(100%)';
    document.getElementById('lod').innerHTML = 'X';
  }
  if (bcDone.includes('25')){
    document.getElementById('bc').innerHTML = '1';
  }
  if (bcDone.includes('28')){
    document.getElementById('worldBC').style.filter = 'brightness(100%)';
    document.getElementById('bc').innerHTML = 'X';
  }
  if (ocDone.includes('27')){
    document.getElementById('oc').innerHTML = '1';
  }
  if (ocDone.includes('30')){
    document.getElementById('worldOC').style.filter = 'brightness(100%)';
    document.getElementById('oc').innerHTML = 'X';
  }
  if (prDone.includes('18')){
    document.getElementById('pr').innerHTML = '1';
  }
  if (prDone.includes('29')){
    document.getElementById('worldPR').style.filter = 'brightness(100%)';
    document.getElementById('pr').innerHTML = 'X';
  }
  if (agrDone.includes('27')){
    document.getElementById('agr').innerHTML = '1';
  }
  if (agrDone.includes('30')){
    document.getElementById('worldAgrabah').style.filter = 'brightness(100%)';
    document.getElementById('agr').innerHTML = 'X';
  }
  if (htDone.includes('17')){
    document.getElementById('ht').innerHTML = '1';
  }
  if (htDone.includes('21')){
    document.getElementById('worldHT').style.filter = 'brightness(100%)';
    document.getElementById('ht').innerHTML = 'X';
  }
  if (plDone.includes('28')){
    document.getElementById('pl').innerHTML = '1';
  }
  if (plDone.includes('29')){
    document.getElementById('worldPL').style.filter = 'brightness(100%)';
    document.getElementById('pl').innerHTML = 'X';
  }
  if (spDone.includes('12')){
    document.getElementById('sp').innerHTML = '1';
  }
  if (spDone.includes('18')){
    document.getElementById('worldSP').style.filter = 'brightness(100%)';
    document.getElementById('sp').innerHTML = 'X';
  }
  if (corDone.includes('21')){
    document.getElementById('worldCoR').style.filter = 'brightness(100%)';
    document.getElementById('cor').innerHTML = 'X';
  }
  if (twtnwDone.includes('28')){
    document.getElementById('worldTWTNW').style.filter = 'brightness(100%)';
    document.getElementById('twtnw').innerHTML = 'X';
  }
  if (acreDone.includes('22')){
    document.getElementById('world100').style.filter = 'brightness(100%)';
    document.getElementById('acre').innerHTML = 'X';
  }
  if (atlDone.includes('1')){
    document.getElementById('atl').innerHTML = '1';
  }
  if (atlDone.includes('2')){
    document.getElementById('atl').innerHTML = '2';
  }
  if (atlDone.includes('3')){
    document.getElementById('worldAtlantica').style.filter = 'brightness(100%)';
    document.getElementById('atl').innerHTML = 'X';
  }

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

  //Mark Keyblades
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
}
