import type z from 'zod'

import { loginSchema } from '@/shared/schema/auth-schema'

// Infer the LoginFormRequest type from the loginSchema
export type LoginFormRequest = z.infer<typeof loginSchema>
