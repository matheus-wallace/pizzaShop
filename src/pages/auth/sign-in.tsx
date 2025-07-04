import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFrom = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInFrom>

const SignIn = () => {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      const response = await authenticate({ email: data.email })
      console.log(response)

      toast.success('We have sent an authentication link to your email.', {
        action: {
          label: 'Resend',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    } catch (error) {
      toast.error('Invalid credentials.')
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
              <Label htmlFor="email">Your email</Label>
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
