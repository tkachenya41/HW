/*

Intro:

    PowerUsers idea was bad. Once those users got
    extended permissions, they started bullying others,
    and we lost a lot of great users.
    As a response we spent all the remaining money
    on the marketing and got even more users.
    We need to start preparing to move everything to a
    real database. For now, we just do some mocks.

    The server API format was decided to be the following:

    In case of success: { status: 'success', data: RESPONSE_DATA }
    In case of error: { status: 'error', error: ERROR_MESSAGE }

    The API engineer started creating types for this API and
    quickly figured out that the amount of types needed to be
    created is too big.

Exercise:

    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
  {
    type: 'user',
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse =
  | {
      status: 'success';
      data: Admin[];
    }
  | {
      status: 'error';
      error: string;
    };

export function requestAdmins(callback: (response: AdminsApiResponse) => void) {
  callback({
    status: 'success',
    data: admins
  });
}

type UsersApiResponse =
  | {
      status: 'success';
      data: User[];
    }
  | {
      status: 'error';
      error: string;
    };

export function requestUsers(callback: (response: UsersApiResponse) => void) {
  callback({
    status: 'success',
    data: users
  });
}

export function requestCurrentServerTime(
  callback: (response: unknown) => void
) {
  callback({
    status: 'success',
    data: Date.now()
  });
}

export function requestCoffeeMachineQueueLength(
  callback: (response: unknown) => void
) {
  callback({
    status: 'error',
    error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
  });
}

function logPerson(person: Person) {
  return ` - ${person.name}, ${person.age}, ${
    person.type === 'admin' ? person.role : person.occupation
  }`;
}

function startTheApp(callback: (error: Error | null) => void) {
  requestAdmins((adminsResponse) => {
    console.debug('Admins:');
    if (adminsResponse.status === 'success') {
      console.debug(adminsResponse.data.map(logPerson));
    } else {
      return callback(new Error(adminsResponse.error));
    }

    console.debug();

    requestUsers((usersResponse) => {
      console.debug('Users:');
      if (usersResponse.status === 'success') {
        console.debug(usersResponse.data.map(logPerson));
      } else {
        return callback(new Error(usersResponse.error));
      }

      console.debug();

      requestCurrentServerTime((serverTimeResponse) => {
        console.debug('Server time:');
        if (serverTimeResponse.status === 'success') {
          console.debug(new Date(serverTimeResponse.data).toLocaleString());
        } else {
          return callback(new Error(serverTimeResponse.error));
        }

        console.debug();

        requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
          console.debug('Coffee machine queue length:');
          if (coffeeMachineQueueLengthResponse.status === 'success') {
            console.debug(coffeeMachineQueueLengthResponse.data);
          } else {
            return callback(new Error(coffeeMachineQueueLengthResponse.error));
          }

          callback(null);
        });
      });
    });
  });
}

startTheApp((error) => {
  console.debug();
  if (error) {
    console.debug(
      `Error: "${error.message}", but it's fine, sometimes errors are inevitable.`
    );
  } else {
    console.debug('Success!');
  }
});

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/generics.html
