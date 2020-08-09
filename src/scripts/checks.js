//Keyblades
const keyblade = [
  `<ul>
    <li><div id='1' onclick='keybladeMark("1")'>Kingdom Key</div></li>
    <li><div id='2' onclick='keybladeMark("2")'>Star Seeker</div></li>
    <li><div id='3' onclick='keybladeMark("3")'>Hidden Dragon</div></li>
    <li><div id='4' onclick='keybladeMark("4")'>Hero's Crest</div></li>
    <li><div id='5' onclick='keybladeMark("5")'>Monochrome</div></li>
    <li><div id='6' onclick='keybladeMark("6")'>Follow the Wind</div></li>
    <li><div id='7' onclick='keybladeMark("7")'>Circle of Life</div></li>
    <li><div id='8' onclick='keybladeMark("8")'>Oathkeeper</div></li>
    <li><div id='9' onclick='keybladeMark("9")'>Photon Debugger</div></li>
    <li><div id='10' onclick='keybladeMark("10")'>Rumbling Rose</div></li>
    <li><div id='11' onclick='keybladeMark("11")'>Mysterious Abyss</div></li>
    <li><div id='12' onclick='keybladeMark("12")'>Wishing Lamp</div></li>
    <li><div id='13' onclick='keybladeMark("13")'>Sweet Memories</div></li>
    <li><div id='14' onclick='keybladeMark("14")'>Guardian Soul</div></li>
    <li><div id='15' onclick='keybladeMark("15")'>Decisive Pumpkin</div></li>
    <li><div id='16' onclick='keybladeMark("16")'>Gull Wing</div></li>
    <li><div id='17' onclick='keybladeMark("17")'>Sleeping Lion</div></li>
    <li><div id='18' onclick='keybladeMark("18")'>Bond of Flame</div></li>
    <li><div id='19' onclick='keybladeMark("19")'>Two Become One</div></li>
    <li><div id='20' onclick='keybladeMark("20")'>Oblivion</div></li>
    <li><div id='21' onclick='keybladeMark("21")'>Fatal Crest</div></li>
    <li><div id='22' onclick='keybladeMark("22")'>Winner's Proof</div></li>
    <li><div id='23' onclick='keybladeMark("23")'>Ultima Weapon</div></li>
    <li><div id='24' onclick='keybladeMark("24")'>Fenrir</div></li>
  </ul>`
]

/*Code to Copy
<li id='group'><div id='groupTitle'>Awakening</div>
  <ul>
    <li><div id='' onclick='Mark("")'></div></li>
    <li><div id='' onclick='Mark("")'></div></li>
    <li><div id='' onclick='Mark("")'></div></li>
    <li><div id='' onclick='Mark("")'><img src='img/keyhole_0.png' id='Key' width='16px' height='16px'> </div></li>
  </ul>
</li>*/

/* Worlds List */
//Simulated Twilight Town
const stt = [
  `<ul>
    <li><div id='1' onclick='sttMark("1")'>Map Popup</div></li>
    <li><div id='2' onclick='sttMark("2")'>Munny Pouch Popup</div></li>
    <li id='group'><div id='groupTitle'>Awakening</div>
      <ul>
        <li><div id='3' onclick='sttMark("3")'>Dusks Bonus</div></li>
        <li><div id='4' onclick='sttMark("4")'>Tutorial Chest</div></li>
        <li><div id='5' onclick='sttMark("5")'>2nd Chest</div></li>
        <li><div id='6' onclick='sttMark("6")'>Twilight Thorn Bonus</div></li>
      </ul>
    </li>
    <li><div id='7' onclick='sttMark("7")'>Axel 1 Bonus</div></li>
    <li><div id='8' onclick='sttMark("8")'>Struggle Trophy Bonus</div></li>
    <li id='group'><div id='groupTitle'>Station</div>
      <ul>
        <li><div id='9' onclick='sttMark("9")'>Corner Near Entrance</div></li>
        <li><div id='10' onclick='sttMark("10")'>Far Corner</div></li>
        <li><div id='11' onclick='sttMark("11")'>Between Tracks</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Sunset</div>
      <ul>
        <li><div id='12' onclick='sttMark("12")'>Lower Level</div></li>
        <li><div id='13' onclick='sttMark("13")'>Rooftop</div></li>
        <li><div id='14' onclick='sttMark("14")'>Near Bridge</div></li>
        <li><div id='15' onclick='sttMark("15")'>Before Hill</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Mansion</div>
      <ul>
        <li><div id='16' onclick='sttMark("16")'>Center</div></li>
        <li><div id='17' onclick='sttMark("17")'>Left Stairs</div></li>
        <li><div id='18' onclick='sttMark("18")'>Upper Walkway</div></li>
        <li><div id='19' onclick='sttMark("19")'>Dining Room Near Door</div></li>
        <li><div id='20' onclick='sttMark("20")'>Dining Room Corner</div></li>
        <li><div id='21' onclick='sttMark("21")'>Namine's Room Popups</div></li>
        <li><div id='22' onclick='sttMark("22")'>Library Chest</div></li>
        <li><div id='23' onclick='sttMark("23")'>Axel 2 Bonus</div></li>
        <li><div id='24' onclick='sttMark("24")'><img src='img/keyhole_0.png' id='sttKey' width='16px' height='16px'> Basement Last Chest</div></li>
      </ul>
    </li>
    <li><div id='25' onclick='sttMark("25")'>Data Roxas</div></li>
  </ul>`
]

