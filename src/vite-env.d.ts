/// <reference types="vite/client" />

declare module '*.svg' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly APP_NAME: string
  readonly API_BASE_URL?: string
  readonly API_TIMEOUT?: string
  readonly ENABLE_ANALYTICS?: string
  readonly ENABLE_DEBUG?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}