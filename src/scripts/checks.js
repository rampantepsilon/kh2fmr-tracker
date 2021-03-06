/* Worlds List */
//Simulated Twilight Town
const stt = [
  `<ul>
    <li><div id='1' onclick='sttMark("1")'>Map Popup</div></li>
    <li><div id='2' onclick='sttMark("2")'>Munny Pouch Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='sttAllMark(1)'>Awakening</div>
      <ul>
        <li><div id='3' onclick='sttMark("3")'>Dusks Bonus</div></li>
        <li><div id='4' onclick='sttMark("4")'>Tutorial Chest</div></li>
        <li><div id='5' onclick='sttMark("5")'>2nd Chest</div></li>
        <li><div id='6' onclick='sttMark("6")'>Twilight Thorn Bonus</div></li>
      </ul>
    </li>
    <li><div id='7' onclick='sttMark("7")'>Axel 1 Bonus</div></li>
    <li><div id='8' onclick='sttMark("8")'>Struggle Trophy Bonus</div></li>
    <li id='group'><div id='groupTitle' onclick='sttAllMark(2)'>Station</div>
      <ul>
        <li><div id='9' onclick='sttMark("9")'>Corner Near Entrance</div></li>
        <li><div id='10' onclick='sttMark("10")'>Far Corner</div></li>
        <li><div id='11' onclick='sttMark("11")'>Between Tracks</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='sttAllMark(3)'>Sunset</div>
      <ul>
        <li><div id='12' onclick='sttMark("12")'>Lower Level</div></li>
        <li><div id='13' onclick='sttMark("13")'>Rooftop</div></li>
        <li><div id='14' onclick='sttMark("14")'>Near Bridge</div></li>
        <li><div id='15' onclick='sttMark("15")'>Before Hill</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='sttAllMark(4)'>Mansion</div>
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
  </ul>`
]