//Twilight Town
const tt = [
  `<ul>
    <li id='group'><div id='groupTitle'>Mansion Gate</div>
      <ul>
        <li><div id='1' onclick='ttMark("1")'>Corner</div></li>
        <li><div id='2' onclick='ttMark("2")'>Near Door</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Tram Common</div>
      <ul>
        <li><div id='3' onclick='ttMark("3")'>Near Tunnel</div></li>
        <li><div id='4' onclick='ttMark("4")'>Broom</div></li>
        <li><div id='5' onclick='ttMark("5")'>Near Woods</div></li>
        <li><div id='6' onclick='ttMark("6")'>Near Bees</div></li>
        <li><div id='7' onclick='ttMark("7")'>Rooftop</div></li>
        <li><div id='8' onclick='ttMark("8")'>Back Rooftop</div></li>
        <li><div id='9' onclick='ttMark("9")'>Rooftop Near Woods</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Woods</div>
      <ul>
        <li><div id='10' onclick='ttMark("10")'>Near Vivi</div></li>
        <li><div id='11' onclick='ttMark("11")'>Near Mansion</div></li>
        <li><div id='12' onclick='ttMark("12")'>Other Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Station</div>
      <ul>
        <li><div id='13' onclick='ttMark("13")'>Fight Popups</div></li>
        <li><div id='14' onclick='ttMark("14")'>Left Front</div></li>
        <li><div id='15' onclick='ttMark("15")'>Left Back</div></li>
        <li><div id='16' onclick='ttMark("16")'>Right Corner</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Tower Outside</div>
      <ul>
        <li><div id='17' onclick='ttMark("17")'>Right</div></li>
        <li><div id='18' onclick='ttMark("18")'>Left Chest</div></li>
        <li><div id='19' onclick='ttMark("19")'>Left Corner</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Tower Entry</div>
      <ul>
        <li><div id='20' onclick='ttMark("20")'>Ether Chest</div></li>
        <li><div id='21' onclick='ttMark("21")'>Under Stairs</div></li>
      </ul>
    </li>
    <li><div id='22' onclick='ttMark("22")'>Yen Sid Big Chest</div></li>
    <li id='group'><div id='groupTitle'>Tower</div>
      <ul>
        <li><div id='23' onclick='ttMark("23")'>Popups</div></li>
        <li><div id='24' onclick='ttMark("24")'><img src='img/keyhole_0.png' id='tt1Key' width='16px' height='16px'> Small Chest</div></li>
      </ul>
    </li>
    <li><div id='25' onclick='ttMark("25")'>Sandlot Fight Popup</div></li>
    <li><div id='26' onclick='ttMark("26")'><img src='img/keyhole_0.png' id='tt2Key' width='16px' height='16px'> 2nd Visit Popups</div></li>
    <li id='group'><div id='groupTitle'>Underground</div>
      <ul>
        <li><div id='27' onclick='ttMark("27")'>Near 4</div></li>
        <li><div id='28' onclick='ttMark("28")'>Middle Gamblers</div></li>
        <li><div id='29' onclick='ttMark("29")'>Between 2 & 3</div></li>
        <li><div id='30' onclick='ttMark("30")'>Lower Middle</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Tunnelway</div>
      <ul>
        <li><div id='31' onclick='ttMark("31")'>Open Area</div></li>
        <li><div id='32' onclick='ttMark("32")'>Near Exit</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Sunset</div>
      <ul>
        <li><div id='33' onclick='ttMark("33")'>Near Tram Track</div></li>
        <li><div id='34' onclick='ttMark("34")'>Below Rooftop Chest</div></li>
        <li><div id='35' onclick='ttMark("35")'>Rooftop</div></li>
        <li><div id='36' onclick='ttMark("36")'>End of Alley</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Mansion</div>
      <ul>
        <li><div id='37' onclick='ttMark("37")'>Middle</div></li>
        <li><div id='38' onclick='ttMark("38")'>Right Stairs</div></li>
        <li><div id='39' onclick='ttMark("39")'>Upper Walkway</div></li>
        <li><div id='40' onclick='ttMark("40")'>Dining Room Right Corner</div></li>
        <li><div id='41' onclick='ttMark("41")'>Dining Room Back</div></li>
        <li><div id='42' onclick='ttMark("42")'>Library Chest</div></li>
        <li><div id='43' onclick='ttMark("43")'>Corridor Chest</div></li>
      </ul>
    </li>
    <li><div id='44' onclick='ttMark("44")'>Beam Popup</div></li>
    <li><div id='45' onclick='ttMark("45")'>Axel Fight Bonus</div></li>
    <li><div id='46' onclick='ttMark("46")'><img src='img/keyhole_0.png' id='tt3Key' width='16px' height='16px'> Axel Fight Popup</div></li>
    <li><div id='47' onclick='ttMark("47")'>Data Axel</div></li>
  </ul>`
]

