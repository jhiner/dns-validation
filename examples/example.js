const dnsvalidation = require('../lib/index.js');

dnsvalidation.verifyTxtEntry('somedomain.com', 'expectedValue', function(err, result) {
    console.log(result);
});

dnsvalidation.verifyCNameEntry('login.somedomain.io', 'tenant.somedomain.com', function(err, result) {
    console.log(result);
});