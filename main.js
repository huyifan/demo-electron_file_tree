const { app, BrowserWindow } = require('electron')
function createWindow () {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 并且为你的应用加载index.html
    if(process.env.NODE_ENV==='DEV'){
        win.loadURL('http://127.0.0.1:3000')
    }else{
        win.loadFile('index.html')
    }

}

app.whenReady().then(createWindow)