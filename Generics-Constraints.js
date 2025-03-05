var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
function CustomerLogger(customer) {
    console.log("FirstName - ".concat(customer.firstName, " \nLastname - ").concat(customer.lastName));
}
var customer = new Customer("Harry", "Potter");
CustomerLogger(customer);
CustomerLogger(customer);
