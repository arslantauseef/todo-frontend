export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

export type User = {
  name: string;
  email: string;
};
