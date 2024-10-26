import { Video } from '@/components/atoms/Video';
import { Form } from '@/components/organisms/Form/Form';
import { VIDEO_URL } from '@/ffern-friends/constants';
import { useFfernFriendId } from '@/ffern-friends/hooks/useFfernFriendId';
import { updateFfernFriendService } from '@/ffern-friends/services/api';
import { IService } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { SignupContent } from './SignupContent';
import { FlipCard } from '@/components/molecules/FlipCard';
import { Button } from '@/components/molecules/Button';

interface IPeronalisedSignupProps {
  ffernFriend: Pick<
    IService.TGetFfernFriendResponse,
    'firstName' | 'id' | 'lastName'
  >;
}

export const PersonalisedSignup: FC<IPeronalisedSignupProps> = ({
  ffernFriend,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { firstName } = ffernFriend;
  const { ffernFriendId } = useFfernFriendId();

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: IService.TUpdateFfernFriendsRequest) =>
      updateFfernFriendService(ffernFriendId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ffern-friend-id', ffernFriendId],
      });
    },
  });

  const onSubmit = (data: IService.TUpdateFfernFriendsRequest) => {
    mutate(data);
  };

  const ThankYouMessage = () => (
    <div className="w-full h-full rounded lg:flex lg:items-center lg:justify-center p-3 border border-green100 bg-green50 text-green900">
      Thank you!
      <br />
      <br />
      Your new fragrance will be with you shortly
    </div>
  );

  return (
    <div className="relative flex flex-col items-center gap-5 bg-sand75 rounded p-5 shadow-custom-light mt-[-95px] lg:mt-0 z-50 top-5 lg:top-0">
      <Video
        url={VIDEO_URL}
        className="h-40 w-40 rounded-[80%] aspect-video"
        autoPlay={true}
        muted={true}
        loop={true}
        mimeType="video/mp4"
        width="150"
        height="150"
      />

      <div className="flex flex-col gap-4 lg:hidden">
        <SignupContent firstName={firstName} />
        {!isSuccess ? (
          <Form onSubmit={onSubmit} isPending={isPending} />
        ) : (
          <ThankYouMessage />
        )}
      </div>

      <div className="hidden lg:flex gap-5">
        <FlipCard
          front={
            <div className="flex flex-col gap-4">
              <SignupContent firstName={firstName} />
              <Button onClick={() => setIsFlipped((prevState) => !prevState)}>
                Continue to signup
              </Button>
            </div>
          }
          back={
            !isSuccess ? (
              <Form onSubmit={onSubmit} isPending={isPending} />
            ) : (
              <ThankYouMessage />
            )
          }
          isFlipped={isFlipped}
        />
      </div>
    </div>
  );
};
