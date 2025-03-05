class Customer {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function CustomerLogger<T extends Customer>(customer: T): void {
  console.log(
    `FirstName - ${customer.firstName} \nLastname - ${customer.lastName}`
  );
}

const customer = new Customer("Harry", "Potter");
CustomerLogger(customer);
CustomerLogger<Customer>(customer);
