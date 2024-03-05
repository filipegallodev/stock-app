type Login = {
  username: string;
  password: string;
};

interface User extends Login {
  name: string;
};
