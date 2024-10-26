import FfernClient from '@/ffern-friends/services/axiosInstance';
import { UpdateFfernFriendSchema } from '@/ffern-friends/services/schema/UpdateFfernFriendSchema';
import { IService } from '@/types';
import { z } from 'zod';

export const updateFfernFriendService = async (
  ffernFriendId: string,
  ffernFriend: IService.TUpdateFfernFriendsRequest
): Promise<IService.TUpdateFfernFriendsRequest> => {
  if (!ffernFriendId) {
    throw new Error('ffernFriendId is required and cannot be empty.');
  }

  const data = UpdateFfernFriendSchema.parse(ffernFriend);

  const {
    addressLineOne,
    city,
    country,
    firstName,
    lastName,
    postcode,
    stateOrCounty,
    addressLineTwo,
  } = data;

  try {
    const response =
      await FfernClient.post<IService.TUpdateFfernFriendsRequest>(
        `/ffern-friends/${ffernFriendId}`,
        {
          firstName,
          lastName,
          addressLineOne,
          addressLineTwo,
          city,
          country,
          postcode,
          stateOrCounty,
        }
      );

    return response.data;
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(
        'UpdateFfernFriendServiceError validation error::',
        err.flatten()
      );
    } else {
      console.error('UpdateFfernFriendServiceError ::', err);
    }

    throw err;
  }
};
