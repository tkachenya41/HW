/*

Intro:

    We have asynchronous functions now, advanced technology.
    This makes us a tech startup officially now.
    But one of the consultants spoiled our dreams about
    inevitable future IT leadership.
    He said that callback-based asynchronicity is not
    popular anymore and everyone should use Promises.
    He promised that if we switch to Promises, this would
    bring promising results.

Exercise:

    We don't want to reimplement all the data-requesting
    functions. Let's decorate the old callback-based
    functions with the new Promise-compatible result.
    The final function should return a Promise which
    would resolve with the final data directly
    (i.e. users or admins) or would reject with an error
    (or type Error).

    The function should be named promisify.

Higher difficulty bonus exercise:

    Create a function promisifyAll which accepts an object
    with functions and returns a new object where each of
    the function is promisified.

    Rewrite api creation accordingly:

        const api = promisifyAll(oldApi);

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

export type ApiResponse<T> =
  | {
      status: 'success';
      data: T;
    }
  | {
      status: 'error';
      error: string;
    };

export function promisify<T>(
  argument: (callback: (data: ApiResponse<T>) => void) => void
): () => Promise<T> {
  return () =>
    new Promise((resolve, reject) => {
      argument((response) => {
        if (response.status === 'success') {
          resolve(response.data);
        } else {
          reject(response.error);
        }
      });
    });
}

const oldApi = {
  requestAdmins(
    this: void,
    callback: (response: ApiResponse<Admin[]>) => void
  ) {
    callback({
      status: 'success',
      data: admins
    });
  },
  requestUsers(this: void, callback: (response: ApiResponse<User[]>) => void) {
    callback({
      status: 'success',
      data: users
    });
  },
  requestCurrentServerTime(
    this: void,
    callback: (response: ApiResponse<number>) => void
  ) {
    callback({
      status: 'success',
      data: Date.now()
    });
  },
  requestCoffeeMachineQueueLength(
    this: void,
    callback: (response: ApiResponse<number>) => void
  ) {
    callback({
      status: 'error',
      error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
  }
};

export const api = {
  requestAdmins: promisify(oldApi.requestAdmins),
  requestUsers: promisify(oldApi.requestUsers),
  requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
  requestCoffeeMachineQueueLength: promisify(
    oldApi.requestCoffeeMachineQueueLength
  )
};

function logPerson(person: Person) {
  return `- ${person.name}, ${person.age}, ${
    person.type === 'admin' ? person.role : person.occupation
  }`;
}

async function startTheApp() {
  console.warn('Admins:');
  const admins = await api.requestAdmins();
  console.warn(admins.map(logPerson));
  console.warn();

  console.warn('Users:');
  const users = await api.requestUsers();
  console.warn(users.map(logPerson));

  console.warn('Server time:');
  const time = await api.requestCurrentServerTime();
  console.warn(new Date(time).toLocaleString());

  console.warn('Coffee machine queue length:');
  console.warn(await api.requestCoffeeMachineQueueLength());
}
startTheApp().then(
  () => {
    console.warn('Success!');
  },
  (error: Error) => {
    console.warn(
      `Error: "${error.message}", but it's fine, sometimes errors are inevitable.`
    );
  }
);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/generics.html