//Twilight Town
const tt = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(1)'>Mansion Gate</div>
      <ul>
        <li><div id='1' onclick='ttMark("1")'>Corner</div></li>
        <li><div id='2' onclick='ttMark("2")'>Near Door</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(2)'>Tram Common</div>
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
    <li id='group'><div id='groupTitle' onclick='ttAllMark(3)'>Woods</div>
      <ul>
        <li><div id='10' onclick='ttMark("10")'>Near Vivi</div></li>
        <li><div id='11' onclick='ttMark("11")'>Near Mansion</div></li>
        <li><div id='12' onclick='ttMark("12")'>Other Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(4)'>Station</div>
      <ul>
        <li><div id='13' onclick='ttMark("13")'>Fight Popups</div></li>
        <li><div id='14' onclick='ttMark("14")'>Left Front</div></li>
        <li><div id='15' onclick='ttMark("15")'>Left Back</div></li>
        <li><div id='16' onclick='ttMark("16")'>Right Corner</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(5)'>Tower Outside</div>
      <ul>
        <li><div id='17' onclick='ttMark("17")'>Right</div></li>
        <li><div id='18' onclick='ttMark("18")'>Left Chest</div></li>
        <li><div id='19' onclick='ttMark("19")'>Left Corner</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(6)'>Tower Entry</div>
      <ul>
        <li><div id='20' onclick='ttMark("20")'>Ether Chest</div></li>
        <li><div id='21' onclick='ttMark("21")'>Under Stairs</div></li>
      </ul>
    </li>
    <li><div id='22' onclick='ttMark("22")'>Yen Sid Big Chest</div></li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(7)'>Tower</div>
      <ul>
        <li><div id='23' onclick='ttMark("23")'>Popups</div></li>
        <li><div id='24' onclick='ttMark("24")'><img src='img/keyhole_0.png' id='tt1Key' width='16px' height='16px'> Small Chest</div></li>
      </ul>
    </li>
    <li><div id='25' onclick='ttMark("25")'>Sandlot Fight Popup</div></li>
    <li><div id='26' onclick='ttMark("26")'><img src='img/keyhole_0.png' id='tt2Key' width='16px' height='16px'> 2nd Visit Popups</div></li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(8)'>Underground</div>
      <ul>
        <li><div id='27' onclick='ttMark("27")'>Near 4</div></li>
        <li><div id='28' onclick='ttMark("28")'>Middle Gamblers</div></li>
        <li><div id='29' onclick='ttMark("29")'>Between 2 & 3</div></li>
        <li><div id='30' onclick='ttMark("30")'>Lower Middle</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(9)'>Tunnelway</div>
      <ul>
        <li><div id='31' onclick='ttMark("31")'>Open Area</div></li>
        <li><div id='32' onclick='ttMark("32")'>Near Exit</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(10)'>Sunset</div>
      <ul>
        <li><div id='33' onclick='ttMark("33")'>Near Tram Track</div></li>
        <li><div id='34' onclick='ttMark("34")'>Below Rooftop Chest</div></li>
        <li><div id='35' onclick='ttMark("35")'>Rooftop</div></li>
        <li><div id='36' onclick='ttMark("36")'>End of Alley</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ttAllMark(11)'>Mansion</div>
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
  </ul>`
]

//Hollow Bastion
const hb = [
  `<ul>
    <li><div id='1' onclick='hbMark("1")'>Marketplace Map Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='hbAllMark(1)'>Borough</div>
      <ul>
        <li><div id='2' onclick='hbMark("2")'>Top Ledge</div></li>
        <li><div id='3' onclick='hbMark("3")'>Drive Recovery Chest</div></li>
        <li><div id='4' onclick='hbMark("4")'>Near Bailey</div></li>
        <li><div id='5' onclick='hbMark("5")'>Ground</div></li>
        <li><div id='6' onclick='hbMark("6")'>Merlin's House</div></li>
      </ul>
    </li>
    <li><div id='7' onclick='hbMark("7")'>Merlin's House Popups</div></li>
    <li id='group'><div id='groupTitle' onclick='hbAllMark(2)'>Bailey</div>
      <ul>
        <li><div id='8' onclick='hbMark("8")'>Bonus</div></li>
        <li><div id='9' onclick='hbMark("9")'>Popup</div></li>
      </ul>
    </li>
    <li><div id='10' onclick='hbMark("10")'><img src='img/keyhole_0.png' id='hb1Key' width='16px' height='16px'> Chicken Little Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='hbAllMark(3)'>Postern</div>
      <ul>
        <li><div id='11' onclick='hbMark("11")'>On Yellow Pipe</div></li>
        <li><div id='12' onclick='hbMark("12")'>Big Chest</div></li>
        <li><div id='13' onclick='hbMark("13")'>Lower Level</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='hbAllMark(4)'>Corridors</div>
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
    <li id='group'><div id='groupTitle' onclick='hbAllMark(5)'>Before 1K</div>
      <ul>
        <li><div id='23' onclick='hbMark("23")'>Front Big Chest</div></li>
        <li><div id='24' onclick='hbMark("24")'>Back Big Chest</div></li>
        <li><div id='25' onclick='hbMark("25")'>Near Save</div></li>
        <li><div id='26' onclick='hbMark("26")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='hbAllMark(6)'>1K Heartless</div>
      <ul>
        <li><div id='27' onclick='hbMark("27")'>Bonus</div></li>
        <li><div id='28' onclick='hbMark("28")'><img src='img/keyhole_0.png' id='hb2Key' width='16px' height='16px'> Popups</div></li>
      </ul>
    </li>
    <li><div id='29' onclick='hbMark("29")'>Gull Wing</div></li>
    <li><div id='30' onclick='hbMark("30")'>Heartless Manufactory</div></li>
    <li id='group'><div id='groupTitle' onclick='hbAllMark(7)'>Near GoA Entrance</div>
      <ul>
        <li><div id='31' onclick='hbMark("31")'>1</div></li>
        <li><div id='32' onclick='hbMark("32")'>2</div></li>
      </ul>
    </li>
    <li><div id='33' onclick='hbMark("33")'>Mushroom XIII</div></li>
    <li><div id='34' onclick='hbMark("34")'>Sephiroth</div></li>
  </ul>`
]

//Disney Castle & Timeless River
const dctr = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='dctrAllMark(1)'>Courtyard</div>
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
    <li id='group'><div id='groupTitle' onclick='dctrAllMark(2)'>Library</div>
      <ul>
        <li><div id='8' onclick='dctrMark("8")'>Big Chest</div></li>
        <li><div id='9' onclick='dctrMark("9")'>Popup</div></li>
      </ul>
    </li>
    <li><div id='10' onclick='dctrMark("10")'><img src='img/keyhole_0.png' id='dcKey' width='16px' height='16px'> Minnie Escort Bonus</li>
  </ul>`
]
const tr = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='trAllMark(3)'>Hill</div>
      <ul>
        <li><div id='1' onclick='trMark("1")'>Big Chest</div></li>
        <li><div id='2' onclick='trMark("2")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='trAllMark(4)'>Pier</div>
      <ul>
        <li><div id='3' onclick='trMark("3")'>Under Tree</div></li>
        <li><div id='4' onclick='trMark("4")'>Near Waterway</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='trAllMark(5)'>Waterway</div>
      <ul>
        <li><div id='5' onclick='trMark("5")'>Right Chest</div></li>
        <li><div id='6' onclick='trMark("6")'>Middle Chest</div></li>
        <li><div id='7' onclick='trMark("7")'>End Chest</div></li>
      </ul>
    </li>
    <li><div id='8' onclick='trMark("8")'>Windows Popup</div></li>
    <li><div id='9' onclick='trMark("9")'>Steamboat Bonus</div></li>
    <li><div id='10' onclick='trMark("10")'>Pete Bonus</div></li>
    <li><div id='11' onclick='trMark("11")'><img src='img/keyhole_0.png' id='trKey' width='16px' height='16px'> Final TR Popups</div></li>
    <li><div id='12' onclick='trMark("12")'>Terra</div></li>
  </ul>`
]

//The Land of Dragons
const tlod = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='tlodAllMark(1)'>Bamboo</div>
      <ul>
        <li><div id='1' onclick='tlodMark("1")'>Ether Chest</div></li>
        <li><div id='2' onclick='tlodMark("2")'>Back Chest</div></li>
        <li><div id='3' onclick='tlodMark("3")'>Near Rock</div></li>
      </ul>
    </li>
    <li><div id='4' onclick='tlodMark("4")'>Map Popup</div></li>
    <li><div id='5' onclick='tlodMark("5")'>3rd Mission Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='tlodAllMark(2)'>Checkpoint</div>
      <ul>
        <li><div id='6' onclick='tlodMark("6")'>Near Gate</div></li>
        <li><div id='7' onclick='tlodMark("7")'>Near Mountain</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='tlodAllMark(3)'>Mountain</div>
      <ul>
        <li><div id='8' onclick='tlodMark("8")'>Lowest Chest</div></li>
        <li><div id='9' onclick='tlodMark("9")'>Highest Chest</div></li>
        <li><div id='10' onclick='tlodMark("10")'>Ledge Left</div></li>
        <li><div id='11' onclick='tlodMark("11")'>Ledge Right</div></li>
      </ul>
    </li>
    <li><div id='12' onclick='tlodMark("12")'>Village Map Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='tlodAllMark(4)'>Cave</div>
      <ul>
        <li><div id='13' onclick='tlodMark("13")'>1st Chest</div></li>
        <li><div id='14' onclick='tlodMark("14")'>2nd Chest</div></li>
        <li><div id='15' onclick='tlodMark("15")'>Fight Bonus</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='tlodAllMark(5)'>Ridge</div>
      <ul>
        <li><div id='16' onclick='tlodMark("16")'>Right Chest</div></li>
        <li><div id='17' onclick='tlodMark("17")'>Back Chest</div></li>
      </ul>
    </li>
    <li><div id='18' onclick='tlodMark("18")'>Shan Yu Bonus</div></li>
    <li><div id='19' onclick='tlodMark("19")'><img src='img/keyhole_0.png' id='tlod1Key' width='16px' height='16px'> Hidden Dragon Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='tlodAllMark(6)'>Throne Room</div>
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
  </ul>`
]

