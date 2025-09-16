/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { EnvSchema, type Env, type EnvMode } from './src/env'

type ServerConfig = { port: number; open: boolean }

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const envMode = mode as EnvMode // e.g 'development', 'production', 'test'

    const rawEnv = loadEnv(envMode, process.cwd(), '') as unknown as Env // NODE_ENV, PORT

    const env = EnvSchema.parse(rawEnv)
    // console.log('Environment Variables:', env)

    const serverConfig: ServerConfig = {
        port: env.PORT ? env.PORT : 5173,
        open: true
    }

    return {
        plugins: [react(), tailwindcss()],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/setupTests.ts',
            include: ['src/**/*.{test,spec}.{js,ts,tsx}'],
            coverage: {
                reporter: ['json', 'html'],
                include: ['src/**/*.{ts,tsx}'],
                exclude: [
                    'src/**/*.d.ts',
                    'src/**/index.{ts,tsx}',
                    'src/**/types.{ts,tsx}',
                    'coverage/**',
                    'node_modules/**',
                    'test/**',
                    'tests/**',
                    'dist/**',
                    'build/**',
                    '**/*.config.{ts,js}',
                    'src/setupTests.ts'
                ],
                thresholds: {
                    statements: 80,
                    branches: 80,
                    functions: 80,
                    lines: 80
                }
            }
        },
        server: serverConfig,
        preview: serverConfig,
        build: {
            minify: true,
            rollupOptions: {
                external: [/.*\.(test|spec)\.(js|ts|tsx)$/] // Exclude test files from the build
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
})
