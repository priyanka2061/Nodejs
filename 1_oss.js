const os = require("os");

const user = os.userInfo();
console.log(user);
// method rteures the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`);
const current = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(current);