//Beast's Castle
const bc = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(1)'>Courtyard</div>
      <ul>
        <li><div id='1' onclick='bcMark("1")'>Left</div></li>
        <li><div id='2' onclick='bcMark("2")'>Near Bridge</div></li>
        <li><div id='3' onclick='bcMark("3")'>Right</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(2)'>Belle</div>
      <ul>
        <li><div id='4' onclick='bcMark("4")'>Big Chest</div></li>
        <li><div id='5' onclick='bcMark("5")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(3)'>East Wing</div>
      <ul>
        <li><div id='6' onclick='bcMark("6")'>Hallway</div></li>
        <li><div id='7' onclick='bcMark("7")'>Near Stairs</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(4)'>West Hall</div>
      <ul>
        <li><div id='8' onclick='bcMark("8")'>Armor (x2)</div></li>
        <li><div id='9' onclick='bcMark("9")'>Right Stairs</div></li>
        <li><div id='10' onclick='bcMark("10")'>Left Stairs</div></li>
        <li><div id='11' onclick='bcMark("11")'>Near Wardrobe</div></li>
      </ul>
    </li>
    <li><div id='12' onclick='bcMark("12")'>Thresholder Bonus</div></li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(5)'>Dungeon</div>
      <ul>
        <li><div id='13' onclick='bcMark("13")'>Big Chest</div></li>
        <li><div id='14' onclick='bcMark("14")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(6)'>Cogsworth</div>
      <ul>
        <li><div id='15' onclick='bcMark("15")'>Upper Left</div></li>
        <li><div id='16' onclick='bcMark("16")'>Upper Right</div></li>
        <li><div id='17' onclick='bcMark("17")'>Before Exit</div></li>
      </ul>
    </li>
    <li><div id='18' onclick='bcMark("18")'>West Hall Top of Stairs</div></li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(7)'>West Wing</div>
      <ul>
        <li><div id='19' onclick='bcMark("19")'>1st Chest</div></li>
        <li><div id='20' onclick='bcMark("20")'>Upstairs</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='bcAllMark(8)'>Beast</div>
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
  </ul>`
]

//Olympus Coliseum
const oc = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='ocAllMark(1)'>Passage</div>
      <ul>
        <li><div id='1' onclick='ocMark("1")'>Under Torch</div></li>
        <li><div id='2' onclick='ocMark("2")'>Outside Path</div></li>
        <li><div id='3' onclick='ocMark("3")'>Outside Path Stairs</div></li>
        <li><div id='4' onclick='ocMark("4")'>Main Path</div></li>
        <li><div id='5' onclick='ocMark("5")'>Near Inner Chamber</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ocAllMark(2)'>Inner Chamber</div>
      <ul>
        <li><div id='6' onclick='ocMark("6")'>Big Chest</div></li>
        <li><div id='7' onclick='ocMark("7")'>Small Chest</div></li>
      </ul>
    </li>
    <li><div id='8' onclick='ocMark("8")'>Cerberus Bonus</div></li>
    <li><div id='9' onclick='ocMark("9")'>Coliseum Map Popup</div></li>
    <li><div id='10' onclick='ocMark("10")'>Urns Bonus</div></li>
    <li><div id='11' onclick='ocMark("11")'>Underworld Power Boost Chest</div></li>
    <li id='group'><div id='groupTitle' onclick='ocAllMark(3)'>Caverns Entrance</div>
      <ul>
        <li><div id='12' onclick='ocMark("12")'>First Chest</div></li>
        <li><div id='13' onclick='ocMark("13")'>Upper Left</div></li>
        <li><div id='14' onclick='ocMark("14")'>Upper Right</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ocAllMark(4)'>Lost Road</div>
      <ul>
        <li><div id='15' onclick='ocMark("15")'>Ether Chest</div></li>
        <li><div id='16' onclick='ocMark("16")'>Near Caverns Entrance</div></li>
        <li><div id='17' onclick='ocMark("17")'>Next To Platform</div></li>
        <li><div id='18' onclick='ocMark("18")'>Path To Atrium</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='ocAllMark(5)'>Atrium</div>
      <ul>
        <li><div id='19' onclick='ocMark("19")'>Lower Level</div></li>
        <li><div id='20' onclick='ocMark("20")'>Lone Ledge</div></li>
      </ul>
    </li>
    <li><div id='21' onclick='ocMark("21")'>Demyx Popups</div></li>
    <li id='group'><div id='groupTitle' onclick='ocAllMark(6)'>The Lock</div>
      <ul>
        <li><div id='22' onclick='ocMark("22")'>Big Chest</div></li>
        <li><div id='23' onclick='ocMark("23")'>Small Right</div></li>
        <li><div id='24' onclick='ocMark("24")'>Small Left</div></li>
      </ul>
    <li>
    <li><div id='25' onclick='ocMark("25")'>Pete Bonus</div></li>
    <li><div id='26' onclick='ocMark("26")'>Hydra Bonus</div></li>
    <li><div id='27' onclick='ocMark("27")'><img src='img/keyhole_0.png' id='oc1Key' width='16px' height='16px'> Hero's Crest Popup</div></li>
    <li><div id='28' onclick='ocMark("28")'>Auron's Statue Popup</div></li>
    <li><div id='29' onclick='ocMark("29")'>Hades Bonus</div></li>
    <li><div id='30' onclick='ocMark("30")'><img src='img/keyhole_0.png' id='oc2Key' width='16px' height='16px'> Guardian Soul Popup</div></li>
    <li><div id='31' onclick='ocMark("31")'>Pain & Panic Cup</div></li>
    <li><div id='32' onclick='ocMark("32")'>Cerberus Cup</div></li>
    <li><div id='33' onclick='ocMark("33")'>Titan Cup</div></li>
    <li><div id='34' onclick='ocMark("34")'>Goddess of Fate Cup</div></li>
  </ul>`
]

