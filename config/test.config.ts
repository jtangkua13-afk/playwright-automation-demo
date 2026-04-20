import dotenv from 'dotenv';
dotenv.config();

export const TEST_CONFIG = {
  baseUrl: process.env.BASE_URL || 'https://automationexercise.com',
  users: {
    standard: {
      email: process.env.USER_EMAIL || '',
      password: process.env.USER_PASSWORD || '',
      name: process.env.USER_NAME || 'Jean'
    }
  }
};