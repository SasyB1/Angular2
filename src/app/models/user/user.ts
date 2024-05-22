export interface iUser {
  posts: iUserDati[];
  total: number;
  skip: number;
  limit: number;
}

export interface iUserDati {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}
