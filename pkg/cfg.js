
const fs = require('fs')
const root = __dirname;
console.log("root",root)
const cfgPath = require("path").join(root,"../conf/def.conf")
console.log("cfgPath",cfgPath)
const cfg = JSON.parse(fs.readFileSync(cfgPath));
console.log("ctg",JSON.stringify(cfg))
module.exports = cfg