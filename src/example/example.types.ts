type Pagination = {
  currentPage: number;
  totalPages: number;
  nextPage: string | null;
  prevPage: string | null;
};

export type User = {
  email: string;
  firstname: string;
  lastname: string;
  birthday: Date;
  id: number;
};

export type Post = {
  id: number;
  text: string;
  title: string;
  author: User;
};

export type ApiResponse<Data = string> = {
  data: Data[];
  pagination: Pagination;
};

export type CreateUserParameters = Pick<User, 'email'> &
  Partial<Omit<User, 'id' | 'email'>>;
