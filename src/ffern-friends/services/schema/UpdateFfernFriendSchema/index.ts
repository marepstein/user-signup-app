import { TFormData } from '@/components/organisms/Form/types';
import { IService } from '@/types';
import { z, ZodType } from 'zod';

export const UpdateFfernFriendSchema: ZodType<
  IService.TUpdateFfernFriendsRequest | TFormData
> = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  addressLineOne: z
    .string()
    .min(1, { message: 'First line of address is required' }),
  addressLineTwo: z.string().optional(),
  city: z.string().min(1, { message: 'City is required' }),
  postcode: z
    .string()
    .min(5, { message: 'Postcode must be at least 5 characters long' }),
  stateOrCounty: z.string().min(1, { message: 'State or county is required' }),
  country: z.enum(['US', 'NL', 'GB'], { message: 'Country is required' }),
});
