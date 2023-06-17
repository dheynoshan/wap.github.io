const dns = require('dns');

dns.lookup('www.miu.edu',(err,address,family) =>{
    console.log(address);
})