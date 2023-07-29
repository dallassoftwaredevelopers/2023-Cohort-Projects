export interface User {
  id: number;
  username: string;
  isLoggedIn: boolean;
}

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}