//Hollow Bastion
const hb = [
  `<ul>
    <li><div id='1' onclick='hbMark("1")'>Marketplace Map Popup</div></li>
    <li id='group'><div id='groupTitle'>Borough</div>
      <ul>
        <li><div id='2' onclick='hbMark("2")'>Top Ledge</div></li>
        <li><div id='3' onclick='hbMark("3")'>Drive Recovery Chest</div></li>
        <li><div id='4' onclick='hbMark("4")'>Near Bailey</div></li>
        <li><div id='5' onclick='hbMark("5")'>Ground</div></li>
        <li><div id='6' onclick='hbMark("6")'>Merlin's House</div></li>
      </ul>
    </li>
    <li><div id='7' onclick='hbMark("7")'>Merlin's House Popups</div></li>
    <li id='group'><div id='groupTitle'>Bailey</div>
      <ul>
        <li><div id='8' onclick='hbMark("8")'>Bonus</div></li>
        <li><div id='9' onclick='hbMark("9")'><img src='img/keyhole_0.png' id='hb1Key' width='16px' height='16px'> Popup</div></li>
      </ul>
    </li>
    <li><div id='10' onclick='hbMark("10")'>Chicken Little Popup</div></li>
    <li id='group'><div id='groupTitle'>Postern</div>
      <ul>
        <li><div id='11' onclick='hbMark("11")'>On Yellow Pipe</div></li>
        <li><div id='12' onclick='hbMark("12")'>Big Chest</div></li>
        <li><div id='13' onclick='hbMark("13")'>Lower Level</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Corridors</div>
      <ul>
        <li><div id='14' onclick='hbMark("14")'>1st Left Path</div></li>
        <li><div id='15' onclick='hbMark("15")'>2nd Left Path</div></li>
        <li><div id='16' onclick='hbMark("16")'>Near Middle</div></li>
        <li><div id='17' onclick='hbMark("17")'>Right Path</div></li>
      </ul>
    </li>
    <li><div id='18' onclick='hbMark("18")'>Ansem's Study Chest</div></li>
    <li><div id='19' onclick='hbMark("19")'>DTD Popups</div></li>
    <li><div id='20' onclick='hbMark("20")'>Stitch Big Chest</div></li>
    <li><div id='21' onclick='hbMark("21")'>Demyx Bonus</div></li>
    <li><div id='22' onclick='hbMark("22")'>FF Fights Popup</div></li>
    <li id='group'><div id='groupTitle'>Before 1K</div>
      <ul>
        <li><div id='23' onclick='hbMark("23")'>Front Big Chest</div></li>
        <li><div id='24' onclick='hbMark("24")'>Back Big Chest</div></li>
        <li><div id='25' onclick='hbMark("25")'>Near Save</div></li>
        <li><div id='26' onclick='hbMark("26")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>1K Heartless</div>
      <ul>
        <li><div id='27' onclick='hbMark("27")'>Bonus</div></li>
        <li><div id='28' onclick='hbMark("28")'><img src='img/keyhole_0.png' id='hb2Key' width='16px' height='16px'> Popups</div></li>
      </ul>
    </li>
    <li><div id='29' onclick='hbMark("29")'>Gull Wing</div></li>
    <li><div id='30' onclick='hbMark("30")'>Heartless Manufactory</div></li>
    <li id='group'><div id='groupTitle'>Near GoA Entrance</div>
      <ul>
        <li><div id='31' onclick='hbMark("31")'>1</div></li>
        <li><div id='32' onclick='hbMark("32")'>2</div></li>
      </ul>
    </li>
    <li><div id='33' onclick='hbMark("33")'>Mushroom XIII</div></li>
    <li><div id='34' onclick='hbMark("34")'>Sephiroth</div></li>
    <li><div id='35' onclick='hbMark("35")'>Data Demyx</div></li>
  </ul>`
]

