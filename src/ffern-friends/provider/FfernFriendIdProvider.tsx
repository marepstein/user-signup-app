import { createContext, FC, ReactNode, useMemo } from 'react';
import { IService } from '@/types';

export interface IFfernFriendIdContextProps {
  ffernFriendId: IService.TGetFfernFriendResponse['id'];
}

export const FfernFriendIdContext = createContext<IFfernFriendIdContextProps>({
  ffernFriendId: '',
});

export interface IFfernFriendIdProviderProps {
  ffernFriendId: IService.TGetFfernFriendResponse['id'];
  children?: ReactNode;
}

export const FfernFriendIdProvider: FC<IFfernFriendIdProviderProps> = ({
  children,
  ffernFriendId,
}) => {
  const value = useMemo<IFfernFriendIdContextProps>(
    () => ({
      ffernFriendId,
    }),
    [ffernFriendId]
  );

  return (
    <FfernFriendIdContext.Provider value={value}>
      {children}
    </FfernFriendIdContext.Provider>
  );
};