//Port Royal
const pr = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='prAllMark(1)'>Rampart</div>
      <ul>
        <li><div id='1' onclick='prMark("1")'>Big Chest</div></li>
        <li><div id='2' onclick='prMark("2")'>Cannon Chest</div></li>
        <li><div id='3' onclick='prMark("3")'>Near Puzzle</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='prAllMark(2)'>Town</div>
      <ul>
        <li><div id='4' onclick='prMark("4")'>In Boxes 1</div></li>
        <li><div id='5' onclick='prMark("5")'>Next To Boxes 1</div></li>
        <li><div id='6' onclick='prMark("6")'>In Boxes 2</div></li>
        <li><div id='7' onclick='prMark("7")'>Next To Boxes 2</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='prAllMark(3)'>Cave Mouth</div>
      <ul>
        <li><div id='8' onclick='prMark("8")'>Chest In Shadows</div></li>
        <li><div id='9' onclick='prMark("9")'>Chest In Light</div></li>
      </ul>
    </li>
    <li><div id='10' onclick='prMark("10")'>Timed Pirates Popup</div></li>
    <li><div id='11' onclick='prMark("11")'>Boat Fight Bonus</div></li>
    <li id='group'><div id='groupTitle' onclick='prAllMark(4)'>Powder Store</div>
      <ul>
        <li><div id='12' onclick='prMark("12")'>Left Boxes</div></li>
        <li><div id='13' onclick='prMark("13")'>Right Boxes</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='prAllMark(5)'>Moonlight Nook</div>
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
    <li id='group'><div id='groupTitle' onclick='prAllMark(6)'>Seadrift Row</div>
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
  </ul>`
]

//Agrabah
const agrabah = [
  `<ul>
    <li><div id='1' onclick='agrMark("1")'>Map Popup</div></li>
    <li><div id='2' onclick='agrMark("2")'>Near Stairs</div></li>
    <li><div id='3' onclick='agrMark("3")'>2nd Chest Upper Level</div></li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(1)'>Above Market</div>
      <ul>
        <li><div id='4' onclick='agrMark("4")'>Triangle Bottom Right</div></li>
        <li><div id='5' onclick='agrMark("5")'>Triangle Bottom Left</div></li>
        <li><div id='6' onclick='agrMark("6")'>Triangle Center</div></li>
      </ul>
    </li>
    <li><div id='7' onclick='agrMark("7")'>Back Corner</div></li>
    <li><div id='8' onclick='agrMark("8")'>Ledge Across From Corner</div></li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(2)'>Bazaar</div>
      <ul>
        <li><div id='9' onclick='agrMark("9")'>On Ledge</div></li>
        <li><div id='10' onclick='agrMark("10")'>Near Middle</div></li>
        <li><div id='11' onclick='agrMark("11")'>Near Wall Stalls</div></li>
        <li><div id='12' onclick='agrMark("12")'>Hidden In Stalls</div></li>
        <li><div id='13' onclick='agrMark("13")'>Near Exit</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(3)'>Palace Walls</div>
      <ul>
        <li><div id='14' onclick='agrMark("14")'>Big Chest</div></li>
        <li><div id='15' onclick='agrMark("15")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(4)'>Cave Entrance</div>
      <ul>
        <li><div id='16' onclick='agrMark("16")'>Left</div></li>
        <li><div id='17' onclick='agrMark("17")'>Right</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(5)'>Cave</div>
      <ul>
        <li><div id='18' onclick='agrMark("18")'>First Middle</div></li>
        <li><div id='19' onclick='agrMark("19")'>Left</div></li>
        <li><div id='20' onclick='agrMark("20")'>Right</div></li>
        <li><div id='21' onclick='agrMark("21")'>Last Left</div></li>
      </ul>
    </li>
    <li><div id='22' onclick='agrMark("22")'>Abu Escort Bonus</div></li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(6)'>Chasm</div>
      <ul>
        <li><div id='23' onclick='agrMark("23")'>Big Chest</div></li>
        <li><div id='24' onclick='agrMark("24")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(7)'>Treasure Room</div>
      <ul>
        <li><div id='25' onclick='agrMark("25")'>Bonus</div></li>
        <li><div id='28' onclick='agrMark("28")'>Right</div></li>
        <li><div id='29' onclick='agrMark("29")'>Left</div></li>
      </ul>
    </li>
    <li><div id='26' onclick='agrMark("26")'>Twin Lords Bonus</div></li>
    <li><div id='27' onclick='agrMark("27")'><img src='img/keyhole_0.png' id='agr1Key' width='16px' height='16px'> Lamp Charm Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='agrAllMark(8)'>Ruined Chamber</div>
      <ul>
        <li><div id='30' onclick='agrMark("30")'>Left</div></li>
        <li><div id='31' onclick='agrMark("31")'>Right</div></li>
      </ul>
    </li>
    <li><div id='32' onclick='agrMark("32")'>Genie Jafar Bonus</div></li>
    <li><div id='33' onclick='agrMark("33")'><img src='img/keyhole_0.png' id='agr2Key' width='16px' height='16px'> Wishing Lamp Popup</div></li>
  </ul>`
]

//Halloween Town
const ht = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='htAllMark(1)'>Graveyard</div>
    	<ul>
    		<li><div id='1' onclick='htMark("1")'>Near Gate</div></li>
    		<li><div id='2' onclick='htMark("2")'>Near Graves</div></li>
    	</ul>
    </li>
    <li><div id='3' onclick='htMark("3")'>Lab Big Chest</div></li>
    <li id='group'><div id='groupTitle' onclick='htAllMark(2)'>Town Square</div>
    	<ul>
    		<li><div id='4' onclick='htMark("4")'>Near Guillotine</div></li>
    		<li><div id='5' onclick='htMark("5")'>Near Gate</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='htAllMark(3)'>Hinterlands</div>
    	<ul>
    		<li><div id='6' onclick='htMark("6")'>Front Right</div></li>
    		<li><div id='7' onclick='htMark("7")'>Back Right</div></li>
    		<li><div id='8' onclick='htMark("8")'>Left</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='htAllMark(4)'>Cane Lane</div>
    	<ul>
    		<li><div id='9' onclick='htMark("9")'>Left Ledge</div></li>
    		<li><div id='10' onclick='htMark("10")'>Right Ledge</div></li>
    		<li><div id='11' onclick='htMark("11")'>Near Gate</div></li>
    		<li><div id='12' onclick='htMark("12")'>Front Of House</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='htAllMark(5)'>Santa</div>
    	<ul>
    		<li><div id='13' onclick='htMark("13")'>Big Chest</div></li>
    		<li><div id='14' onclick='htMark("14")'>Small Chest</div></li>
    	</ul>
    </li>
    <li><div id='15' onclick='htMark("15")'>Prison Keeper bonus</div></li>
    <li><div id='16' onclick='htMark("16")'>Oogie bonus</div></li>
    <li><div id='17' onclick='htMark("17")'><img src='img/keyhole_0.png' id='ht1Key' width='16px' height='16px'> Magnet popup</div></li>
    <li><div id='18' onclick='htMark("18")'>Present popup</div></li>
    <li><div id='19' onclick='htMark("19")'>Decoy Presents popup</div></li>
    <li><div id='20' onclick='htMark("20")'>Experiment bonus</div></li>
    <li><div id='21' onclick='htMark("21")'><img src='img/keyhole_0.png' id='ht2Key' width='16px' height='16px'> Decisive Pumpkin popup</div></li>
  </ul>`
]

