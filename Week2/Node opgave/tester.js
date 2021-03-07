
var dosDetector = require('./dosDetector.js');
const OsInfo = require('./OsInfo.js');
console.log(OsInfo);
    const dos = new dosDetector(2000);

dos.addUrl("https://www.dr.dk")

setTimeout(dos.addUrl,500, 'https://www.dr.dk')


dos.on('dos', (arg) => {
    console.log('Listener called', arg)
});


