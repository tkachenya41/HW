/*
    The goal: get an overview of TypeScript capabilities and principles.

    Things to cover:

        1. Basic typing.
        2. Refining types.
        3. Union types.
        4. Merged types.
        5. Generics.
        6. Type declarations.
        7. Module augmentation.
        8. Advanced type mapping.

    Rules and principles:

        1. Avoid using "any" type at all costs.
        2. Difficulty quickly grows one exercise after another.

Intro:

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues will be solved some other day.
    This would be the base for our future experiments during
    these exercises.

Exercise:

    Given the data, define the interface "User" and use it accordingly.
*/

export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

export function logPerson(user: User) {
  return ` - ${user.name}, ${user.age}`;
}

console.debug('Users:');
console.debug(users.map(logPerson));

/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/2/objects.html
*/
