import { render } from '@testing-library/react';
import { FC, ReactElement, PropsWithChildren } from 'react';

import { withQueryClient } from './hooks/withQueryClient';
import { withFfernFriendId } from './hooks/withFfernFriendId';

type TRenderWithProvidersProps = (
  ui: ReactElement
) => ReturnType<typeof render>;

const MockWrapper: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

export const renderWithProviders: TRenderWithProvidersProps = (ui) => {
  const Wrapper: FC = withQueryClient(withFfernFriendId(MockWrapper));

  return render(ui, {
    wrapper: Wrapper,
  });
};
