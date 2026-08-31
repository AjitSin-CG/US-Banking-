// import dotenv from 'dotenv';

// dotenv.config();

// interface EnvironmentConfig {
//   baseUrl: string;
//   environment: string;
// }

// function getRequiredEnv(name: string): string {
//   const value = process.env[name];

//   if (!value) {
//     throw new Error(`Missing required environment variable: ${name}`);
//   }

//   return value;
// }

// export const environment: EnvironmentConfig = {
//   baseUrl: getRequiredEnv('BASE_URL'),
//   environment: getRequiredEnv('ENVIRONMENT')
// };




import dotenv from 'dotenv';

dotenv.config();

interface EnvironmentConfig {
  baseUrl: string;
  environment: string;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const environment: EnvironmentConfig = {
  baseUrl: getRequiredEnv('BASE_URL'),
  environment: getRequiredEnv('ENVIRONMENT')
};
