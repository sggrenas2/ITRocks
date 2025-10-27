interface MockedUsers {
    [key: string]: User
}
interface User {
  pwd: string;
  name: string;
  image: string;
  id: string;
}