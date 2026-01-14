import usersData from '@/mocks/users.json';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

const SIMULATED_DELAY = 1000;

export const authService = {
  login: (credentials: LoginRequest): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = usersData.users.find(u => u.email === credentials.email && u.password === credentials.password);

        if (user) {
          const { password: _, ...userWithoutPassword } = user;
          resolve({
            user: userWithoutPassword,
            token: `mock-jwt-token-${user.id}-${Date.now()}`,
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, SIMULATED_DELAY);
    });
  },

  logout: (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, SIMULATED_DELAY / 2);
    });
  },
};
