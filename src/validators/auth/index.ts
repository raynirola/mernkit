import { z, ZodSchema } from 'zod'

export interface IAuthSchema {
  login?: ZodSchema
  register?: ZodSchema
  refresh?: ZodSchema
  logout?: ZodSchema
}

export default class AuthSchema implements IAuthSchema {
  public static login = z.object({
    email: z
      .string({ required_error: 'Email is a required field' })
      .email({ message: 'Email must be a valid email address' }),
    password: z
      .string({ required_error: 'Password is a required field' })
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(255, { message: 'Password must be at most 255 characters long' })
  })
  public static register = z
    .object({
      email: z
        .string({ required_error: 'Email is a required field' })
        .email({ message: 'Email must be a valid email address' })
        .trim(),
      password: z
        .string({ required_error: 'Password is a required field' })
        .min(6, { message: 'Password must be at least 6 characters long' })
        .max(255, { message: 'Password must be at most 255 characters long' })
        .trim(),
      passwordConfirmation: z.string({ required_error: 'Password confirmation is a required field' }).trim()
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: 'Passwords do not match',
      path: ['password']
    })
  public static refresh = z.object({
    refreshToken: z
      .string({ required_error: 'Refresh token is a required field' })
      .min(16, { message: 'Refresh token must be at least 16 characters long' })
      .trim()
  })
}

export namespace AuthRequest {
  export type Login = Required<z.infer<typeof AuthSchema.login>>
}
