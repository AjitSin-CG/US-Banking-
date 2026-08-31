import { faker } from '@faker-js/faker';
import type { Customer } from '@models/customer.types';

export class FakerUtil {

  static generateCustomer(): Customer {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zipCode: faker.location.zipCode()
    };
  }

  static generatePassword(): string {
    return faker.internet.password();
  }

  static generateUsername(): string {
    return faker.string.alphanumeric(10);
  }

  static generateTransactionDescription(): string {
    return faker.commerce.productName();
  }

  static generateAmount(min = 10, max = 5000): number {
    return faker.number.float({
      min,
      max,
      fractionDigits: 2
    });
  }
}
