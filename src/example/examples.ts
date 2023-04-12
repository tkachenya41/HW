import {
  ApiResponse,
  CreateUserParameters,
  Post,
  User
} from '~/example/example.types';

function getUsers(): ApiResponse<User> {
  return {
    data: [
      {
        id: 1,
        firstname: 'Jack',
        lastname: 'Johnson',
        birthday: new Date(),
        email: 'jack.johnson@mail.ru'
      }
    ],
    pagination: {
      currentPage: 1,
      nextPage: null,
      prevPage: null,
      totalPages: 1
    }
  };
}

console.debug(getUsers().data.map((user) => user.email));

function getPosts(): ApiResponse<Post> {
  return {
    data: [
      {
        id: 1,
        text: 'Awesome post',
        title: 'My first post',
        author: {
          id: 1,
          firstname: 'Jack',
          lastname: 'Johnson',
          birthday: new Date(),
          email: 'jack.johnson@mail.ru'
        }
      }
    ],
    pagination: {
      currentPage: 1,
      nextPage: null,
      prevPage: null,
      totalPages: 1
    }
  };
}

console.debug(getPosts().data.map((post) => post.author.email));

function createUser(user: CreateUserParameters) {
  console.debug(user);
}

createUser({
  email: 'john.jackson@mail.ru'
});
