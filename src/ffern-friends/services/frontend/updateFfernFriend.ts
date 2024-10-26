import { IService } from '@/types';
import axios from 'axios';

export const updateFfernFriend = async (
  ffernFriendId: IService.TGetFfernFriendResponse['id'],
  ffernFriend: IService.TUpdateFfernFriendsRequest
): Promise<
  | IService.TUpdateFfernFriendsSuccessResponse
  | IService.TUpdateFfernFriendsErrorResponse
> => {
  try {
    const { data: response } = await axios.post<
      | IService.TUpdateFfernFriendsSuccessResponse
      | IService.TUpdateFfernFriendsErrorResponse
    >(`/api/ffern-friends/${ffernFriendId}`, ffernFriend);

    return response;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      console.error(
        'Axios error UpdateFfernFriendService:',
        err.response?.data || err.message
      );
      throw new Error(err.response.data.message || 'Friend update failed');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
