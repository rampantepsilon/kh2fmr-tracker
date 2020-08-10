//Variable to keep track of completed
var keybladeDone = [];
var pages = [];
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

//Call on load
function init(){
  list('STT');
  keybladeMark();
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
      if (hbDone[i] == '9'){
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
    document.getElementById('tlodLeft').innerHTML = (29 - hbDone.length);
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
}

//Mark Pages (Had to move due to bug)
function pageMark(){
  var counter = document.getElementById('pageNum');
  var pages = document.getElementById('pages');
  var currentCount = document.getElementById('pageNum').innerHTML;

  if (currentCount < 5){
    currentCount = parseInt(currentCount) + 1;
    counter.innerHTML = currentCount;
    pages.setAttribute('src', 'img/pages_1.png')
  } else {
    counter.innerHTML = 0;
    pages.setAttribute('src', 'img/pages_0.png')
  }
}

//Mark Keyblades
function keybladeMark(){
  var counter = document.getElementById('keyNum');
  var pages = document.getElementById('keyblade');
  var currentCount = document.getElementById('keyNum').innerHTML;

  if (currentCount < 24){
    currentCount = parseInt(currentCount) + 1;
    counter.innerHTML = currentCount;
    pages.setAttribute('src', 'img/Required/kingdomkey_1.png')
  } else {
    counter.innerHTML = 0;
    pages.setAttribute('src', 'img/Required/kingdomkey_0.png')
  }
}
