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

function list(location){
  var checkList = document.getElementById('checks');
  if (location == 'keyblades'){
    checkList.innerHTML = "<h3 align='center'><u>Keyblades</u></h3>" + keyblade;
    for (var i = 0; i < keybladeDone.length; i++){
      document.getElementById(keybladeDone[i]).style.textDecoration = 'line-through';
      document.getElementById(keybladeDone[i]).style.backgroundColor = '#fff';
      document.getElementById(keybladeDone[i]).style.color = '#000'
      if (keybladeDone[i] == '24'){
        document.getElementById('keyblade').setAttribute('src', 'img/Required/kingdomkey_1.png')
      }
    }
  }
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
      if (ttDone[i] == '9'){
        document.getElementById('hb1Key').setAttribute('src', 'img/keyhole_1.png')
      }
      if (ttDone[i] == '28'){
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
}
