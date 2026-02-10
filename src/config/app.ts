interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
}

export const APP_CONFIG: AppConfig = {
  name: import.meta.env.APP_NAME || 'acheevo-home',
  version: '1.0.0',
  description: 'A scalable React frontend template with TypeScript and Tailwind CSS',
  author: 'Developer',
  repository: 'https://github.com/your-username/frontend-template',
};

export default APP_CONFIG;