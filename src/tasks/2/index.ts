/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface Bio {
  name: string | number;
  age: number;
}

interface User extends Bio {
  occupation: string;
}

interface Admin extends Bio {
  role: string;
}

export type Person = Admin | User;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

export function logPerson(user: Person) {
  console.debug(` - ${user.name}, ${user.age}`);
}

console.debug('Persons:');
console.debug(persons.map(logPerson));

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
