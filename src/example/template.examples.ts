export type Status = 'loading' | 'error' | 'success' | 'idle';

export type FulfilledStatus = Exclude<Status, 'loading' | 'idle'>;

function upperCase<TArgument extends string | string[]>(
  argument: TArgument
): TArgument extends string ? string : string[] {
  if (typeof argument === 'string') {
    return argument.toUpperCase() as ReturnType<typeof upperCase<TArgument>>;
  }

  return argument.map((s) => s.toUpperCase()) as ReturnType<
    typeof upperCase<TArgument>
  >;
}

const strs = ['abc', 'cde'];
const string_ = 'abc';

const upperCasedStrs = upperCase(strs);
const upperCasedString = upperCase(string_);

console.debug(upperCasedStrs);
console.debug(upperCasedString);

const user = {
  email: 'test.email@mail.com',
  id: 4
};

const post = {
  text: 'Post',
  title: 'POST'
};

function getKeys<TObject extends object>(object: TObject) {
  return Object.keys(object) as (keyof TObject)[];
}

const userKeys = getKeys(user);
const postKeys = getKeys(post);

for (const key of userKeys) {
  console.debug(user[key]);
}

for (const key of postKeys) {
  console.debug(post[key]);
}
