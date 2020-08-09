function keybladeMark(num){
  var keybladeTemp = [];
  if (!keybladeDone.includes(num)){
    keybladeDone.push(num);
    document.getElementById('keyNum').innerHTML = keybladeDone.length;
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000';
    if (keybladeDone.length == 24){
      document.getElementById('keyblade').setAttribute('src', 'img/Required/kingdomkey_1.png')
    }
  } else {
    for (var i = 0; i < keybladeDone.length; i++){
      if (keybladeDone[i] != num){
        keybladeTemp.push(keybladeDone[i]);
      }
    }
    keybladeDone = keybladeTemp;
    document.getElementById('keyNum').innerHTML = keybladeDone.length;
    document.getElementById(num).style.textDecoration = 'initial';
    document.getElementById(num).style.backgroundColor = 'initial';
    document.getElementById(num).style.color = '#fff';
    if (keybladeDone.length == 24){
      document.getElementById('keyblade').setAttribute('src', 'img/Required/kingdomkey_0.png')
    }
  }
}
//Mark Kingdom Key by default
keybladeMark('1');

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
    }
    //Keeping incase I change courses (Would mean a lot more work)
    /*if (sttDone.length == '25'){
      document.getElementById('worldRoxas').setAttribute('src', 'img/Locations/Roxas_2.png');
    }*/
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
    }
  }
  document.getElementById('sttLeft').innerHTML = (25 - sttDone.length);
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
    }
    if (num == '26'){
      document.getElementById('tt2Key').setAttribute('src', 'img/keyhole_1.png')
    }
    if (num == '46'){
      document.getElementById('worldTT').style.filter = "brightness(100%)"
      document.getElementById('tt3Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '26'){
      document.getElementById('tt2Key').setAttribute('src', 'img/keyhole_0.png')
    }
    if (num == '46'){
      document.getElementById('worldTT').style.filter = "brightness(40%)"
      document.getElementById('tt3Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('ttLeft').innerHTML = (47 - ttDone.length);
}
function hbMark(num){
  var hbTemp = [];
  if (!hbDone.includes(num)){
    hbDone.push(num);
    document.getElementById(num).style.textDecoration = 'line-through';
    document.getElementById(num).style.backgroundColor = '#fff';
    document.getElementById(num).style.color = '#000'
    if (num == '9'){
      document.getElementById('hb1Key').setAttribute('src', 'img/keyhole_1.png')
    }
    if (num == '28'){
      document.getElementById('worldHB').style.filter = "brightness(100%)"
      document.getElementById('hb2Key').setAttribute('src', 'img/keyhole_1.png')
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
    if (num == '9'){
      document.getElementById('hb1Key').setAttribute('src', 'img/keyhole_0.png')
    }
    if (num == '28'){
      document.getElementById('worldHB').style.filter = "brightness(40%)"
      document.getElementById('hb2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('hbLeft').innerHTML = (35 - hbDone.length);
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
    }
    if (num == '21'){
      document.getElementById('worldTR').style.filter = "brightness(100%)"
      document.getElementById('trKey').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '21'){
      document.getElementById('worldTR').style.filter = "brightness(40%)"
      document.getElementById('trKey').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('dctrLeft').innerHTML = (23 - dctrDone.length);
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
    }
    if (num == '28'){
      document.getElementById('worldTLoD').style.filter = "brightness(100%)"
      document.getElementById('tlod2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '28'){
      document.getElementById('worldTLoD').style.filter = "brightness(40%)"
      document.getElementById('tlod2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('tlodLeft').innerHTML = (29 - tlodDone.length);
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
    }
    if (num == '28'){
      document.getElementById('worldBC').style.filter = "brightness(100%)"
      document.getElementById('bc2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '28'){
      document.getElementById('worldBC').style.filter = "brightness(40%)"
      document.getElementById('bc2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('bcLeft').innerHTML = (29 - bcDone.length);
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
    }
    if (num == '30'){
      document.getElementById('worldOC').style.filter = "brightness(100%)"
      document.getElementById('oc2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '30'){
      document.getElementById('worldOC').style.filter = "brightness(40%)"
      document.getElementById('oc2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('ocLeft').innerHTML = (35 - ocDone.length);
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
    }
    if (num == '29'){
      document.getElementById('worldPR').style.filter = "brightness(100%)"
      document.getElementById('pr2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '29'){
      document.getElementById('worldPR').style.filter = "brightness(40%)"
      document.getElementById('pr2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('prLeft').innerHTML = (30 - prDone.length);
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
    }
    if (num == '33'){
      document.getElementById('worldAgrabah').style.filter = "brightness(100%)"
      document.getElementById('agr2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '33'){
      document.getElementById('worldAgrabah').style.filter = "brightness(40%)"
      document.getElementById('agr2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('agrLeft').innerHTML = (34 - agrDone.length);
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
    }
    if (num == '21'){
      document.getElementById('worldHT').style.filter = "brightness(100%)"
      document.getElementById('ht2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '21'){
      document.getElementById('worldHT').style.filter = "brightness(40%)"
      document.getElementById('ht2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('htLeft').innerHTML = (22 - htDone.length);
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
    }
    if (num == '29'){
      document.getElementById('worldPL').style.filter = "brightness(100%)"
      document.getElementById('pl2Key').setAttribute('src', 'img/keyhole_1.png')
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
    }
    if (num == '29'){
      document.getElementById('worldPL').style.filter = "brightness(40%)"
      document.getElementById('pl2Key').setAttribute('src', 'img/keyhole_0.png')
    }
  }
  document.getElementById('plLeft').innerHTML = (30 - plDone.length);
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
      break;
    case 'peace':
      pPeace.setAttribute('src', 'img/Required/ProofPeace_1.png')
      pPeace.setAttribute('onclick', 'requiredMark("peace1")')
      break;
    case 'nonexist':
      pNonexist.setAttribute('src', 'img/Required/ProofNonexistence_1.png')
      pNonexist.setAttribute('onclick', 'requiredMark("nonexist1")')
      break;
    case "connection":
      pConnection.setAttribute('src', 'img/Required/ProofConnection_1.png')
      pConnection.setAttribute('onclick', 'requiredMark("connection1")')
      break;
    case "charm1":
      pCharm.setAttribute('src', 'img/Required/Charm_0.png')
      pCharm.setAttribute('onclick', 'requiredMark("charm")')
      break;
    case 'peace1':
      pPeace.setAttribute('src', 'img/Required/ProofPeace_0.png')
      pPeace.setAttribute('onclick', 'requiredMark("peace")')
      break;
    case 'nonexist1':
      pNonexist.setAttribute('src', 'img/Required/ProofNonexistence_0.png')
      pNonexist.setAttribute('onclick', 'requiredMark("nonexist")')
      break;
    case "connection1":
      pConnection.setAttribute('src', 'img/Required/ProofConnection_0.png')
      pConnection.setAttribute('onclick', 'requiredMark("connection")')
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
      cBBall.setAttribute('src', 'img/Charms/charmbaseball_1.png')
      cBBall.setAttribute('onclick', 'summonMark("bBall1")')
      break;
    case "lamp":
      cLamp.setAttribute('src', 'img/Charms/charmlamp_1.png')
      cLamp.setAttribute('onclick', 'summonMark("lamp1")')
      break;
    case "ukulele":
      cUkulele.setAttribute('src', 'img/Charms/charmukulele_1.png')
      cUkulele.setAttribute('onclick', 'summonMark("ukulele1")')
      break;
    case "feather":
      cFeather.setAttribute('src', 'img/Charms/charmfeather_1.png')
      cFeather.setAttribute('onclick', 'summonMark("feather1")')
      break;
    case "bBall1":
      cBBall.setAttribute('src', 'img/Charms/charmbaseball_0.png')
      cBBall.setAttribute('onclick', 'summonMark("bBall")')
      break;
    case "lamp1":
      cLamp.setAttribute('src', 'img/Charms/charmlamp_0.png')
      cLamp.setAttribute('onclick', 'summonMark("lamp")')
      break;
    case "ukulele1":
      cUkulele.setAttribute('src', 'img/Charms/charmukulele_0.png')
      cUkulele.setAttribute('onclick', 'summonMark("ukulele")')
      break;
    case "feather1":
      cFeather.setAttribute('src', 'img/Charms/charmfeather_0.png')
      cFeather.setAttribute('onclick', 'summonMark("feather")')
      break;
  }
}

//Function to Mark Forms
function formMark(item){
  var fValor = document.getElementById('fValor');
  var fWisdom = document.getElementById('fWisdom');
  var fLimit = document.getElementById('fLimit');
  var fMaster = document.getElementById('fMaster');
  var fFinal = document.getElementById('fFinal');

  switch(item) {
    case "valor":
      fValor.setAttribute('src', 'img/Forms/formvalor_1.png')
      fValor.setAttribute('onclick', 'formMark("valor1")')
      break;
    case "valor1":
      fValor.setAttribute('src', 'img/Forms/formvalor_0.png')
      fValor.setAttribute('onclick', 'formMark("valor")')
      break;
    case "wisdom":
      fWisdom.setAttribute('src', 'img/Forms/formwisdom_1.png')
      fWisdom.setAttribute('onclick', 'formMark("wisdom1")')
      break;
    case "wisdom1":
      fWisdom.setAttribute('src', 'img/Forms/formwisdom_0.png')
      fWisdom.setAttribute('onclick', 'formMark("wisdom")')
      break;
    case 'limit':
      fLimit.setAttribute('src', 'img/Forms/formlimit_1.png')
      fLimit.setAttribute('onclick', 'formMark("limit1")')
      break;
    case 'limit1':
      fLimit.setAttribute('src', 'img/Forms/formlimit_0.png')
      fLimit.setAttribute('onclick', 'formMark("limit")')
      break;
    case 'master':
      fMaster.setAttribute('src', 'img/Forms/formmaster_1.png')
      fMaster.setAttribute('onclick', 'formMark("master1")')
      break;
    case 'master1':
      fMaster.setAttribute('src', 'img/Forms/formmaster_0.png')
      fMaster.setAttribute('onclick', 'formMark("master")')
      break;
    case 'final':
      fFinal.setAttribute('src', 'img/Forms/formfinal_1.png')
      fFinal.setAttribute('onclick', 'formMark("final1")')
      break;
    case 'final1':
      fFinal.setAttribute('src', 'img/Forms/formfinal_0.png')
      fFinal.setAttribute('onclick', 'formMark("final")')
      break;
  }
}

//Function to Mark Magic
function magicMark(item){
  var mFire = document.getElementById('mFire');
  var mBlizzard = document.getElementById('mBlizzard');
  var mThunder = document.getElementById('mThunder');
  var mCure = document.getElementById('mCure');
  var mReflect = document.getElementById('mReflect');
  var mMagnet = document.getElementById('mMagnet');

  switch(item) {
    case "fire":
      mFire.setAttribute('src', 'img/Magic/magicfire_1.png')
      mFire.setAttribute('onclick', 'magicMark("fire1")')
      break;
    case "fire1":
      mFire.setAttribute('src', 'img/Magic/magicfire_0.png')
      mFire.setAttribute('onclick', 'magicMark("fire")')
      break;
    case "blizzard":
      mBlizzard.setAttribute('src', 'img/Magic/magicblizzard_1.png')
      mBlizzard.setAttribute('onclick', 'magicMark("blizzard1")')
      break;
    case "blizzard1":
      mBlizzard.setAttribute('src', 'img/Magic/magicblizzard_0.png')
      mBlizzard.setAttribute('onclick', 'magicMark("blizzard")')
      break;
    case 'thunder':
      mThunder.setAttribute('src', 'img/Magic/magicthunder_1.png')
      mThunder.setAttribute('onclick', 'magicMark("thunder1")')
      break;
    case 'thunder1':
      mThunder.setAttribute('src', 'img/Magic/magicthunder_0.png')
      mThunder.setAttribute('onclick', 'magicMark("thunder")')
      break;
    case 'cure':
      mCure.setAttribute('src', 'img/Magic/magiccure_1.png')
      mCure.setAttribute('onclick', 'magicMark("cure1")')
      break;
    case 'cure1':
      mCure.setAttribute('src', 'img/Magic/magiccure_0.png')
      mCure.setAttribute('onclick', 'magicMark("cure")')
      break;
    case 'reflect':
      mReflect.setAttribute('src', 'img/Magic/magicreflect_1.png')
      mReflect.setAttribute('onclick', 'magicMark("reflect1")')
      break;
    case 'reflect1':
      mReflect.setAttribute('src', 'img/Magic/magicreflect_0.png')
      mReflect.setAttribute('onclick', 'magicMark("reflect")')
      break;
    case 'magnet':
      mMagnet.setAttribute('src', 'img/Magic/magicmagnet_1.png')
      mMagnet.setAttribute('onclick', 'magicMark("magnet1")')
      break;
    case 'magnet1':
      mMagnet.setAttribute('src', 'img/Magic/magicmagnet_0.png')
      mMagnet.setAttribute('onclick', 'magicMark("magnet")')
      break;
  }
}

//Mark Pages
function pageMark(){
  var counter = document.getElementById('pageNum');
  var pages = document.getElementById('pages');
  var currentCount = document.getElementById('pageNum').innerHTML;

  switch (currentCount) {
    case '0':
      counter.innerHTML = '1';
      pages.setAttribute('src', 'img/pages_1.png');
      break;
    case '1':
      counter.innerHTML = '2';
      break;
    case '2':
      counter.innerHTML = '3';
      break;
    case '3':
      counter.innerHTML = '4';
      break;
    case '4':
      counter.innerHTML = '5';
      break;
    case '5':
      counter.innerHTML = '0';
      pages.setAttribute('src', 'img/pages_0.png');
      break;
  }
}
