export const VALIDATION_MESSAGES = {
  firstName: {
    required: 'First name is required',
  },
  lastName: {
    required: 'Last name is required',
  },
  email: {
    required: 'Email is required',
    invalid: 'Please enter a valid email address',
  },
  password: {
    required: 'Password is required',
    invalid:
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
  },
} as const;