//Disney Castle & Timeless River
const dctr = [
  `<ul>
    <li id='group'><div id='groupTitle'>Courtyard</div>
      <ul>
        <li><div id='1' onclick='dctrMark("1")'>Flute Cow</div></li>
        <li><div id='2' onclick='dctrMark("2")'>Corner</div></li>
        <li><div id='3' onclick='dctrMark("3")'>Middle Ground</div></li>
        <li><div id='4' onclick='dctrMark("4")'>Middle Top</div></li>
        <li><div id='5' onclick='dctrMark("5")'>Trombone Dog</div></li>
        <li><div id='6' onclick='dctrMark("6")'>Trumpet Pig</div></li>
        <li><div id='7' onclick='dctrMark("7")'>Near Door</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Library</div>
      <ul>
        <li><div id='8' onclick='dctrMark("8")'>Big Chest</div></li>
        <li><div id='9' onclick='dctrMark("9")'>Popup</div></li>
      </ul>
    </li>
    <li><div id='10' onclick='dctrMark("10")'><img src='img/keyhole_0.png' id='dcKey' width='16px' height='16px'> Minnie Escort Bonus</li>
    <li id='group'><div id='groupTitle'>Hill</div>
      <ul>
        <li><div id='11' onclick='dctrMark("11")'>Big Chest</div></li>
        <li><div id='12' onclick='dctrMark("12")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Pier</div>
      <ul>
        <li><div id='13' onclick='dctrMark("13")'>Under Tree</div></li>
        <li><div id='14' onclick='dctrMark("14")'>Near Waterway</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Waterway</div>
      <ul>
        <li><div id='15' onclick='dctrMark("15")'>Right Chest</div></li>
        <li><div id='16' onclick='dctrMark("16")'>Middle Chest</div></li>
        <li><div id='17' onclick='dctrMark("17")'>End Chest</div></li>
      </ul>
    </li>
    <li><div id='18' onclick='dctrMark("18")'>Windows Popup</div></li>
    <li><div id='19' onclick='dctrMark("19")'>Steamboat Bonus</div></li>
    <li><div id='20' onclick='dctrMark("20")'>Pete Bonus</div></li>
    <li><div id='21' onclick='dctrMark("21")'><img src='img/keyhole_0.png' id='trKey' width='16px' height='16px'> Final TR Popups</div></li>
    <li><div id='22' onclick='dctrMark("22")'>Marluxia</div></li>
    <li><div id='23' onclick='dctrMark("23")'>Terra</div></li>
  </ul>`
]

