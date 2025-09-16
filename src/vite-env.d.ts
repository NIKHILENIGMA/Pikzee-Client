/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ENV: 'production' | 'development' | 'test'
    readonly VITE_BACKEND_PROXY: string
    // more env variables...
}

export interface ImportMeta {
    readonly env: ImportMetaEnv
}
