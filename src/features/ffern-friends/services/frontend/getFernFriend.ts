import { IService } from '@/types';
import axios from 'axios';

export const fetchFfernFriend = async (
  ffernFriendId: string
): Promise<IService.TGetFfernFriendResponse> => {
  try {
    const { data } = await axios.get<IService.TGetFfernFriendResponse>(
      `/api/ffern-friends/${ffernFriendId}`
    );

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        'Axios error GetFfernFriendService:',
        err.response?.data || err.message
      );
      throw new Error('Friend not found, please try again or contact us!');
    } else {
      throw new Error('Failed to fetch data');
    }
  }
};
