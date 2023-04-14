/*

Intro:

    Project grew and we ended up in a situation with
    some users starting to have more influence.
    Therefore, we decided to create a new person type
    called PowerUser which is supposed to combine
    everything User and Admin have.

Exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

*/

interface Bio {
  name: string;
  age: number;
}

interface User extends Bio {
  type: 'user';
  occupation: string;
}

interface Admin extends Bio {
  type: 'admin';
  role: string;
}

interface PowerUser extends Bio, Pick<Admin, 'role'>, Pick<User, 'occupation'> {
  type: 'powerUser';
}

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  {
    type: 'powerUser',
    name: 'Nikki Stone',
    age: 45,
    role: 'Moderator',
    occupation: 'Cat groomer'
  }
];

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

function isUser(person: Person): person is User {
  return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
  return person.type === 'powerUser';
}

export function logPerson(person: Person) {
  let additionalInformation = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  if (isPowerUser(person)) {
    additionalInformation = `${person.role}, ${person.occupation}`;
  }
  return `${person.name}, ${person.age}, ${additionalInformation}`;
}

console.debug('Admins:');
console.debug(persons.filter(isAdmin).map(logPerson));

console.debug();

console.debug('Users:');
console.debug(persons.filter(isUser).map(logPerson));

console.debug();

console.debug('Power users:');
console.debug(persons.filter(isPowerUser).map(logPerson));

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
