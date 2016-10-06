const dns = require('dns');

function verifyTxtEntry(domain, expectedTxtEntry, callback) {
    dns.resolveTxt(domain, function (err, result) {

        if (err) return callback(err, {result: false, details: err});

        var txtRecord = result.join();

        // if txt found, verify
        if (expectedTxtEntry === txtRecord) {
            return callback({}, {result: true, details: txtRecord });
        } else {
            return callback({}, {result: false, details: 'txt record did not match expected value'});
        }
    });
}

function verifyCNameEntry(domain, expectedCnameEntry, callback) {
    dns.resolveCname(domain, function (err, result) {

        if (err) return callback(err, {result: false, details: err});

        var cnameRecord = result.join();

        console.log(cnameRecord);

        // if cname found, verify
        if (expectedCnameEntry === cnameRecord) {
            return callback({}, {result: true, details: cnameRecord });
        } else {
            return callback({}, {result: false, details: 'cname record did not match expected value'});
        }
    });
}

module.exports = {
    verifyTxtEntry: verifyTxtEntry,
    verifyCNameEntry: verifyCNameEntry
}

