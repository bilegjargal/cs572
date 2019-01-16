const dns = require("dns");
const { promisify } = require("util");

const prom = promisify(dns.resolve4);

prom("www.mum.edu")
  .then(address => {
    dns.resolve4("www.mum.edu", (error, address) => {
      console.log(address);
    });
  })
  .catch(err => {
    console.log("error has occurred " + err);
  });
