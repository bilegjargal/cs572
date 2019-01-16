const dns = require("dns");

dns.resolve4("www.mum.edu", (error, address) => {
  console.log(address);
});
