process.env = {
  ...process.env,
  NEXT_PUBLIC_API_BASE_URL: 'https://ffern-test.com/api',
  NEXT_PUBLIC_API_USERNAME: 'ffern-test',
  NEXT_PUBLIC_API_PASSWORD: 'fake-password',
};

jest.mock('@/ffern-friends/services/frontend/updateFfernFriend', () => ({
  updateFfernFriend: jest.fn(),
}));

export {};