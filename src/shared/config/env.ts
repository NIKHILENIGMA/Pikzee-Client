import { z } from 'zod'

export const EnvSchema = z.object({
    ENV: z
        .enum(['development', 'production', 'test'], {
            message: 'NODE_ENV must be one of development, production, test'
        })
        .default('development'),
    PORT: z.coerce.number({ message: 'PORT must be a number' }).default(5173)
})

export type Env = z.infer<typeof EnvSchema>
export type EnvMode = Env['ENV']
