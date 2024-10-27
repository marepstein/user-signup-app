import { ProgressLoader } from '@/components/atoms/Loaders/Progress';
import { useLoadingProgress } from '@/components/atoms/Loaders/Progress/hooks/useLoadingProgress';
import { Error } from '@/components/molecules/Error/Error';
import { PersonalisedSignup } from '@/features/ffern-friends/modules/PersonalisedSignup';
import { FfernFriendIdProvider } from '@/features/ffern-friends/provider/FfernFriendIdProvider';
import { fetchFfernFriend } from '@/features/ffern-friends/services/frontend/getFernFriend';
import { IService } from '@/types';
import {
  dehydrate,
  QueryClient,
  useQuery,
  DehydratedState,
} from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

interface PageProps {
  ffernFriendId: string;
  dehydratedState: DehydratedState;
}

export default function Page({ ffernFriendId }: PageProps) {
  const { data, error, isLoading } = useQuery<IService.TGetFfernFriendResponse>(
    {
      queryKey: ['ffern-friend', ffernFriendId],
      queryFn: () => fetchFfernFriend(ffernFriendId),
      enabled: !!ffernFriendId,
      retry: 1,
      staleTime: 1000 * 60 * 10,
    }
  );

  const loadingProgress = useLoadingProgress(isLoading);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center text-ash900">
        <h1>Loading...</h1>
        <ProgressLoader progress={loadingProgress} />
      </div>
    );
  }

  if (error) {
    return <Error message={(error as Error).message} />;
  }

  const isReady = data && !error && !isLoading;

  return (
    <FfernFriendIdProvider ffernFriendId={ffernFriendId}>
      {isReady ? <PersonalisedSignup ffernFriend={data} /> : null}
    </FfernFriendIdProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const ffernFriendId = params?.id as string;

  if (!ffernFriendId) {
    return {
      props: {
        ffernFriendData: null,
        error: 'ID is missing',
      },
    };
  }

  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ['ffern-friend', ffernFriendId],
      queryFn: () => fetchFfernFriend(ffernFriendId),
      retry: 1,
    });

    return {
      props: {
        ffernFriendId,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      props: {
        ffernFriendId,
        dehydratedState: dehydrate(queryClient),
        error: (error as Error).message || 'Unknown error',
      },
    };
  }
};