//The Land of Dragons
const tlod = [
  `<ul>
    <li id='group'><div id='groupTitle'>Bamboo</div>
      <ul>
        <li><div id='1' onclick='tlodMark("1")'>Ether Chest</div></li>
        <li><div id='2' onclick='tlodMark("2")'>Back Chest</div></li>
        <li><div id='3' onclick='tlodMark("3")'>Near Rock</div></li>
      </ul>
    </li>
    <li><div id='4' onclick='tlodMark("4")'>Map Popup</div></li>
    <li><div id='5' onclick='tlodMark("5")'>3rd Mission Popup</div></li>
    <li id='group'><div id='groupTitle'>Checkpoint</div>
      <ul>
        <li><div id='6' onclick='tlodMark("6")'>Near Gate</div></li>
        <li><div id='7' onclick='tlodMark("7")'>Near Mountain</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Mountain</div>
      <ul>
        <li><div id='8' onclick='tlodMark("8")'>Lowest Chest</div></li>
        <li><div id='9' onclick='tlodMark("9")'>Highest Chest</div></li>
        <li><div id='10' onclick='tlodMark("10")'>Ledge Left</div></li>
        <li><div id='11' onclick='tlodMark("11")'>Ledge Right</div></li>
      </ul>
    </li>
    <li><div id='12' onclick='tlodMark("12")'>Village Map Popup</div></li>
    <li id='group'><div id='groupTitle'>Cave</div>
      <ul>
        <li><div id='13' onclick='tlodMark("13")'>1st Chest</div></li>
        <li><div id='14' onclick='tlodMark("14")'>2nd Chest</div></li>
        <li><div id='15' onclick='tlodMark("15")'>Fight Bonus</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Ridge</div>
      <ul>
        <li><div id='16' onclick='tlodMark("16")'>Right Chest</div></li>
        <li><div id='17' onclick='tlodMark("17")'>Back Chest</div></li>
      </ul>
    </li>
    <li><div id='18' onclick='tlodMark("18")'>Shan Yu Bonus</div></li>
    <li><div id='19' onclick='tlodMark("19")'><img src='img/keyhole_0.png' id='tlod1Key' width='16px' height='16px'> Hidden Dragon Popup</div></li>
    <li id='group'><div id='groupTitle'>Throne Room</div>
      <ul>
        <li><div id='20' onclick='tlodMark("20")'>Left Big Chest</div></li>
        <li><div id='21' onclick='tlodMark("21")'>Right Big Chest</div></li>
        <li><div id='22' onclick='tlodMark("22")'>Left Small Chest</div></li>
        <li><div id='23' onclick='tlodMark("23")'>Right Small Chest</div></li>
        <li><div id='24' onclick='tlodMark("24")'>Ledge Left</div></li>
        <li><div id='25' onclick='tlodMark("25")'>Ledge Middle Left</div></li>
        <li><div id='26' onclick='tlodMark("26")'>Ledge Middle Right</div></li>
        <li><div id='27' onclick='tlodMark("27")'>Ledge Right</div></li>
      </ul>
    </li>
    <li><div id='28' onclick='tlodMark("28")'><img src='img/keyhole_0.png' id='tlod2Key' width='16px' height='16px'> Storm Rider Bonus</div></li>
    <li><div id='29' onclick='tlodMark("29")'>Data Xigbar</div></li>
  </ul>`
]

//Beast's Castle
const bc = [
  `<ul>
    <li id='group'><div id='groupTitle'>Courtyard</div>
      <ul>
        <li><div id='1' onclick='bcMark("1")'>Left</div></li>
        <li><div id='2' onclick='bcMark("2")'>Near Bridge</div></li>
        <li><div id='3' onclick='bcMark("3")'>Right</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Belle</div>
      <ul>
        <li><div id='4' onclick='bcMark("4")'>Big Chest</div></li>
        <li><div id='5' onclick='bcMark("5")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>East Wing</div>
      <ul>
        <li><div id='6' onclick='bcMark("6")'>Hallway</div></li>
        <li><div id='7' onclick='bcMark("7")'>Near Stairs</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>West Hall</div>
      <ul>
        <li><div id='8' onclick='bcMark("8")'>Armor</div></li>
        <li><div id='9' onclick='bcMark("9")'>Right Stairs</div></li>
        <li><div id='10' onclick='bcMark("10")'>Left Stairs</div></li>
        <li><div id='11' onclick='bcMark("11")'>Near Wardrobe</div></li>
      </ul>
    </li>
    <li><div id='12' onclick='bcMark("12")'>Thresholder Bonus</div></li>
    <li id='group'><div id='groupTitle'>Dungeon</div>
      <ul>
        <li><div id='13' onclick='bcMark("13")'>Big Chest</div></li>
        <li><div id='14' onclick='bcMark("14")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Cogsworth</div>
      <ul>
        <li><div id='15' onclick='bcMark("15")'>Upper Left</div></li>
        <li><div id='16' onclick='bcMark("16")'>Upper Right</div></li>
        <li><div id='17' onclick='bcMark("17")'>Before Exit</div></li>
      </ul>
    </li>
    <li><div id='18' onclick='bcMark("18")'>West Hall Top of Stairs</div></li>
    <li id='group'><div id='groupTitle'>West Wing</div>
      <ul>
        <li><div id='19' onclick='bcMark("19")'>1st Chest</div></li>
        <li><div id='20' onclick='bcMark("20")'>Upstairs</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Beast</div>
      <ul>
        <li><div id='21' onclick='bcMark("21")'>Bonus</div></li>
        <li><div id='22' onclick='bcMark("22")'>Popup</div></li>
        <li><div id='23' onclick='bcMark("23")'>Chest</div></li>
      </ul>
    </li>
    <li><div id='24' onclick='bcMark("24")'>Dark Thorn Bonus</div></li>
    <li><div id='25' onclick='bcMark("25")'><img src='img/keyhole_0.png' id='bc1Key' width='16px' height='16px'> Cure Popup</div></li>
    <li><div id='26' onclick='bcMark("26")'>Rumbling Rose Popup</div></li>
    <li><div id='27' onclick='bcMark("27")'>Xaldin Bonus</div></li>
    <li><div id='28' onclick='bcMark("28")'><img src='img/keyhole_0.png' id='bc2Key' width='16px' height='16px'> Report 4 Popup</div></li>
    <li><div id='29' onclick='bcMark("29")'>Data Xaldin</div></li>
  </ul>`
]

