import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFrom = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInFrom>

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute top-8 right-8">
          <Link to="/sign-up">New Establishment</Link>
        </Button>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access Dashboard
            </h1>
            <p className="text-muted-foreground text-sm">
              Track your sales through the partner dashboard!
            </p>
          </div>
          <form className="space-y-2" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-4">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Access Dashboard
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