//Pride Lands
const pl = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='plAllMark(1)'>Gorge</div>
    	<ul>
    		<li><div id='1' onclick='plMark("1")'>Big Chest</div></li>
    		<li><div id='2' onclick='plMark("2")'>Small Right</div></li>
    		<li><div id='3' onclick='plMark("3")'>Small Left</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='plAllMark(2)'>Graveyard</div>
    	<ul>
    		<li><div id='4' onclick='plMark("4")'>Under Mammoth Tusks</div></li>
    		<li><div id='5' onclick='plMark("5")'>Leftmost Chest</div></li>
    		<li><div id='6' onclick='plMark("6")'>Middle Lower</div></li>
    		<li><div id='7' onclick='plMark("7")'>Middle Upper</div></li>
    		<li><div id='8' onclick='plMark("8")'>Near Savannah</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='plAllMark(3)'>Pride Rock</div>
    	<ul>
    		<li><div id='9' onclick='plMark("9")'>Big Chest</div></li>
    		<li><div id='10' onclick='plMark("10")'>Near Wall</div></li>
    		<li><div id='11' onclick='plMark("11")'>Under Rock</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='plAllMark(4)'>Valley</div>
    	<ul>
    		<li><div id='12' onclick='plMark("12")'>Center Big Rock</div></li>
    		<li><div id='13' onclick='plMark("13")'>Center Smaller Rock</div></li>
    		<li><div id='14' onclick='plMark("14")'>Right Wall</div></li>
    		<li><div id='15' onclick='plMark("15")'>Right Wall Near Tree</div></li>
    		<li><div id='16' onclick='plMark("16")'>Under Tree</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='plAllMark(5)'>Wastelands</div>
    	<ul>
    		<li><div id='17' onclick='plMark("17")'>1st Chest</div></li>
    		<li><div id='18' onclick='plMark("18")'>2nd Chest</div></li>
    		<li><div id='19' onclick='plMark("19")'>3rd Chest</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='plAllMark(6)'>Jungle</div>
    	<ul>
    		<li><div id='20' onclick='plMark("20")'>Under Rree</div></li>
    		<li><div id='21' onclick='plMark("21")'>Ant Hills</div></li>
    		<li><div id='22' onclick='plMark("22")'>Enemy Spawn</div></li>
    	</ul>
    </li>
    <li><div id='23' onclick='plMark("23")'>Simba Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='plAllMark(7)'>Oasis</div>
    	<ul>
    		<li><div id='24' onclick='plMark("24")'>Near Cliff</div></li>
    		<li><div id='25' onclick='plMark("25")'>Torn Page Chest</div></li>
    		<li><div id='26' onclick='plMark("26")'>Waterfall Chest</div></li>
    	</ul>
    </li>
    <li><div id='27' onclick='plMark("27")'>Scar Bonus</div></li>
    <li><div id='28' onclick='plMark("28")'><img src='img/keyhole_0.png' id='pl1Key' width='16px' height='16px'> Fire Popup</div></li>
    <li><div id='29' onclick='plMark("29")'><img src='img/keyhole_0.png' id='pl2Key' width='16px' height='16px'> Groundshaker Bonus</div></li>
  </ul>`
]

//Space Paranoids
const sp = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='spAllMark(1)'>Pit Cell</div>
    	<ul>
    		<li><div id='1' onclick='spMark("1")'>Big Chest</div></li>
    		<li><div id='2' onclick='spMark("2")'>Small Chest</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='spAllMark(2)'>Canyon</div>
    	<ul>
    		<li><div id='3' onclick='spMark("3")'>1st Chest</div></li>
    		<li><div id='4' onclick='spMark("4")'>Corner Chest</div></li>
    		<li><div id='5' onclick='spMark("5")'>Before Screens</div></li>
    		<li><div id='6' onclick='spMark("6")'>Above Cube Game</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='spAllMark(3)'>Hallway</div>
    	<ul>
    		<li><div id='7' onclick='spMark("7")'>Left Chest</div></li>
    		<li><div id='8' onclick='spMark("8")'>Right Chest</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='spAllMark(4)'>Before Hostile</div>
    	<ul>
    		<li><div id='9' onclick='spMark("9")'>Left Big Chest</div></li>
    		<li><div id='10' onclick='spMark("10")'>Right Big Chest</div></li>
    	</ul>
    </li>
    <li><div id='11' onclick='spMark("11")'>Hostile Program Bonus</div></li>
    <li><div id='12' onclick='spMark("12")'><img src='img/keyhole_0.png' id='sp1Key' width='16px' height='16px'> Photon Debugger Popup</div></li>
    <li><div id='13' onclick='spMark("13")'>Solar Sailer Heartless Bonus</div></li>
    <li id='group'><div id='groupTitle' onclick='spAllMark(5)'>Computer Core</div>
    	<ul>
    		<li><div id='14' onclick='spMark("14")'>Left Big Chest</div></li>
    		<li><div id='15' onclick='spMark("15")'>Right Big Chest</div></li>
    		<li><div id='16' onclick='spMark("16")'>Left Small Chest</div></li>
    		<li><div id='17' onclick='spMark("17")'>Right Small Chest</div></li>
    	</ul>
    </li>
    <li><div id='18' onclick='spMark("18")'><img src='img/keyhole_0.png' id='sp2Key' width='16px' height='16px'> MCP</div></li>
  </ul>`
]

