import { ProgressLoader } from '@/components/atoms/Loaders/Progress';
import { useLoadingProgress } from '@/components/atoms/Loaders/Progress/hooks/useLoadingProgress';
import { Error } from '@/components/molecules/Error/Error';
import { PersonalisedSignup } from '@/ffern-friends/modules/PersonalisedSignup';
import { FfernFriendIdProvider } from '@/ffern-friends/provider/FfernFriendIdProvider';
import { fetchFfernFriend } from '@/ffern-friends/services/frontend/getFernFriend';
import { IService } from '@/types';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

interface PageProps {
  ffernFriendId: string;
  dehydratedState: unknown;
}

export default function Page({ ffernFriendId }: PageProps) {
  const { data, error, isLoading } = useQuery<IService.TGetFfernFriendResponse>(
    {
      queryKey: ['ffern-friend', ffernFriendId],
      queryFn: () => fetchFfernFriend(ffernFriendId),
      enabled: !!ffernFriendId,
      retry: 3,
    }
  );

  const loadingProgress = useLoadingProgress(isLoading);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
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
      retry: 3,
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
