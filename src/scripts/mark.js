function sttMark(num){
  var sttTemp = [];
  if (!sttDone.includes(num)){
    sttDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '24'){
      document.getElementById('worldRoxas').style.filter = "brightness(100%)"
      document.getElementById('sttKey').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('stt').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < sttDone.length; i++){
      if (sttDone[i] != num){
        sttTemp.push(sttDone[i]);
      }
    }
    sttDone = sttTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '24'){
      document.getElementById('worldRoxas').style.filter = "brightness(40%)"
      document.getElementById('sttKey').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('stt').innerHTML = '0';
    }
  }
  document.getElementById('sttLeft').innerHTML = (24 - sttDone.length);
  document.getElementById('sttCC').innerHTML = (24 - sttDone.length);
}
function ttMark(num){
  var ttTemp = [];
  if (!ttDone.includes(num)){
    ttDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '24'){
      document.getElementById('tt1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('tt').innerHTML = '1';
    }
    if (num == '26'){
      document.getElementById('tt2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('tt').innerHTML = '2';
    }
    if (num == '46'){
      document.getElementById('worldTT').style.filter = "brightness(100%)"
      document.getElementById('tt3Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('tt').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < ttDone.length; i++){
      if (ttDone[i] != num){
        ttTemp.push(ttDone[i]);
      }
    }
    ttDone = ttTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '24'){
      document.getElementById('tt1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('tt').innerHTML = '0';
    }
    if (num == '26'){
      document.getElementById('tt2Key').setAttribute('src', 'img/keyhole_0.png')
      if (ttDone.includes('24')){
        document.getElementById('tt').innerHTML = '1';
      } else {
        document.getElementById('tt').innerHTML = '0';
      }
    }
    if (num == '46'){
      document.getElementById('worldTT').style.filter = "brightness(40%)"
      document.getElementById('tt3Key').setAttribute('src', 'img/keyhole_0.png')
      if (ttDone.includes("26")){
        document.getElementById('tt').innerHTML = '2';
      } else if (ttDone.includes('24')){
        document.getElementById('tt').innerHTML = '1';
      } else {
        document.getElementById('tt').innerHTML = '0';
      }
    }
  }
  document.getElementById('ttLeft').innerHTML = (46 - ttDone.length);
  document.getElementById('ttCC').innerHTML = (46 - ttDone.length);
}
function hbMark(num){
  var hbTemp = [];
  if (!hbDone.includes(num)){
    hbDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '10'){
      document.getElementById('hb1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('hb').innerHTML = '1';
    }
    if (num == '28'){
      document.getElementById('worldHB').style.filter = "brightness(100%)"
      document.getElementById('hb2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('hb').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < hbDone.length; i++){
      if (hbDone[i] != num){
        hbTemp.push(hbDone[i]);
      }
    }
    hbDone = hbTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '10'){
      document.getElementById('hb1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('hb').innerHTML = '0';
    }
    if (num == '28'){
      document.getElementById('worldHB').style.filter = "brightness(40%)"
      document.getElementById('hb2Key').setAttribute('src', 'img/keyhole_0.png')
      if (hbDone.includes('10')){
        document.getElementById('hb').innerHTML = '1';
      } else {
        document.getElementById('hb').innerHTML = '0';
      }
    }
  }
  document.getElementById('hbLeft').innerHTML = (34 - hbDone.length);
  document.getElementById('hbCC').innerHTML = (34 - hbDone.length);
}
function dctrMark(num){
  var dctrTemp = [];
  if (!dctrDone.includes(num)){
    dctrDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '10'){
      document.getElementById('worldDC').style.filter = "brightness(100%)"
      document.getElementById('dcKey').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('dc').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < dctrDone.length; i++){
      if (dctrDone[i] != num){
        dctrTemp.push(dctrDone[i]);
      }
    }
    dctrDone = dctrTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '10'){
      document.getElementById('worldDC').style.filter = "brightness(40%)"
      document.getElementById('dcKey').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('dc').innerHTML = '0';
    }
  }
  document.getElementById('dctrLeft').innerHTML = (10 - dctrDone.length);
  document.getElementById('dcCC').innerHTML = (10 - dctrDone.length);
}
function trMark(num){
  var trTemp = [];
  if (!trDone.includes(num)){
    trDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '11'){
      document.getElementById('worldTR').style.filter = "brightness(100%)"
      document.getElementById('trKey').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('tr').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < trDone.length; i++){
      if (trDone[i] != num){
        trTemp.push(trDone[i]);
      }
    }
    trDone = trTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '11'){
      document.getElementById('worldTR').style.filter = "brightness(40%)"
      document.getElementById('trKey').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('tr').innerHTML = '0';
    }
  }
  document.getElementById('trLeft').innerHTML = (12 - trDone.length);
  document.getElementById('trCC').innerHTML = (12 - trDone.length);
}
function tlodMark(num){
  var tlodTemp = [];
  if (!tlodDone.includes(num)){
    tlodDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '19'){
      document.getElementById('tlod1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('lod').innerHTML = '1';
    }
    if (num == '28'){
      document.getElementById('worldTLoD').style.filter = "brightness(100%)"
      document.getElementById('tlod2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('lod').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < tlodDone.length; i++){
      if (tlodDone[i] != num){
        tlodTemp.push(tlodDone[i]);
      }
    }
    tlodDone = tlodTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '19'){
      document.getElementById('tlod1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('lod').innerHTML = '0';
    }
    if (num == '28'){
      document.getElementById('worldTLoD').style.filter = "brightness(40%)"
      document.getElementById('tlod2Key').setAttribute('src', 'img/keyhole_0.png')
      if (tlodDone.includes('19')){
        document.getElementById('lod').innerHTML = '1';
      } else {
        document.getElementById('lod').innerHTML = '0';
      }
    }
  }
  document.getElementById('tlodLeft').innerHTML = (28 - tlodDone.length);
  document.getElementById('lodCC').innerHTML = (28 - tlodDone.length);
}
function bcMark(num){
  var bcTemp = [];
  if (!bcDone.includes(num)){
    bcDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '25'){
      document.getElementById('bc1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('bc').innerHTML = '1';
    }
    if (num == '28'){
      document.getElementById('worldBC').style.filter = "brightness(100%)"
      document.getElementById('bc2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('bc').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < bcDone.length; i++){
      if (bcDone[i] != num){
        bcTemp.push(bcDone[i]);
      }
    }
    bcDone = bcTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '25'){
      document.getElementById('bc1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('bc').innerHTML = '0';
    }
    if (num == '28'){
      document.getElementById('worldBC').style.filter = "brightness(40%)"
      document.getElementById('bc2Key').setAttribute('src', 'img/keyhole_0.png')
      if (bcDone.includes('25')){
        document.getElementById('bc').innerHTML = '1';
      } else {
        document.getElementById('bc').innerHTML = '0';
      }
    }
  }
  document.getElementById('bcLeft').innerHTML = (28 - bcDone.length);
  document.getElementById('bcCC').innerHTML = (28 - bcDone.length);
}
function ocMark(num){
  var ocTemp = [];
  if (!ocDone.includes(num)){
    ocDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '27'){
      document.getElementById('oc1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('oc').innerHTML = '1';
    }
    if (num == '30'){
      document.getElementById('worldOC').style.filter = "brightness(100%)"
      document.getElementById('oc2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('oc').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < ocDone.length; i++){
      if (ocDone[i] != num){
        ocTemp.push(ocDone[i]);
      }
    }
    ocDone = ocTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '27'){
      document.getElementById('oc1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('oc').innerHTML = '0';
    }
    if (num == '30'){
      document.getElementById('worldOC').style.filter = "brightness(40%)"
      document.getElementById('oc2Key').setAttribute('src', 'img/keyhole_0.png')
      if (ocDone.includes('27')){
        document.getElementById('oc').innerHTML = '1';
      } else {
        document.getElementById('oc').innerHTML = '0';
      }
    }
  }
  document.getElementById('ocLeft').innerHTML = (34 - ocDone.length);
  document.getElementById('ocCC').innerHTML = (34 - ocDone.length);
}
function prMark(num){
  var prTemp = [];
  if (!prDone.includes(num)){
    prDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '18'){
      document.getElementById('pr1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('pr').innerHTML = '1';
    }
    if (num == '29'){
      document.getElementById('worldPR').style.filter = "brightness(100%)"
      document.getElementById('pr2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('pr').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < prDone.length; i++){
      if (prDone[i] != num){
        prTemp.push(prDone[i]);
      }
    }
    prDone = prTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '18'){
      document.getElementById('pr1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('pr').innerHTML = '0';
    }
    if (num == '29'){
      document.getElementById('worldPR').style.filter = "brightness(40%)"
      document.getElementById('pr2Key').setAttribute('src', 'img/keyhole_0.png')
      if (prDone.includes('18')){
        document.getElementById('pr').innerHTML = '1';
      } else {
        document.getElementById('pr').innerHTML = '0';
      }
    }
  }
  document.getElementById('prLeft').innerHTML = (29 - prDone.length);
  document.getElementById('prCC').innerHTML = (29 - prDone.length);
}
function agrMark(num){
  var agrTemp = [];
  if (!agrDone.includes(num)){
    agrDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '27'){
      document.getElementById('agr1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('agr').innerHTML = '1';
    }
    if (num == '33'){
      document.getElementById('worldAgrabah').style.filter = "brightness(100%)"
      document.getElementById('agr2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('agr').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < agrDone.length; i++){
      if (agrDone[i] != num){
        agrTemp.push(agrDone[i]);
      }
    }
    agrDone = agrTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '27'){
      document.getElementById('agr1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('agr').innerHTML = '0';
    }
    if (num == '33'){
      document.getElementById('worldAgrabah').style.filter = "brightness(40%)"
      document.getElementById('agr2Key').setAttribute('src', 'img/keyhole_0.png')
      if (agrDone.includes('27')){
        document.getElementById('agr').innerHTML = '1';
      } else {
        document.getElementById('agr').innerHTML = '0';
      }
    }
  }
  document.getElementById('agrLeft').innerHTML = (33 - agrDone.length);
  document.getElementById('agrCC').innerHTML = (33 - agrDone.length);
}
function htMark(num){
  var htTemp = [];
  if (!htDone.includes(num)){
    htDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '17'){
      document.getElementById('ht1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('ht').innerHTML = '1';
    }
    if (num == '21'){
      document.getElementById('worldHT').style.filter = "brightness(100%)"
      document.getElementById('ht2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('ht').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < htDone.length; i++){
      if (htDone[i] != num){
        htTemp.push(htDone[i]);
      }
    }
    htDone = htTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '17'){
      document.getElementById('ht1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('ht').innerHTML = '0';
    }
    if (num == '21'){
      document.getElementById('worldHT').style.filter = "brightness(40%)"
      document.getElementById('ht2Key').setAttribute('src', 'img/keyhole_0.png')
      if (htDone.includes('17')){
        document.getElementById('ht').innerHTML = '1';
      } else {
        document.getElementById('ht').innerHTML = '0';
      }
    }
  }
  document.getElementById('htLeft').innerHTML = (21 - htDone.length);
  document.getElementById('htCC').innerHTML = (21 - htDone.length);
}
function plMark(num){
  var plTemp = [];
  if (!plDone.includes(num)){
    plDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '28'){
      document.getElementById('pl1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('pl').innerHTML = '1';
    }
    if (num == '29'){
      document.getElementById('worldPL').style.filter = "brightness(100%)"
      document.getElementById('pl2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('pl').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < plDone.length; i++){
      if (plDone[i] != num){
        plTemp.push(plDone[i]);
      }
    }
    plDone = plTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '28'){
      document.getElementById('pl1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('pl').innerHTML = '0';
    }
    if (num == '29'){
      document.getElementById('worldPL').style.filter = "brightness(40%)"
      document.getElementById('pl2Key').setAttribute('src', 'img/keyhole_0.png')
      if (plDone.includes('28')){
        document.getElementById('pl').innerHTML = '1';
      } else {
        document.getElementById('pl').innerHTML = '0';
      }
    }
  }
  document.getElementById('plLeft').innerHTML = (29 - plDone.length);
  document.getElementById('plCC').innerHTML = (29 - plDone.length);
}
function spMark(num){
  var spTemp = [];
  if (!spDone.includes(num)){
    spDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '12'){
      document.getElementById('sp1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('sp').innerHTML = '1';
    }
    if (num == '18'){
      document.getElementById('worldSP').style.filter = "brightness(100%)"
      document.getElementById('sp2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('sp').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < spDone.length; i++){
      if (spDone[i] != num){
        spTemp.push(spDone[i]);
      }
    }
    spDone = spTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '12'){
      document.getElementById('sp1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('sp').innerHTML = '0';
    }
    if (num == '18'){
      document.getElementById('worldSP').style.filter = "brightness(40%)"
      document.getElementById('sp2Key').setAttribute('src', 'img/keyhole_0.png')
      if (spDone.includes('12')){
        document.getElementById('sp').innerHTML = '1';
      } else {
        document.getElementById('sp').innerHTML = '0';
      }
    }
  }
  document.getElementById('spLeft').innerHTML = (18 - spDone.length);
  document.getElementById('spCC').innerHTML = (18 - spDone.length);
}
function corMark(num){
  var corTemp = [];
  if (!corDone.includes(num)){
    corDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000';
    if (num == '21'){
      document.getElementById('worldCoR').style.filter = "brightness(100%)"
      document.getElementById('corKey').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('cor').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < corDone.length; i++){
      if (corDone[i] != num){
        corTemp.push(corDone[i]);
      }
    }
    corDone = corTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '21'){
      document.getElementById('worldCoR').style.filter = "brightness(40%)"
      document.getElementById('corKey').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('cor').innerHTML = '0';
    }
  }
  document.getElementById('corLeft').innerHTML = (21 - corDone.length);
  document.getElementById('corCC').innerHTML = (21 - corDone.length);
}
function twtnwMark(num){
  var twtnwTemp = [];
  if (!twtnwDone.includes(num)){
    twtnwDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000';
    if (num == '28'){
      document.getElementById('worldTWTNW').style.filter = "brightness(100%)"
      document.getElementById('twtnwKey').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('twtnw').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < twtnwDone.length; i++){
      if (twtnwDone[i] != num){
        twtnwTemp.push(twtnwDone[i]);
      }
    }
    twtnwDone = twtnwTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '28'){
      document.getElementById('worldTWTNW').style.filter = "brightness(40%)"
      document.getElementById('twtnwKey').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('twtnw').innerHTML = '0';
    }
  }
  document.getElementById('twtnwLeft').innerHTML = (28 - twtnwDone.length);
  document.getElementById('twtnwCC').innerHTML = (28 - twtnwDone.length);
}
function acreMark(num){
  var acreTemp = [];
  if (!acreDone.includes(num)){
    acreDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000';
    if (num == '22'){
      document.getElementById('world100').style.filter = "brightness(100%)"
      document.getElementById('acreKey').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('acre').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < acreDone.length; i++){
      if (acreDone[i] != num){
        acreTemp.push(acreDone[i]);
      }
    }
    acreDone = acreTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '22'){
      document.getElementById('world100').style.filter = "brightness(40%)"
      document.getElementById('acreKey').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('acre').innerHTML = '0';
    }
  }
  document.getElementById('acreLeft').innerHTML = (22 - acreDone.length);
  document.getElementById('acreCC').innerHTML = (22 - acreDone.length);
}
function atlMark(num){
  var atlTemp = [];
  if (!atlDone.includes(num)){
    atlDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000';
    if (num == '1'){
      document.getElementById('atl1Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('atl').innerHTML = '1';
    }
    if (num == '2'){
      document.getElementById('atl2Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('atl').innerHTML = '2';
    }
    if (num == '3'){
      document.getElementById('worldAtlantica').style.filter = "brightness(100%)"
      document.getElementById('atl3Key').setAttribute('src', 'img/keyhole_1.png')
      document.getElementById('atl').innerHTML = 'X';
    }
  } else {
    for (var i = 0; i < atlDone.length; i++){
      if (atlDone[i] != num){
        atlTemp.push(atlDone[i]);
      }
    }
    atlDone = atlTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (num == '1'){
      document.getElementById('atl1Key').setAttribute('src', 'img/keyhole_0.png')
      document.getElementById('atl').innerHTML = '0';
    }
    if (num == '2'){
      document.getElementById('atl2Key').setAttribute('src', 'img/keyhole_0.png')
      if (atlDone.includes('1')){
        document.getElementById('atl').innerHTML = '1';
      } else {
        document.getElementById('atl').innerHTML = '0';
      }
    }
    if (num == '3'){
      document.getElementById('worldAtlantica').style.filter = "brightness(40%)"
      document.getElementById('atl3Key').setAttribute('src', 'img/keyhole_0.png')
      if (atlDone.includes('2')){
        document.getElementById('atl').innerHTML = '2';
      } else if (atlDone.includes('1')){
        document.getElementById('atl').innerHTML = '1';
      } else {
        document.getElementById('atl').innerHTML = '0';
      }
    }
  }
  document.getElementById('atlLeft').innerHTML = (3 - atlDone.length);
  document.getElementById('atlCC').innerHTML = (3 - atlDone.length);
}
function dataMark(num){
  var dataTemp = [];
  if (!dataDone.includes(num)){
    dataDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000';
    document.getElementById('dataNum').innerHTML = dataDone.length;
  } else {
    for (var i = 0; i < dataDone.length; i++){
      if (dataDone[i] != num){
        dataTemp.push(dataDone[i]);
      }
    }
    dataDone = dataTemp;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    document.getElementById('dataNum').innerHTML = dataDone.length;
  }
  if (dataDone.length == 13){
    document.getElementById('worldData').style.filter = "brightness(100%)"
  } else {
    document.getElementById('worldData').style.filter = "brightness(40%)"
  }
  document.getElementById('dataLeft').innerHTML = (13 - dataDone.length);
  document.getElementById('dataCC').innerHTML = (13 - dataDone.length);
}

/*WIP Mark Sections*/
function sttAllMark(num){
  switch (num) {
    case 1:
      sttMark("3");
      sttMark("4");
      sttMark("5");
      sttMark("6");
      break;
    case 2:
      sttMark("9");
      sttMark("10");
      sttMark("11");
      break;
    case 3:
      sttMark("12");
      sttMark("13");
      sttMark("14");
      sttMark("15");
      break;
    case 4:
      sttMark("16");
      sttMark("17");
      sttMark("18");
      sttMark("19");
      sttMark("20");
      sttMark("21");
      sttMark("22");
      sttMark("23");
      sttMark("24");
      break;
  }
}
function ttAllMark(num){
  switch (num) {
    case 1:
      ttMark("1");
      ttMark("2");
      break;
    case 2:
      ttMark("3");
      ttMark("4");
      ttMark("5");
      ttMark("6");
      ttMark("7");
      ttMark("8");
      ttMark("9");
      break;
    case 3:
      ttMark("10");
      ttMark("11");
      ttMark("12");
      break;
    case 4:
      ttMark("13");
      ttMark("14");
      ttMark("15");
      ttMark("16");
      break;
    case 5:
      ttMark("17");
      ttMark("18");
      ttMark("19");
      break;
    case 6:
      ttMark("20");
      ttMark("21");
      break;
    case 7:
      ttMark("23");
      ttMark("24");
      break;
    case 8:
      ttMark("27");
      ttMark("28");
      ttMark("29");
      ttMark("30");
      break;
    case 9:
      ttMark("31");
      ttMark("32");
      break;
    case 10:
      ttMark("33");
      ttMark("34");
      ttMark("35");
      ttMark("36");
      break;
    case 11:
      ttMark("37");
      ttMark("38");
      ttMark("39");
      ttMark("40");
      ttMark("41");
      ttMark("42");
      ttMark("43");
      break;
  }
}
function hbAllMark(num){
  switch (num) {
    case 1:
      hbMark("2");
      hbMark("3");
      hbMark("4");
      hbMark("5");
      hbMark("6");
      break;
    case 2:
      hbMark("8");
      hbMark("9");
      break;
    case 3:
      hbMark("11");
      hbMark("12");
      hbMark("13");
      break;
    case 4:
      hbMark("14");
      hbMark("15");
      hbMark("16");
      hbMark("17");
      break;
    case 5:
      hbMark("23");
      hbMark("24");
      hbMark("25");
      hbMark("26");
      break;
    case 6:
      hbMark("27");
      hbMark("28");
      break;
    case 7:
      hbMark("31");
      hbMark("32");
      break;
  }
}
function dctrAllMark(num){
  switch (num) {
    case 1:
      dctrMark("1");
      dctrMark("2");
      dctrMark("3");
      dctrMark("4");
      dctrMark("5");
      dctrMark("6");
      dctrMark("7");
      break;
    case 2:
      dctrMark("8");
      dctrMark("9");
      break;
  }
}
function trAllMark(num){
  switch (num) {
    case 3:
      trMark("1");
      trMark("2");
      break;
    case 4:
      trMark("3");
      trMark("4");
      break;
    case 5:
      trMark("5");
      trMark("6");
      trMark("7");
      break;
  }
}
function tlodAllMark(num){
  switch (num) {
    case 1:
      tlodMark("1");
      tlodMark("2");
      tlodMark("3");
      break;
    case 2:
      tlodMark("6");
      tlodMark("7");
      break;
    case 3:
      tlodMark("8");
      tlodMark("9");
      tlodMark("10");
      tlodMark("11");
      break;
    case 4:
      tlodMark("13");
      tlodMark("14");
      tlodMark("15");
      break;
    case 5:
      tlodMark("16");
      tlodMark("17");
      break;
    case 6:
      tlodMark("20");
      tlodMark("21");
      tlodMark("22");
      tlodMark("23");
      tlodMark("24");
      tlodMark("25");
      tlodMark("26");
      tlodMark("27");
      break;
  }
}
function bcAllMark(num){
  switch (num) {
    case 1:
      bcMark("1");
      bcMark("2");
      bcMark("3");
      break;
    case 2:
      bcMark("4");
      bcMark("5");
      break;
    case 3:
      bcMark("6");
      bcMark("7");
      break;
    case 4:
      bcMark("8");
      bcMark("9");
      bcMark("10");
      bcMark("11");
      break;
    case 5:
      bcMark("13");
      bcMark("14");
      break;
    case 6:
      bcMark("15");
      bcMark("16");
      bcMark("17");
      break;
    case 7:
      bcMark("19");
      bcMark("20");
      break;
    case 8:
      bcMark("21");
      bcMark("22");
      bcMark("23");
      break;
  }
}
function ocAllMark(num){
  switch (num) {
    case 1:
      ocMark("1");
      ocMark("2");
      ocMark("3");
      ocMark("4");
      ocMark("5");
      break;
    case 2:
      ocMark("6");
      ocMark("7");
      break;
    case 3:
      ocMark("12");
      ocMark("13");
      ocMark("14");
      break;
    case 4:
      ocMark("15");
      ocMark("16");
      ocMark("17");
      ocMark("18");
      break;
    case 5:
      ocMark("19");
      ocMark("20");
      break;
    case 6:
      ocMark("22");
      ocMark("23");
      ocMark("24");
      break;
  }
}
function prAllMark(num){
  switch (num) {
    case 1:
      prMark("1");
      prMark("2");
      prMark("3");
      break;
    case 2:
      prMark("4");
      prMark("5");
      prMark("6");
      prMark("7");
      break;
    case 3:
      prMark("8");
      prMark("9");
      break;
    case 4:
      prMark("12");
      prMark("13");
      break;
    case 5:
      prMark("14");
      prMark("15");
      prMark("16");
      break;
    case 6:
      prMark("21");
      prMark("22");
      prMark("23");
      prMark("24");
      prMark("25");
      prMark("26");
      break;
  }
}
function agrAllMark(num){
  switch (num) {
    case 1:
      agrMark("4");
      agrMark("5");
      agrMark("6");
      break;
    case 2:
      agrMark("9");
      agrMark("10");
      agrMark("11");
      agrMark("12");
      agrMark("13");
      break;
    case 3:
      agrMark("14");
      agrMark("15");
      break;
    case 4:
      agrMark("16");
      agrMark("17");
      break;
    case 5:
      agrMark("18");
      agrMark("19");
      agrMark("20");
      agrMark("21");
      break;
    case 6:
      agrMark("23");
      agrMark("24");
      break;
    case 7:
      agrMark('25');
      agrMark("28");
      agrMark("29");
      break;
    case 8:
      agrMark("30");
      agrMark("31");
      break;
  }
}
function htAllMark(num){
  switch (num) {
    case 1:
      htMark("1");
      htMark("2");
      break;
    case 2:
      htMark("4");
      htMark("5");
      break;
    case 3:
      htMark("6");
      htMark("7");
      htMark("8");
      break;
    case 4:
      htMark("9");
      htMark("10");
      htMark("11");
      htMark("12");
      break;
    case 5:
      htMark("13");
      htMark("14");
      break;
  }
}
function plAllMark(num){
  switch (num) {
    case 1:
      plMark("1");
      plMark("2");
      plMark("3");
      break;
    case 2:
      plMark("4");
      plMark("5");
      plMark("6");
      plMark("7");
      plMark("8");
      break;
    case 3:
      plMark("9");
      plMark("10");
      plMark("11");
      break;
    case 4:
      plMark("12");
      plMark("13");
      plMark("14");
      plMark("15");
      plMark("16");
      break;
    case 5:
      plMark("17");
      plMark("18");
      plMark("19");
      break;
    case 6:
      plMark("20");
      plMark("21");
      plMark("22");
      break;
    case 7:
      plMark("24");
      plMark("25");
      plMark("26");
      break;
  }
}
function spAllMark(num){
  switch (num) {
    case 1:
      spMark("1");
      spMark("2");
      break;
    case 2:
      spMark("3");
      spMark("4");
      spMark("5");
      spMark("6");
      break;
    case 3:
      spMark("7");
      spMark("8");
      break;
    case 4:
      spMark("9");
      spMark("10");
      break;
    case 5:
      spMark("14");
      spMark("15");
      spMark("16");
      spMark("17");
      break;
  }
}
function corAllMark(num){
  switch (num) {
    case 1:
      corMark("1");
      corMark("2");
      corMark("3");
      corMark("4");
      corMark("5");
      break;
    case 2:
      corMark("6");
      corMark("7");
      break;
    case 3:
      corMark("10");
      corMark("11");
      corMark("12");
      corMark("13");
      corMark("14");
      break;
    case 4:
      corMark("16");
      corMark("17");
      corMark("18");
      corMark("19");
      break;
  }
}
function twtnwAllMark(num){
  switch (num) {
    case 1:
      twtnwMark("1");
      twtnwMark("2");
      twtnwMark("3");
      twtnwMark("4");
      break;
    case 2:
      twtnwMark("5");
      twtnwMark("6");
      break;
    case 3:
      twtnwMark("7");
      twtnwMark("8");
      twtnwMark("9");
      break;
    case 4:
      twtnwMark("10");
      twtnwMark("11");
      break;
    case 5:
      twtnwMark("12");
      twtnwMark("13");
      break;
    case 6:
      twtnwMark("16");
      twtnwMark("17");
      twtnwMark("18");
      break;
    case 7:
      twtnwMark("20");
      twtnwMark("21");
      break;
    case 8:
      twtnwMark("24");
      twtnwMark("25");
      twtnwMark("26");
      twtnwMark("27");
      break;
  }
}
function acreAllMark(num){
  switch (num) {
    case 1:
      acreMark("1");
      acreMark("2");
      acreMark("3");
      break;
    case 2:
      acreMark("4");
      acreMark("5");
      acreMark("6");
      break;
    case 3:
      acreMark("7");
      acreMark("8");
      acreMark("9");
      break;
    case 4:
      acreMark("10");
      acreMark("11");
      acreMark("12");
      break;
    case 5:
      acreMark("13");
      acreMark("14");
      acreMark("15");
      acreMark("16");
      acreMark("17");
      acreMark("18");
      break;
    case 6:
      acreMark("20");
      acreMark("21");
      break;
  }
}

//Mark Required Items
function requiredMark(item){
  var pCharm = document.getElementById('pCharm');
  var pPeace = document.getElementById('pPeace');
  var pNonexist = document.getElementById('pNonexist');
  var pConnection = document.getElementById('pConnection');

  switch(item) {
    case "charm":
      pCharm.setAttribute('src', 'img/Required/Charm_1.png')
      pCharm.setAttribute('onclick', 'requiredMark("charm1")')
      requiredDone[0] = '1';
      break;
    case 'peace':
      pPeace.setAttribute('src', 'img/Required/ProofPeace_1.png')
      pPeace.setAttribute('onclick', 'requiredMark("peace1")')
      requiredDone[1] = '1';
      break;
    case 'nonexist':
      pNonexist.setAttribute('src', 'img/Required/ProofNonexistence_1.png')
      pNonexist.setAttribute('onclick', 'requiredMark("nonexist1")')
      requiredDone[2] = '1';
      break;
    case "connection":
      pConnection.setAttribute('src', 'img/Required/ProofConnection_1.png')
      pConnection.setAttribute('onclick', 'requiredMark("connection1")')
      requiredDone[3] = '1';
      break;
    case "charm1":
      pCharm.setAttribute('src', 'img/Required/Charm_0.png')
      pCharm.setAttribute('onclick', 'requiredMark("charm")')
      requiredDone[0] = '0';
      break;
    case 'peace1':
      pPeace.setAttribute('src', 'img/Required/ProofPeace_0.png')
      pPeace.setAttribute('onclick', 'requiredMark("peace")')
      requiredDone[1] = '0';
      break;
    case 'nonexist1':
      pNonexist.setAttribute('src', 'img/Required/ProofNonexistence_0.png')
      pNonexist.setAttribute('onclick', 'requiredMark("nonexist")')
      requiredDone[2] = '0';
      break;
    case "connection1":
      pConnection.setAttribute('src', 'img/Required/ProofConnection_0.png')
      pConnection.setAttribute('onclick', 'requiredMark("connection")')
      requiredDone[3] = '0';
      break;
  }
}

//Mark Summon Items
function summonMark(item){
  var cBBall = document.getElementById('cBBall');
  var cLamp = document.getElementById('cLamp');
  var cUkulele = document.getElementById('cUkulele');
  var cFeather = document.getElementById('cFeather');

  switch(item) {
    case "bBall":
      cBBall.style.filter = "brightness(100%)";
      cBBall.setAttribute('onclick', 'summonMark("bBall1")')
      summonDone[0] = '1';
      break;
    case "lamp":
      cLamp.style.filter = "brightness(100%)";
      cLamp.setAttribute('onclick', 'summonMark("lamp1")')
      summonDone[1] = '1';
      break;
    case "ukulele":
      cUkulele.style.filter = "brightness(100%)";
      cUkulele.setAttribute('onclick', 'summonMark("ukulele1")')
      summonDone[2] = '1';
      break;
    case "feather":
      cFeather.style.filter = "brightness(100%)";
      cFeather.setAttribute('onclick', 'summonMark("feather1")')
      summonDone[3] = '1';
      break;
    case "bBall1":
      cBBall.style.filter = "brightness(40%)";
      cBBall.setAttribute('onclick', 'summonMark("bBall")')
      summonDone[0] = '0';
      break;
    case "lamp1":
      cLamp.style.filter = "brightness(40%)";
      cLamp.setAttribute('onclick', 'summonMark("lamp")')
      summonDone[1] = '0';
      break;
    case "ukulele1":
      cUkulele.style.filter = "brightness(40%)";
      cUkulele.setAttribute('onclick', 'summonMark("ukulele")')
      summonDone[2] = '0';
      break;
    case "feather1":
      cFeather.style.filter = "brightness(40%)";
      cFeather.setAttribute('onclick', 'summonMark("feather")')
      summonDone[3] = '0';
      break;
  }
}

//Function to Mark Forms
function formMark(item){
  var fValor = document.getElementById('fValor');
  var vNum = document.getElementById('valorNum');
  var fWisdom = document.getElementById('fWisdom');
  var wNum = document.getElementById('wisdomNum');
  var fLimit = document.getElementById('fLimit');
  var lNum = document.getElementById('limitNum');
  var fMaster = document.getElementById('fMaster');
  var mNum = document.getElementById('masterNum');
  var fFinal = document.getElementById('fFinal');
  var fNum = document.getElementById('finalNum');

  switch(item) {
    case "valor":
      if (vNum.innerHTML < 7){
        fValor.style.filter = "brightness(100%)";
        var num = parseInt(vNum.innerHTML) + 1;
        vNum.innerHTML = num;
      } else {
        fValor.style.filter = "brightness(40%)";
        vNum.innerHTML = 0;
      }
      formDone[0] = vNum.innerHTML;
      break;
    case "wisdom":
      if (wNum.innerHTML < 7){
        fWisdom.style.filter = "brightness(100%)";
        var num = parseInt(wNum.innerHTML) + 1;
        wNum.innerHTML = num;
      } else {
        fWisdom.style.filter = "brightness(40%)";
        wNum.innerHTML = 0;
      }
      formDone[1] = wNum.innerHTML;
      break;
    case 'limit':
      if (lNum.innerHTML < 7){
        fLimit.style.filter = "brightness(100%)";
        var num = parseInt(lNum.innerHTML) + 1;
        lNum.innerHTML = num;
      } else {
        fLimit.style.filter = "brightness(40%)";
        lNum.innerHTML = 0;
      }
      formDone[2] = lNum.innerHTML;
      break;
    case 'master':
      if (mNum.innerHTML < 7){
        fMaster.style.filter = "brightness(100%)";
        var num = parseInt(mNum.innerHTML) + 1;
        mNum.innerHTML = num;
      } else {
        fMaster.style.filter = "brightness(40%)";
        mNum.innerHTML = 0;
      }
      formDone[3] = mNum.innerHTML;
      break;
    case 'final':
      if (fNum.innerHTML < 7){
        fFinal.style.filter = "brightness(100%)";
        var num = parseInt(fNum.innerHTML) + 1;
        fNum.innerHTML = num;
      } else {
        fFinal.style.filter = "brightness(40%)";
        fNum.innerHTML = 0;
      }
      formDone[4] = fNum.innerHTML;
      break;
  }
}

//Function to Mark Magic
function magicMark(item){
  var mFire = document.getElementById('mFire');
  var fNum = document.getElementById('fireNum');
  var mBlizzard = document.getElementById('mBlizzard');
  var bNum = document.getElementById('blizzardNum');
  var mThunder = document.getElementById('mThunder');
  var tNum = document.getElementById('thunderNum');
  var mCure = document.getElementById('mCure');
  var cNum = document.getElementById('cureNum');
  var mReflect = document.getElementById('mReflect');
  var rNum = document.getElementById('reflectNum');
  var mMagnet = document.getElementById('mMagnet');
  var magNum = document.getElementById('magNum');

  switch(item) {
    case "fire":
      if (fNum.innerHTML < 3){
        mFire.style.filter = "brightness(100%)";
        var num = parseInt(fNum.innerHTML) + 1;
        fNum.innerHTML = num;
      } else {
        mFire.style.filter = "brightness(40%)";
        fNum.innerHTML = 0;
      }
      magicDone[0] = fNum.innerHTML
      break;
    case "blizzard":
      if (bNum.innerHTML < 3){
        mBlizzard.style.filter = "brightness(100%)";
        var num = parseInt(bNum.innerHTML) + 1;
        bNum.innerHTML = num;
      } else {
        mBlizzard.style.filter = "brightness(40%)";
        bNum.innerHTML = 0;
      }
      magicDone[1] = bNum.innerHTML;
      break;
    case 'thunder':
      if (tNum.innerHTML < 3){
        mThunder.style.filter = "brightness(100%)";
        var num = parseInt(tNum.innerHTML) + 1;
        tNum.innerHTML = num;
      } else {
        mThunder.style.filter = "brightness(40%)";
        tNum.innerHTML = 0;
      }
      magicDone[2] = tNum.innerHTML
      break;
    case 'cure':
      if (cNum.innerHTML < 3){
        mCure.style.filter = "brightness(100%)";
        var num = parseInt(cNum.innerHTML) + 1;
        cNum.innerHTML = num;
      } else {
        mCure.style.filter = "brightness(40%)";
        cNum.innerHTML = 0;
      }
      magicDone[3] = cNum.innerHTML
      break;
    case 'reflect':
      if (rNum.innerHTML < 3){
        mReflect.style.filter = "brightness(100%)";
        var num = parseInt(rNum.innerHTML) + 1;
        rNum.innerHTML = num;
      } else {
        mReflect.style.filter = "brightness(40%)";
        rNum.innerHTML = 0;
      }
      magicDone[4] = rNum.innerHTML
      break;
    case "magnet":
      if (magNum.innerHTML < 3){
        mMagnet.style.filter = "brightness(100%)";
        var num = parseInt(magNum.innerHTML) + 1;
        magNum.innerHTML = num;
      } else {
        mMagnet.style.filter = "brightness(40%)";
        magNum.innerHTML = 0;
      }
      magicDone[5] = magNum.innerHTML
      break;
  }
}

//Function to Mark Growth Abilities
function growthMark(item){
  var ability = item[0];
  var level = item[1];

  var aerialImg = document.getElementById('aerial');
  var dodgeImg = document.getElementById('dodge');
  var glideImg = document.getElementById('glide');
  var jumpImg = document.getElementById('jump');
  var quickImg = document.getElementById('quick');

  if (ability == 'aerial'){
    if (level == "0"){
      aerialImg.style.filter = "brightness(100%)"
      aerialImg.setAttribute('onclick', 'growthMark(["aerial", "1"])');
    } else if (level == '1'){
      aerialImg.setAttribute('src', 'img/Growth/aerial2.png')
      aerialImg.setAttribute('onclick', 'growthMark(["aerial", "2"])');
    } else if (level == '2'){
      aerialImg.setAttribute('src', 'img/Growth/aerial3.png')
      aerialImg.setAttribute('onclick', 'growthMark(["aerial", "3"])');
    } else if (level == '3'){
      aerialImg.setAttribute('src', 'img/Growth/aerial4.png')
      aerialImg.setAttribute('onclick', 'growthMark(["aerial", "4"])');
    } else if (level == '4'){
      aerialImg.style.filter = "brightness(40%)";
      aerialImg.setAttribute('src', 'img/Growth/aerial.png')
      aerialImg.setAttribute('onclick', 'growthMark(["aerial", "0"])');
    }
  }
  if (ability == 'dodge'){
    if (level == "0"){
      dodgeImg.style.filter = "brightness(100%)"
      dodgeImg.setAttribute('onclick', 'growthMark(["dodge", "1"])');
    } else if (level == '1'){
      dodgeImg.setAttribute('src', 'img/Growth/dodge2.png')
      dodgeImg.setAttribute('onclick', 'growthMark(["dodge", "2"])');
    } else if (level == '2'){
      dodgeImg.setAttribute('src', 'img/Growth/dodge3.png')
      dodgeImg.setAttribute('onclick', 'growthMark(["dodge", "3"])');
    } else if (level == '3'){
      dodgeImg.setAttribute('src', 'img/Growth/dodge4.png')
      dodgeImg.setAttribute('onclick', 'growthMark(["dodge", "4"])');
    } else if (level == '4'){
      dodgeImg.style.filter = "brightness(40%)";
      dodgeImg.setAttribute('src', 'img/Growth/dodge.png')
      dodgeImg.setAttribute('onclick', 'growthMark(["dodge", "0"])');
    }
  }
  if (ability == 'glide'){
    if (level == "0"){
      glideImg.style.filter = "brightness(100%)"
      glideImg.setAttribute('onclick', 'growthMark(["glide", "1"])');
    } else if (level == '1'){
      glideImg.setAttribute('src', 'img/Growth/glide2.png')
      glideImg.setAttribute('onclick', 'growthMark(["glide", "2"])');
    } else if (level == '2'){
      glideImg.setAttribute('src', 'img/Growth/glide3.png')
      glideImg.setAttribute('onclick', 'growthMark(["glide", "3"])');
    } else if (level == '3'){
      glideImg.setAttribute('src', 'img/Growth/glide4.png')
      glideImg.setAttribute('onclick', 'growthMark(["glide", "4"])');
    } else if (level == '4'){
      glideImg.style.filter = "brightness(40%)";
      glideImg.setAttribute('src', 'img/Growth/glide.png')
      glideImg.setAttribute('onclick', 'growthMark(["glide", "0"])');
    }
  }
  if (ability == 'jump'){
    if (level == "0"){
      jumpImg.style.filter = "brightness(100%)"
      jumpImg.setAttribute('onclick', 'growthMark(["jump", "1"])');
    } else if (level == '1'){
      jumpImg.setAttribute('src', 'img/Growth/jump2.png')
      jumpImg.setAttribute('onclick', 'growthMark(["jump", "2"])');
    } else if (level == '2'){
      jumpImg.setAttribute('src', 'img/Growth/jump3.png')
      jumpImg.setAttribute('onclick', 'growthMark(["jump", "3"])');
    } else if (level == '3'){
      jumpImg.setAttribute('src', 'img/Growth/jump4.png')
      jumpImg.setAttribute('onclick', 'growthMark(["jump", "4"])');
    } else if (level == '4'){
      jumpImg.style.filter = "brightness(40%)";
      jumpImg.setAttribute('src', 'img/Growth/jump.png')
      jumpImg.setAttribute('onclick', 'growthMark(["jump", "0"])');
    }
  }
  if (ability == 'quick'){
    if (level == "0"){
      quickImg.style.filter = "brightness(100%)"
      quickImg.setAttribute('onclick', 'growthMark(["quick", "1"])');
    } else if (level == '1'){
      quickImg.setAttribute('src', 'img/Growth/quick2.png')
      quickImg.setAttribute('onclick', 'growthMark(["quick", "2"])');
    } else if (level == '2'){
      quickImg.setAttribute('src', 'img/Growth/quick3.png')
      quickImg.setAttribute('onclick', 'growthMark(["quick", "3"])');
    } else if (level == '3'){
      quickImg.setAttribute('src', 'img/Growth/quick4.png')
      quickImg.setAttribute('onclick', 'growthMark(["quick", "4"])');
    } else if (level == '4'){
      quickImg.style.filter = "brightness(40%)";
      quickImg.setAttribute('src', 'img/Growth/quick.png')
      quickImg.setAttribute('onclick', 'growthMark(["quick", "0"])');
    }
  }
}

//Functions to Mark at Auto Only
var vToggle = '0';
var wToggle = '0';
var lToggle = '0';
var mToggle = '0';
var fToggle = '0';
$('#fValor').mousedown(function(event) {
  switch (event.which) {
    case 3:
      if (vToggle == '0'){
        document.getElementById('fValor').setAttribute('src', 'img/Forms/autovalor.png');
        vToggle = '1';
      } else {
        document.getElementById('fValor').setAttribute('src', 'img/Forms/valor.png');
        vToggle = '0';
      }
      break;
  }
})
$('#fWisdom').mousedown(function(event) {
  switch (event.which) {
    case 3:
      if (wToggle == '0'){
        document.getElementById('fWisdom').setAttribute('src', 'img/Forms/autowisdom.png');
        wToggle = '1';
      } else {
        document.getElementById('fWisdom').setAttribute('src', 'img/Forms/wisdom.png');
        wToggle = '0';
      }
      break;
  }
})
$('#fLimit').mousedown(function(event) {
  switch (event.which) {
    case 3:
      if (lToggle == '0'){
        document.getElementById('fLimit').setAttribute('src', 'img/Forms/autolimit.png');
        lToggle = '1';
      } else {
        document.getElementById('fLimit').setAttribute('src', 'img/Forms/limit.png');
        lToggle = '0';
      }
      break;
  }
})
$('#fMaster').mousedown(function(event) {
  switch (event.which) {
    case 3:
      if (mToggle == '0'){
        document.getElementById('fMaster').setAttribute('src', 'img/Forms/automaster.png');
        mToggle = '1';
      } else {
        document.getElementById('fMaster').setAttribute('src', 'img/Forms/master.png');
        mToggle = '0';
      }
      break;
  }
})
$('#fFinal').mousedown(function(event) {
  switch (event.which) {
    case 3:
      if (fToggle == '0'){
        document.getElementById('fFinal').setAttribute('src', 'img/Forms/autofinal.png');
        fToggle = '1';
      } else {
        document.getElementById('fFinal').setAttribute('src', 'img/Forms/final.png');
        fToggle = '0';
      }
      break;
  }
})
