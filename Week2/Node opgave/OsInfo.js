var os = require('os');


module.exports = OsInfo = {
   platform:  os.platform()
,  osType: os.type()
,  freeMemory: os.freemem()
,  totalMemory: os.totalmem()
,  EOL: os.EOL
}