//Cave of Rememberance
const cor = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='corAllMark(1)'>Depths</div>
    	<ul>
    		<li><div id='1' onclick='corMark("1")'>1st Chest</div></li>
    		<li><div id='2' onclick='corMark("2")'>Ground Close</div></li>
    		<li><div id='3' onclick='corMark("3")'>Ground Far</div></li>
    		<li><div id='4' onclick='corMark("4")'>Ledge Near Door</div></li>
    		<li><div id='5' onclick='corMark("5")'>Highest</div></li>
    	</ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='corAllMark(2)'>Mineshaft</div>
    	<ul>
    		<li><div id='6' onclick='corMark("6")'>Lower Big Chest</div></li>
    		<li><div id='7' onclick='corMark("7")'>Lower Small Chest</div></li>
    	</ul>
    </li>
    <li><div id='8' onclick='corMark("8")'>Depths Upper Level</div></li>
    <li><div id='9' onclick='corMark("9")'>Near Valves Chest</div></li>
    <li id='group'><div id='groupTitle' onclick='corAllMark(3)'>Mining Area</div>
    	<ul>
    		<li><div id='10' onclick='corMark("10")'>Lowest Chest</div></li>
    		<li><div id='11' onclick='corMark("11")'>Mid Height Chest</div></li>
    		<li><div id='12' onclick='corMark("12")'>Near Door</div></li>
    		<li><div id='13' onclick='corMark("13")'>Ledge Big Chest</div></li>
    		<li><div id='14' onclick='corMark("14")'>Ledge Small Chest</div></li>
    	</ul>
    </li>
    <li><div id='15' onclick='corMark("15")'>Mineshaft Big chest</div></li>
    <li id='group'><div id='groupTitle' onclick='corAllMark(4)'>Engine Chamber</div>
    	<ul>
    		<li><div id='16' onclick='corMark("16")'>1st Chest</div></li>
    		<li><div id='17' onclick='corMark("17")'>2nd Chest</div></li>
    		<li><div id='18' onclick='corMark("18")'>High Ledge</div></li>
    		<li><div id='19' onclick='corMark("19")'>Middle High Ledge</div></li>
    	</ul>
    </li>
    <li><div id='20' onclick='corMark("20")'>Before Glide Big Chest</div></li>
    <li><div id='21' onclick='corMark("21")'><img src='img/keyhole_0.png' id='corKey' width='16px' height='16px'> Last Chest</div></li>
  </ul>`
]

//The World That Never Was
const twtnw = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(1)'>Before Roxas</div>
      <ul>
    		<li><div id='1' onclick='twtnwMark("1")'>1</div></li>
    		<li><div id='2' onclick='twtnwMark("2")'>2</div></li>
    		<li><div id='3' onclick='twtnwMark("3")'>3</div></li>
    		<li><div id='4' onclick='twtnwMark("4")'>4</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(2)'>Roxas</div>
      <ul>
    		<li><div id='5' onclick='twtnwMark("5")'>Bonus</div></li>
    		<li><div id='6' onclick='twtnwMark("6")'>Popups</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(3)'>Skyscraper</div>
      <ul>
    		<li><div id='7' onclick='twtnwMark("7")'>Truck</div></li>
    		<li><div id='8' onclick='twtnwMark("8")'>Left</div></li>
    		<li><div id='9' onclick='twtnwMark("9")'>Near Castle</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(4)'>Before Castle</div>
      <ul>
    		<li><div id='10' onclick='twtnwMark("10")'>Big Chest</div></li>
    		<li><div id='11' onclick='twtnwMark("11")'>Small Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(5)'>Nothing's Call</div>
      <ul>
    		<li><div id='12' onclick='twtnwMark("12")'>1</div></li>
    		<li><div id='13' onclick='twtnwMark("13")'>2</div></li>
      </ul>
    </li>
    <li><div id='14' onclick='twtnwMark("14")'>Twilight's View Big Chest</div></li>
    <li><div id='15' onclick='twtnwMark("15")'>Xigbar Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(6)'>Skyway</div>
      <ul>
    		<li><div id='16' onclick='twtnwMark("16")'>First Chest</div></li>
    		<li><div id='17' onclick='twtnwMark("17")'>On Ledge</div></li>
    		<li><div id='18' onclick='twtnwMark("18")'>Corner Of Path</div></li>
      </ul>
    </li>
    <li><div id='19' onclick='twtnwMark("19")'>Oblivion Popups</div></li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(7)'>Luxord</div>
      <ul>
    		<li><div id='20' onclick='twtnwMark("20")'>Bonus</div></li>
    		<li><div id='21' onclick='twtnwMark("21")'>Popup</div></li>
      </ul>
    </li>
    <li><div id='22' onclick='twtnwMark("22")'>Saix Popup</div></li>
    <li><div id='23' onclick='twtnwMark("23")'>Riku Popup</div></li>
    <li id='group'><div id='groupTitle' onclick='twtnwAllMark(8)'>Before Xemnas</div>
      <ul>
    		<li><div id='24' onclick='twtnwMark("24")'>1st Platform</div></li>
    		<li><div id='25' onclick='twtnwMark("25")'>2nd Platform</div></li>
    		<li><div id='26' onclick='twtnwMark("26")'>3rd Platform</div></li>
    		<li><div id='27' onclick='twtnwMark("27")'>4th Platform</div></li>
      </ul>
    </li>
    <li><div id='28' onclick='twtnwMark("28")'><img src='img/keyhole_0.png' id='twtnwKey' width='16px' height='16px'>Xemnas Popup</div></li>
  </ul>`
]

