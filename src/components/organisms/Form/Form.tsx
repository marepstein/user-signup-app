import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TfiLock } from 'react-icons/tfi';
import { VscChevronRight } from 'react-icons/vsc';

import { TFormData } from './types';
import { Input } from '@/components/atoms/Input';
import { UpdateFfernFriendSchema } from '@/features/ffern-friends/services/schema/UpdateFfernFriendSchema';
import { Button } from '@/components/molecules/Button';
import { Select } from '@/components/atoms/Select';

type TFormProps = {
  onSubmit: (data: TFormData) => void;
  isPending?: boolean;
};

export const Form: FC<TFormProps> = ({ onSubmit, isPending }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormData>({
    resolver: zodResolver(UpdateFfernFriendSchema),
    mode: 'all',
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded bg-sand200 sm:p-3 lg:p-5 p-3"
    >
      {!isPending && (
        <div className="flex flex-col gap-2.5 mb-2">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              register={register}
              error={errors.firstName}
              className="rounded"
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName}
              className="rounded"
            />
          </div>
          <Input
            type="text"
            placeholder="Address Line 1"
            name="addressLineOne"
            register={register}
            error={errors.addressLineOne}
            className="rounded"
          />
          <Input
            type="text"
            placeholder="Address Line 2"
            name="addressLineTwo"
            register={register}
            error={errors.addressLineTwo}
            className="rounded"
          />
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="City"
              name="city"
              register={register}
              error={errors.city}
              className="rounded"
            />
            <Input
              type="text"
              placeholder="Postcode"
              name="postcode"
              register={register}
              error={errors.postcode}
              className="rounded"
            />
          </div>
          <Input
            type="text"
            placeholder="State or County"
            name="stateOrCounty"
            register={register}
            error={errors.stateOrCounty}
            className="rounded"
          />
          <Select
            name="country"
            register={register}
            error={errors.country}
            options={[
              { value: 'GB', label: 'United Kingdom' },
              { value: 'US', label: 'United States' },
              { value: 'NL', label: 'Netherlands' },
            ]}
            value="GB"
            className="rounded"
          />
        </div>
      )}
      <Button
        type="submit"
        disabled={!isValid}
        rightSection={
          !isValid ? (
            <TfiLock className="text-ash600" />
          ) : (
            <VscChevronRight className="text-ash50" />
          )
        }
      >
        {isPending ? 'Sending...' : 'Confirm Address'}
      </Button>
    </form>
  );
};