//Olympus Coliseum
const oc = []

//Port Royal
const pr = [
  `<ul>
    <li id='group'><div id='groupTitle'>Rampart</div>
      <ul>
        <li><div id='1' onclick='prMark("1")'>Big Chest</div></li>
        <li><div id='2' onclick='prMark("2")'>Cannon Chest</div></li>
        <li><div id='3' onclick='prMark("3")'>Near Puzzle</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Town</div>
      <ul>
        <li><div id='4' onclick='prMark("4")'>In Boxes 1</div></li>
        <li><div id='5' onclick='prMark("5")'>Next To Boxes 1</div></li>
        <li><div id='6' onclick='prMark("6")'>In Boxes 2</div></li>
        <li><div id='7' onclick='prMark("7")'>Next To Boxes 2</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Cave Mouth</div>
      <ul>
        <li><div id='8' onclick='prMark("8")'>Chest In Shadows</div></li>
        <li><div id='9' onclick='prMark("9")'>Chest In Light</div></li>
      </ul>
    </li>
    <li><div id='10' onclick='prMark("10")'>Timed Pirates Popup</div></li>
    <li><div id='11' onclick='prMark("11")'>Boat Fight Bonus</div></li>
    <li id='group'><div id='groupTitle'>Powder Store</div>
      <ul>
        <li><div id='12' onclick='prMark("12")'>Left Boxes</div></li>
        <li><div id='13' onclick='prMark("13")'>Right Boxes</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle'>Moonlight Nook</div>
      <ul>
        <li><div id='14' onclick='prMark("14")'>Left</div></li>
        <li><div id='15' onclick='prMark("15")'>Front Right</div></li>
        <li><div id='16' onclick='prMark("16")'>Back Right</div></li>
      </ul>
    </li>
    <li><div id='17' onclick='prMark("17")'>Barbossa Bonus</div></li>
    <li><div id='18' onclick='prMark("18")'><img src='img/keyhole_0.png' id='pr1Key' width='16px' height='16px'> Follow the Wind Popup</div></li>
    <li><div id='19' onclick='prMark("19")'>Grim Reaper 1 Bonus</div></li>
    <li><div id='20' onclick='prMark("20")'>Peter Pan Chest</div></li>
    <li id='group'><div id='groupTitle'>Seadrift Row</div>
      <ul>
        <li><div id='21' onclick='prMark("21")'>1st Chest</div></li>
        <li><div id='22' onclick='prMark("22")'>Broken Ship</div></li>
        <li><div id='23' onclick='prMark("23")'>Near Keep Entrance</div></li>
        <li><div id='24' onclick='prMark("24")'>Under Ship</div></li>
        <li><div id='25' onclick='prMark("25")'>On Ship</div></li>
        <li><div id='26' onclick='prMark("26")'>Corner</div></li>
      </ul>
    </li>
    <li><div id='27' onclick='prMark("27")'>Medallion Popups</div></li>
    <li><div id='28' onclick='prMark("28")'>Grim Reaper 2 Bonus</div></li>
    <li><div id='29' onclick='prMark("29")'><img src='img/keyhole_0.png' id='pr2Key' width='16px' height='16px'> Report 6 Popup</div></li>
    <li><div id='30' onclick='prMark("30")'>Data Luxord</div></li>
  </ul>`
]

const agrabah = []

const ht = []

const pl = []

const sp = []

const cor = []

const twtnw = []

const acre = []

const atlantica = []
