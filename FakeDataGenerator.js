//Fake Data Generator
const faker = require("faker");

for (let i = 0; i < 5; i++) {
  console.log(
    `${faker.name.firstName()} ${faker.name.lastName()} - ${faker.internet.email()}`
  );
}
