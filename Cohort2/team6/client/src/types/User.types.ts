export interface User {
  uuid: number;
  username: string;
  isLoggedIn: boolean;
}

export interface UserState {
  [x: string]: any;
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}
