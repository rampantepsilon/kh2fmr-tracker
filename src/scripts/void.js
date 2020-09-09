var sttVC = 0;
var ttVC = 0;
var hbVC = 0;
var dcVC = 0;
var trVC = 0;
var lodVC = 0;
var bcVC = 0;
var ocVC = 0;
var prVC = 0;
var agrVC = 0;
var htVC = 0;
var plVC = 0;
var spVC = 0;
var corVC = 0;
var twtnwVC = 0;
var acreVC = 0;
var atlVC = 0;
var dataVC = 0;
var pCharmVC = 0;
var reportVC = 0;
var tpVC = 0;

var roxasWorld = document.getElementById('worldRoxas');
var ttWorld = document.getElementById('worldTT');
var hbWorld = document.getElementById('worldHB');
var dcWorld = document.getElementById('worldDC');
var trWorld = document.getElementById('worldTR');
var lodWorld = document.getElementById('worldTLoD');
var bcWorld = document.getElementById('worldBC');
var ocWorld = document.getElementById('worldOC');
var prWorld = document.getElementById('worldPR');
var agrWorld = document.getElementById('worldAgrabah');
var htWorld = document.getElementById('worldHT');
var plWorld = document.getElementById('worldPL');
var spWorld = document.getElementById('worldSP');
var corWorld = document.getElementById('worldCoR');
var twtnwWorld = document.getElementById('worldTWTNW');
var acreWorld = document.getElementById('world100');
var atlWorld = document.getElementById('worldAtlantica');
var dataWorld = document.getElementById('worldData');
var pCharm = document.getElementById('pCharm');
var reports = document.getElementById('keyblade');
var pages = document.getElementById('pages');

