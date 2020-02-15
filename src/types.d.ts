export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SESSION_SECRET: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      DB_TYPE: string
      DB_HOST: string
      DB_NAME: string
      DB_USER: string
      DB_PASS: string
    }
  }
}
