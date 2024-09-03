import { faker } from '@faker-js/faker';

export function generateData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      key: i,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 80 }),
      address: faker.location.streetAddress(),
    });
  }
  return data;
}