roxasWorld.addEventListener('contextmenu', function(){
  if (sttVC == 0){
    document.getElementById('stt').innerHTML = 'X';
    roxasWorld.setAttribute('src','img/Disabled/simulated_twilight_town.png');
    roxasWorld.style.filter = "brightness(100%)"
    for (var i = 0; i < 24; i++){
      sttDone[i] = i+1;
    }
    document.getElementById('sttCC').innerHTML = (24 - sttDone.length);
    sttVC = 1;
  } else {
    roxasWorld.setAttribute('src','img/Locations/simulated_twilight_town.png')
    roxasWorld.style.filter = "brightness(40%)"
    document.getElementById('stt').innerHTML = '0'
    sttDone = [];
    document.getElementById('sttCC').innerHTML = (24 - sttDone.length);
    sttVC = 0;
  }
})
ttWorld.addEventListener('contextmenu', function(){
  if (ttVC == 0){
    document.getElementById('tt').innerHTML = 'X';
    ttWorld.setAttribute('src','img/Disabled/twilight_town.png');
    ttWorld.style.filter = "brightness(100%)"
    for (var i = 0; i < 46; i++){
      ttDone[i] = i+1;
    }
    document.getElementById('ttCC').innerHTML = (46 - ttDone.length);
    ttVC = 1;
  } else {
    ttWorld.setAttribute('src','img/Locations/twilight_town.png')
    ttWorld.style.filter = "brightness(40%)"
    document.getElementById('tt').innerHTML = '0'
    ttDone = [];
    document.getElementById('ttCC').innerHTML = (46 - ttDone.length);
    ttVC = 0;
  }
})
hbWorld.addEventListener('contextmenu', function(){
  if (hbVC == 0){
    document.getElementById('hb').innerHTML = 'X';
    hbWorld.setAttribute('src','img/Disabled/hollow_bastion.png');
    hbWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 34; i++){
      hbDone[i] = i+1;
    }
    document.getElementById('hbCC').innerHTML = (34 - hbDone.length);
    hbVC = 1;
  } else {
    hbWorld.setAttribute('src','img/Locations/hollow_bastion.png')
    hbWorld.style.filter = "brightness(40%)"
    document.getElementById('hb').innerHTML = '0'
    hbDone = [];
    document.getElementById('hbCC').innerHTML = (34 - hbDone.length);
    hbVC = 0;
  }
})
dcWorld.addEventListener('contextmenu', function(){
  if (dcVC == 0){
    document.getElementById('dc').innerHTML = 'X';
    dcWorld.setAttribute('src','img/Disabled/disney_castle.png');
    dcWorld.style.filter = "brightness(100%)"
    dctrDone = [];
    for (var i = 0; i < 10; i++){
      dctrDone.push(i+1);
    }
    document.getElementById('dcCC').innerHTML = (10 - dctrDone.length);
    dcVC = 1;
  } else {
    dcWorld.setAttribute('src','img/Locations/disney_castle.png')
    dcWorld.style.filter = "brightness(40%)"
    document.getElementById('dc').innerHTML = '0'
    dctrDone = [];
    document.getElementById('dcCC').innerHTML = (10 - dctrDone.length);
    dcVC = 0;
  }
})
trWorld.addEventListener('contextmenu', function(){
  if (trVC == 0){
    document.getElementById('tr').innerHTML = 'X';
    trWorld.setAttribute('src','img/Disabled/timeless_river.png');
    trWorld.style.filter = "brightness(100%)"
    trDone = [];
    for (var i = 0; i < 12; i++){
      trDone.push(i+1);
    }
    document.getElementById('trCC').innerHTML = (12 - trDone.length);
    trVC = 1;
  } else {
    trWorld.setAttribute('src','img/Locations/timeless_river.png')
    trWorld.style.filter = "brightness(40%)"
    document.getElementById('tr').innerHTML = '0'
    trDone = [];
    document.getElementById('trCC').innerHTML = (12 - trDone.length);
    trVC = 0;
  }
})
lodWorld.addEventListener('contextmenu', function(){
  if (lodVC == 0){
    document.getElementById('lod').innerHTML = 'X';
    lodWorld.setAttribute('src','img/Disabled/land_of_dragons.png');
    lodWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 28; i++){
      tlodDone[i] = i+1;
    }
    document.getElementById('lodCC').innerHTML = (28 - tlodDone.length);
    lodVC = 1;
  } else {
    lodWorld.setAttribute('src','img/Locations/land_of_dragons.png')
    lodWorld.style.filter = "brightness(40%)"
    document.getElementById('lod').innerHTML = '0'
    tlodDone = [];
    document.getElementById('lodCC').innerHTML = (28 - tlodDone.length);
    lodVC = 0;
  }
})
bcWorld.addEventListener('contextmenu', function(){
  if (bcVC == 0){
    document.getElementById('bc').innerHTML = 'X';
    bcWorld.setAttribute('src',"img/Disabled/beast's_castle.png");
    bcWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 28; i++){
      bcDone[i] = i+1;
    }
    document.getElementById('bcCC').innerHTML = (28 - bcDone.length);
    bcVC = 1;
  } else {
    bcWorld.setAttribute('src',"img/Locations/beast's_castle.png")
    bcWorld.style.filter = "brightness(40%)"
    document.getElementById('bc').innerHTML = '0'
    bcDone = [];
    document.getElementById('bcCC').innerHTML = (28 - bcDone.length);
    bcVC = 0;
  }
})
ocWorld.addEventListener('contextmenu', function(){
  if (ocVC == 0){
    document.getElementById('oc').innerHTML = 'X';
    ocWorld.setAttribute('src','img/Disabled/olympus_coliseum.png');
    ocWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 34; i++){
      ocDone[i] = i+1;
    }
    document.getElementById('ocCC').innerHTML = (34 - ocDone.length);
    ocVC = 1;
  } else {
    ocWorld.setAttribute('src','img/Locations/olympus_coliseum.png')
    ocWorld.style.filter = "brightness(40%)"
    document.getElementById('oc').innerHTML = '0'
    ocDone = [];
    document.getElementById('ocCC').innerHTML = (34 - ocDone.length);
    ocVC = 0;
  }
})
prWorld.addEventListener('contextmenu', function(){
  if (prVC == 0){
    document.getElementById('pr').innerHTML = 'X';
    prWorld.setAttribute('src','img/Disabled/port_royal.png');
    prWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 29; i++){
      prDone[i] = i+1;
    }
    document.getElementById('prCC').innerHTML = (29 - prDone.length);
    prVC = 1;
  } else {
    prWorld.setAttribute('src','img/Locations/port_royal.png')
    prWorld.style.filter = "brightness(40%)"
    document.getElementById('pr').innerHTML = '0'
    prDone = [];
    document.getElementById('prCC').innerHTML = (29 - prDone.length);
    prVC = 0;
  }
})
agrWorld.addEventListener('contextmenu', function(){
  if (agrVC == 0){
    document.getElementById('agr').innerHTML = 'X';
    agrWorld.setAttribute('src','img/Disabled/agrabah.png');
    agrWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 33; i++){
      agrDone[i] = i+1;
    }
    document.getElementById('agrCC').innerHTML = (33 - agrDone.length);
    agrVC = 1;
  } else {
    agrWorld.setAttribute('src','img/Locations/agrabah.png')
    agrWorld.style.filter = "brightness(40%)"
    document.getElementById('agr').innerHTML = '0'
    agrDone = [];
    document.getElementById('agrCC').innerHTML = (33 - agrDone.length);
    agrVC = 0;
  }
})
htWorld.addEventListener('contextmenu', function(){
  if (htVC == 0){
    document.getElementById('ht').innerHTML = 'X';
    htWorld.setAttribute('src','img/Disabled/halloween_town.png');
    htWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 21; i++){
      htDone[i] = i+1;
    }
    document.getElementById('htCC').innerHTML = (21 - htDone.length);
    htVC = 1;
  } else {
    htWorld.setAttribute('src','img/Locations/halloween_town.png')
    htWorld.style.filter = "brightness(40%)"
    document.getElementById('ht').innerHTML = '0'
    htDone = [];
    document.getElementById('htCC').innerHTML = (21 - htDone.length);
    htVC = 0;
  }
})
plWorld.addEventListener('contextmenu', function(){
  if (plVC == 0){
    document.getElementById('pl').innerHTML = 'X';
    plWorld.setAttribute('src','img/Disabled/pride_land.png');
    plWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 29; i++){
      plDone[i] = i+1;
    }
    document.getElementById('plCC').innerHTML = (29 - plDone.length);
    plVC = 1;
  } else {
    plWorld.setAttribute('src','img/Locations/pride_land.png')
    plWorld.style.filter = "brightness(40%)"
    document.getElementById('pl').innerHTML = '0'
    plDone = [];
    document.getElementById('plCC').innerHTML = (29 - plDone.length);
    plVC = 0;
  }
})
spWorld.addEventListener('contextmenu', function(){
  if (spVC == 0){
    document.getElementById('sp').innerHTML = 'X';
    spWorld.setAttribute('src','img/Disabled/space_paranoids.png');
    spWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 18; i++){
      spDone[i] = i+1;
    }
    document.getElementById('spCC').innerHTML = (18 - spDone.length);
    spVC = 1;
  } else {
    spWorld.setAttribute('src','img/Locations/space_paranoids.png')
    spWorld.style.filter = "brightness(40%)"
    document.getElementById('sp').innerHTML = '0'
    spDone = [];
    document.getElementById('spCC').innerHTML = (18 - spDone.length);
    spVC = 0;
  }
})
corWorld.addEventListener('contextmenu', function(){
  if (corVC == 0){
    document.getElementById('cor').innerHTML = 'X';
    corWorld.setAttribute('src','img/Disabled/cavern_of_remembrance.png');
    corWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 21; i++){
      corDone[i] = i+1;
    }
    document.getElementById('corCC').innerHTML = (21 - corDone.length);
    corVC = 1;
  } else {
    corWorld.setAttribute('src','img/Locations/cavern_of_remembrance.png')
    corWorld.style.filter = "brightness(40%)"
    document.getElementById('cor').innerHTML = '0'
    corDone = [];
    document.getElementById('corCC').innerHTML = (21 - corDone.length);
    corVC = 0;
  }
})
twtnwWorld.addEventListener('contextmenu', function(){
  if (twtnwVC == 0){
    document.getElementById('twtnw').innerHTML = 'X';
    twtnwWorld.setAttribute('src','img/Disabled/the_world_that_never_was.png');
    twtnwWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 28; i++){
      twtnwDone[i] = i+1;
    }
    document.getElementById('twtnwCC').innerHTML = (28 - twtnwDone.length);
    twtnwVC = 1;
  } else {
    twtnwWorld.setAttribute('src','img/Locations/the_world_that_never_was.png')
    twtnwWorld.style.filter = "brightness(40%)"
    document.getElementById('twtnw').innerHTML = '0'
    twtnwDone = [];
    document.getElementById('twtnwCC').innerHTML = (28 - twtnwDone.length);
    twtnwVC = 0;
  }
})
acreWorld.addEventListener('contextmenu', function(){
  if (acreVC == 0){
    document.getElementById('acre').innerHTML = 'X';
    acreWorld.setAttribute('src','img/Disabled/100_acre_wood.png');
    acreWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 22; i++){
      acreDone[i] = i+1;
    }
    document.getElementById('acreCC').innerHTML = (22 - acreDone.length);
    acreVC = 1;
  } else {
    acreWorld.setAttribute('src','img/Locations/100_acre_wood.png')
    acreWorld.style.filter = "brightness(40%)"
    document.getElementById('acre').innerHTML = '0'
    acreDone = [];
    document.getElementById('acreCC').innerHTML = (22 - acreDone.length);
    acreVC = 0;
  }
})
atlWorld.addEventListener('contextmenu', function(){
  if (atlVC == 0){
    document.getElementById('atl').innerHTML = 'X';
    atlWorld.setAttribute('src','img/Disabled/atlantica.png');
    atlWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 3; i++){
      atlDone[i] = i+1;
    }
    document.getElementById('atlCC').innerHTML = (3 - atlDone.length);
    atlVC = 1;
  } else {
    atlWorld.setAttribute('src','img/Locations/atlantica.png')
    atlWorld.style.filter = "brightness(40%)"
    document.getElementById('atl').innerHTML = '0'
    atlDone = [];
    document.getElementById('atlCC').innerHTML = (3 - atlDone.length);
    atlVC = 0;
  }
})
dataWorld.addEventListener('contextmenu', function(){
  if (dataVC == 0){
    document.getElementById('dataNum').innerHTML = 'X';
    dataWorld.setAttribute('src','img/Disabled/replica_data.png');
    dataWorld.style.filter = "brightness(100%)";
    for (var i = 0; i < 13; i++){
      dataDone[i] = i+1;
    }
    document.getElementById('dataCC').innerHTML = (13 - dataDone.length);
    dataVC = 1;
  } else {
    dataWorld.setAttribute('src','img/Locations/replica_data.png')
    dataWorld.style.filter = "brightness(40%)"
    document.getElementById('dataNum').innerHTML = '0'
    dataDone = [];
    document.getElementById('dataCC').innerHTML = (13 - dataDone.length);
    dataVC = 0;
  }
})
pCharm.addEventListener('contextmenu', function(){
  if (pCharmVC == 0){
    pCharm.setAttribute('src','img/Required/Charm_2.png');
    pCharmVC = 1;
  } else {
    pCharm.setAttribute('src','img/Required/Charm_0.png');
    pCharmVC = 0;
  }
})
reports.addEventListener('contextmenu', function(){
  if (reportVC == 0){
    document.getElementById('keyNum').innerHTML = 'X';
    reports.setAttribute('src','img/secret_reports_1.png');
    reports.style.filter = "brightness(100%)";
    reportVC = 1;
  } else {
    document.getElementById('keyNum').innerHTML = '0';
    reports.setAttribute('src','img/secret_reports.png');
    reports.style.filter = "brightness(40%)";
    reportVC = 0;
  }
})
pages.addEventListener('contextmenu', function(){
  if (tpVC == 0){
    document.getElementById('pageNum').innerHTML = 'X';
    pages.setAttribute('src','img/pages_2.png');
    tpVC = 1;
  } else {
    document.getElementById('pageNum').innerHTML = '0';
    pages.setAttribute('src','img/pages_0.png');
    tpVC = 0;
  }
})
