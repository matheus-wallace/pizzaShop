import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getEstablishment,
  type GetEstablishmentResponse,
} from '@/api/get-managed-establishment'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

const StoreProfileDialog = () => {
  const queryClient = useQueryClient()

  const { data: establishment } = useQuery({
    queryKey: ['establishment'],
    queryFn: getEstablishment,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: establishment?.name ?? '',
      description: establishment?.description ?? '',
    },
  })

  const { mutateAsync: updateCurrentProfile } = useMutation({
    mutationFn: updateProfile,
    retry: 3,
    onSuccess(_, { name, description }) {
      const cached = queryClient.getQueryData<GetEstablishmentResponse>([
        'establishment',
      ])
      if (cached) {
        queryClient.setQueryData<GetEstablishmentResponse>(['establishment'], {
          ...cached,
          name,
          description,
        })
      }
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateCurrentProfile({
        name: data.name ?? '',
        description: data.description ?? '',
      })

      toast.success('Profile updated successfully!')
    } catch (error) {
      toast.error('Error updating profile. Please try again.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Store profile</DialogTitle>
        <DialogDescription>
          Update the information about your establishment that is visible to
          your customer
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

export default StoreProfileDialog
