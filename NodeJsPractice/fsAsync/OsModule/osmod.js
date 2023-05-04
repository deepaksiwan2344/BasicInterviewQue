const os = require("os");
console.log(os.arch());

const freeMemory =os.totalmem();
console.log(`${freeMemory/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.tmpdir())