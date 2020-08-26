const { BrowserWindow, Menu, app, dialog } = require('electron')

//App Information
const label = 'KH2FM Randomizer Tracker';
const build = '2020.8.26';
const version = app.getVersion();

//About Window
const aboutOptions = {
  type: 'info',
  buttons: ['Close'],
  title: label + ' v' + version,
  message: 'About This Tracker',
  detail: `Locations
- Location aren't trackable by clicking on them. Instead they open a list of checks that can be made. The location icon will light up when the second pass of the world is complete. For the most part, this will mean the Data Fights are all that's left.
- Added ability to mark all checks in a group. NOTE: If you select a single check then the group, the single check will become unmarked. This will be fixed in a future build.
- Added way to see how many completed visits per world.

Checklist
- Checklists will show based off of what is selected for the world.
- Data will persist between viewing different links so long as you don't refresh the tracker or close the tracker.

Forms
- Forms are now able to show levels if wanted.

Notes/Hints
- If you need to resize the notes window, click and drag from the bottom right corner.
- Resize notes prior to narrowing the window. If you don't this can cause the notes to persist above the lists.
- 100 Acre Wood isn't split on per page but as overall.
- If using the tracker for the icon layout, you can mark locations by selecting the last keyhole check for the world.
- Added way to track hints if using them.

Saving Tracker
- Using the Save Progress button will add/update a file called tracker.json found in '%APPDATA%/kh2fm-rando-tracker'
- Loading will use the file noted above to return values.

Changes
- Changed Layout for better stream quality

To Be Added
- Way to show progress on kingdom without selecting it.`
}

//Global Variables
let mainWindow;

//App Menu
let menuT = [
  {
    label: 'App',
    submenu: [
      {
        label: 'Reset Tracker',
        role: 'reload',
        accelerator: 'F5'
      },{
        label: 'Toggle Dev Tools',
        role: 'toggledevtools',
        accelerator: 'CommandOrControl+Alt+I',
        enabled: true,
        visible: false
      },{
        label: 'Exit',
        click(){
          app.quit();
        }
      }
    ]
  },{
    label: 'About',
    click(){
      aboutMessage();
    }
  }
]
const menu = Menu.buildFromTemplate(menuT);

function aboutMessage(){
  dialog.showMessageBox(null, aboutOptions, (response, checkboxChecked) =>{});
}

function createWindow(){
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    title: label,
    icon: __dirname + "/icon.png",
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.maximize();
  mainWindow.loadFile('src/index.html');

  Menu.setApplicationMenu(menu)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