//100 Acre Wood
const acre = [
  `<ul>
    <li id='group'><div id='groupTitle' onclick='acreAllMark(1)'>Pooh</div>
      <ul>
    		<li><div id='1' onclick='acreMark("1")'>Big Chest</div></li>
    		<li><div id='2' onclick='acreMark("2")'>Right Chest</div></li>
    		<li><div id='3' onclick='acreMark("3")'>Left Chest</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='acreAllMark(2)'>Piglet</div>
      <ul>
    		<li><div id='4' onclick='acreMark("4")'>Big Chest</div></li>
    		<li><div id='5' onclick='acreMark("5")'>Under Tree</div></li>
    		<li><div id='6' onclick='acreMark("6")'>Near Stump</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='acreAllMark(3)'>Rabbit</div>
      <ul>
    		<li><div id='7' onclick='acreMark("7")'>Big Chest</div></li>
    		<li><div id='8' onclick='acreMark("8")'>Clothesline</div></li>
    		<li><div id='9' onclick='acreMark("9")'>Garden</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='acreAllMark(4)'>Kanga</div>
      <ul>
    		<li><div id='10' onclick='acreMark("10")'>Big Chest</div></li>
    		<li><div id='11' onclick='acreMark("11")'>Right</div></li>
    		<li><div id='12' onclick='acreMark("12")'>Left</div></li>
      </ul>
    </li>
    <li id='group'><div id='groupTitle' onclick='acreAllMark(5)'>Cave</div>
      <ul>
    		<li><div id='13' onclick='acreMark("13")'>1st Chest</div></li>
    		<li><div id='14' onclick='acreMark("14")'>Right Path Chest</div></li>
    		<li><div id='15' onclick='acreMark("15")'>Middle Path Front Chest</div></li>
    		<li><div id='16' onclick='acreMark("16")'>Middle Path Back Chest</div></li>
    		<li><div id='17' onclick='acreMark("17")'>Left Path Chest</div></li>
    		<li><div id='18' onclick='acreMark("18")'>Near Pooh Chest</div></li>
      </ul>
    </li>
    <li><div id='19' onclick='acreMark("19")'>Spooky Cave Reward</div></li>
    <li id='group'><div id='groupTitle' onclick='acreAllMark(6)'>Starry Hill</div>
      <ul>
    		<li><div id='20' onclick='acreMark("20")'>Big Chest</div></li>
    		<li><div id='21' onclick='acreMark("21")'>Small Chest</div></li>
      </ul>
    </li>
    <li><div id='22' onclick='acreMark("22")'><img src='img/keyhole_0.png' id='acreKey' width='16px' height='16px'> Final Popups</div></li>
  </ul>`
]

