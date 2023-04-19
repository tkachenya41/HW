type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};

const users: User[] = [
  {
    name: 'Harry Felton',
    phone: '(09) 897 33 33',
    email: 'felton@gmail.com',
    animals: ['cat'],
    cars: ['bmw'],
    hasChildren: false,
    hasEducation: true
  },
  {
    name: 'May Sender',
    phone: '(09) 117 33 33',
    email: 'sender22@gmail.com',
    hasChildren: true,
    hasEducation: true
  },
  {
    name: 'Henry Ford',
    phone: '(09) 999 93 23',
    email: 'ford0@gmail.com',
    cars: ['bmw', 'audi'],
    hasChildren: true,
    hasEducation: false
  }
];

export function getUserNames(users: User[]): string {
  return users.map((element) => element.name).join(', ');
}

function hasCars(user: User): user is User & { cars: string[] } {
  return !!user.cars;
}

for (const user of users) {
  if (hasCars(user)) {
    console.warn(user.cars.length);
  }

  console.warn(user.cars?.length);
}

function getCarsTotal(users: User[]) {
  return users
    .filter(hasCars)
    .map((element) => element.cars.length)
    .reduce((accumulator, current) => accumulator + current, 0);
}

console.warn(getCarsTotal(users));

function getEducatedUsers(users: User[]) {
  return users.filter((element) => element.hasEducation);
}

console.warn(getEducatedUsers(users));

function hasAnimals(users: User[]) {
  return users.filter((element) => element.animals);
}

console.warn(hasAnimals(users));

function getCarsNames(users: User[]) {
  return users
    .filter((element) => element.cars)
    .map((element) => element.cars)
    .join(',');
}

console.warn(getCarsNames(users));
