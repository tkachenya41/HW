type Pagination = {
  currentPage: number;
  totalPages: number;
  nextPage: string | null;
  prevPage: string | null;
};

type ApiResponse<Data = string> = {
  data: Data[];
  pagination: Pagination;
}

type User = {
  email: string;
  firstname:  string;
  lastname: string;
  birthday: Date;
  id: number;
}

type Post = {
  id: number;
  text: string;
  title: string;
  author: User;
}

async function getUsers(): Promise<
  ApiResponse<User>
>{
  return {
    data: [],
    pagination: {
      currentPage: 1,
      nextPage: 'https://123',
      prevPage: null,
      totalPages: 100
    }
  }
}

async function getPosts(): Promise<
  ApiResponse<Post>
>{
  return fetch('https://example.com/posts').then(response => response.json())
}

async function updateUser(user: Partial<User>){

}


type CreateUserParams = Pick<User, 'email'> & Partial<Omit<User, 'id' | 'email'>>;
async function createUser(user: CreateUserParams){
  console.log(user.firstname, user.jkhsgdf)
}

updateUser({
  firstname: 'John',
  lastname: '4'
})

createUser({
  email:'asd',
  lastname: 'asd'
})

getUsers().then(data => {
  const fullnames = data.data.map(u => `${u.firstname.toUpperCase()} ${u.lastname.toUpperCase()}`);

  return fullnames;
});


type Obj = Record<'email', string> & Record<'firstname' | 'lastname', string | number>
type Obj2 = Readonly<User>

const u: Obj2 = {
  email: '4',
  lastname: 'asd',
  firstname: 'asd'
}

u.firstname = 'asdgf'


class Point {
  x: number;
  y: number;

  constructor(){
    this.x = 1;
    this.y = 1;
  }
}

const point: Point = {
  x: 1,
  y: 2
}
