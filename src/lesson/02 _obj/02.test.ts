import { CityType, changeBudget, repairHouses, addStaff } from './02';
let city: CityType;
beforeEach(() => {
  city = {
    title: 'NY',
    houses: [
      {
        buildeAt: 2000,
        repaired: false,
        address: {
          number: 0,
          street: {
            title: 'zero'
          }
        }
      },
      {
        buildeAt: 2001,
        repaired: false,
        address: {
          number: 1,
          street: {
            title: 'one'
          }
        }
      },
      {
        buildeAt: 2002,
        repaired: false,
        address: {
          number: 2,
          street: {
            title: 'two'
          }
        }
      },],
    buildings: [
      {
        type: 'Hospital',
        budget: 1000,
        staffCount: 1001,
        address: {
          street: {
            title: 'West'
          }
        }
      },
      {
        type: 'School',
        budget: 2000,
        staffCount: 2002,
        address: {
          street: {
            title: 'South'
          }
        }
      },
      {
        type: 'Fire station',
        budget: 3000,
        staffCount: 3003,
        address: {
          street: {
            title: 'East'
          }
        }
      },
    ],
    citizenNumber: 1000
  }
})
test('test city should be contains 3 houses', () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildeAt).toBe(2000);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(0);
  expect(city.houses[0].address.street.title).toBe('zero');


  expect(city.houses[1].buildeAt).toBe(2001);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(1);
  expect(city.houses[1].address.street.title).toBe('one');

  expect(city.houses[2].buildeAt).toBe(2002);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(2);
  expect(city.houses[2].address.street.title).toBe('two');
})

test('test city should be contains Hospital, School, Fire station', () => {
  expect(city.buildings.length).toBe(3);

  expect(city.buildings[0].type).toBe('Hospital');
  expect(city.buildings[0].budget).toBe(1000);
  expect(city.buildings[0].staffCount).toBe(1001);
  expect(city.buildings[0].address.street.title).toBe('West');


  expect(city.buildings[1].type).toBe('School');
  expect(city.buildings[1].budget).toBe(2000);
  expect(city.buildings[1].staffCount).toBe(2002);
  expect(city.buildings[1].address.street.title).toBe('South');

  expect(city.buildings[2].type).toBe('Fire station');
  expect(city.buildings[2].budget).toBe(3000);
  expect(city.buildings[2].staffCount).toBe(3003);
  expect(city.buildings[2].address.street.title).toBe('East');
})

test('change budget for Hospital', () => {
  changeBudget(city, 'Hospital', 1000)
  expect(city.buildings[0].budget).toBe(2000)
})
test('change budget for School', () => {
  changeBudget(city, 'School', -3000)
  expect(city.buildings[1].budget).toBe(-1000)
})

test('Houses should be repaired', () => {
  repairHouses(city.houses[1])
  expect(city.houses[1].repaired).toBe(true)
})

test('staff should be increased', () => {
  addStaff(city.buildings[2], 777)
  expect(city.buildings[2].staffCount).toBe(3780)
})