# dns-validation

Module to simplify DNS record validation.

## Requirements

tbd

## Installation

tbd

## Usage

```
dnsvalidation.verifyTxtEntry('somedomain.com', 'expectedValue', function(err, result) {
    console.log(result);
});
```

```
dnsvalidation.verifyCNameEntry('login.somedomain.io', 'tenant.somedomain.com', function(err, result) {
    console.log(result);
});
```

## License

tbd