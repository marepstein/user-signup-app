import FfernClient from '@/features/ffern-friends/services/axiosInstance';
import { IService } from '@/types';
import axios from 'axios';

export const getFfernFriendService = async (
  ffernFriendId: string
): Promise<IService.TGetFfernFriendResponse> => {
  try {
    if (!ffernFriendId) {
      throw new Error('ffernFriendId is required and cannot be empty.');
    }

    const { data } = await FfernClient.get<IService.TGetFfernFriendResponse>(
      `/ffern-friends/${ffernFriendId}`
    );

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        'Axios error GetFfernFriendAPIService:',
        err.response?.data || err.message
      );
      if (err.response?.status === 404) {
        throw new Error('Friend ID not found');
      }
    } else {
      console.error('GetFfernFriendServiceError ::', err);
    }

    throw err;
  }
};
