const dns = require("dns");
const { promisify } = require("util");

const prom = promisify(dns.resolve4);

async function getip() {
  try {
    const ip = await prom("www.mum.edu");
    console.log(ip);
  } catch (err) {
    console.log(err);
  }
}

getip();
