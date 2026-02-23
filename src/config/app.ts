interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
}

export const APP_CONFIG: AppConfig = {
  name: import.meta.env.APP_NAME || 'Acheevo',
  version: '1.0.0',
  description: 'Discover your purpose through meaningful AI-guided conversations',
  author: 'Acheevo',
  repository: 'https://github.com/acheevo/acheevo-home',
};

export default APP_CONFIG;