import { useContext } from 'react';
import { FfernFriendIdContext } from '../provider/FfernFriendIdProvider';

export const useFfernFriendId = () => {
  const context = useContext(FfernFriendIdContext);
  if (!context) {
    throw new Error('useFfernFriend must be used within a FfernFriendProvider');
  }
  return context;
};