//Atlantica
const atlantica = [
  `<ul>
    <li><div id='1' onclick='atlMark("1")'><img src='img/keyhole_0.png' id='atl1Key' width='16px' height='16px'> Tutorial Popup</div></li>
    <li><div id='2' onclick='atlMark("2")'><img src='img/keyhole_0.png' id='atl2Key' width='16px' height='16px'>Ursula Popup</div></li>
    <li><div id='3' onclick='atlMark("3")'><img src='img/keyhole_0.png' id='atl3Key' width='16px' height='16px'> Final Popups</div></li>
  </ul>`
]

//Data Fights
const dataFights = [
  `<ul>
    <li><div id='1' onclick='dataMark("1")'>Larxene</div></li>
    <li><div id='2' onclick='dataMark("2")'>Luxord</div></li>
    <li><div id='3' onclick='dataMark("3")'>Axel</div></li>
    <li><div id='4' onclick='dataMark("4")'>Zexion</div></li>
    <li><div id='5' onclick='dataMark("5")'>Vexen</div></li>
    <li><div id='6' onclick='dataMark("6")'>Xigbar</div></li>
    <li><div id='7' onclick='dataMark("7")'>Xemnas</div></li>
    <li><div id='8' onclick='dataMark("8")'>Xaldin</div></li>
    <li><div id='9' onclick='dataMark("9")'>Lexaeus</div></li>
    <li><div id='10' onclick='dataMark("10")'>Saix</div></li>
    <li><div id='11' onclick='dataMark("11")'>Demyx</div></li>
    <li><div id='12' onclick='dataMark("12")'>Marluxia</div></li>
    <li><div id='13' onclick='dataMark("13")'>Roxas</div></li>
  </ul>`
]
