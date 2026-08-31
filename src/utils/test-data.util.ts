import customerData from '@data/customers.json';
import type { Customer } from '@models/customer.types';

export class TestDataUtil {
  static getCustomers(): Customer[] {
    return customerData;
  }

  static getCustomer(index = 0): Customer {
    const customers = this.getCustomers();

    if (!customers[index]) {
      throw new Error(
        `Customer with index ${index} does not exist`
      );
    }

    return customers[index];
  }
}
