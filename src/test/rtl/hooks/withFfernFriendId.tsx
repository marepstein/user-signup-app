import { FC } from 'react';

import { FfernFriendIdProvider } from '@/ffern-friends/provider/FfernFriendIdProvider';

export const withFfernFriendId = (WrappedComponent: FC): FC => {
  return (props) => {
    return (
      <FfernFriendIdProvider ffernFriendId="ffern-friend-id">
        <WrappedComponent {...props} />
      </FfernFriendIdProvider>
    );
  };
};
