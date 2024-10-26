import { FC } from 'react';

interface ISignupContentProps {
  firstName?: string;
}

export const SignupContent: FC<ISignupContentProps> = ({ firstName }) => {
  return (
    <div className="flex flex-col">
      <p>Dear {firstName ?? `user`},</p>
      <br />
      <p>
        We are delighted to invite you to join Ffern Friends, our new community
        of like minded creators and artists.
      </p>
      <br />
      <p>Here’s how it works:</p>
      <br />
      <ul className="list-disc pl-5">
        <li>
          You’ll skip the waiting list and be added straight to the Ffern ledger
        </li>
        <li>
          As a ledger member, you’ll receive a made-to-order bottle of natural
          eau de parfum each season
        </li>
        <li>
          Your bottle will arrive one week ahead of its launch, just before the
          solstices and equinoxes
        </li>
        <li>
          You’ll also be given a unique link to our waiting list, if you decide
          to share Ffern within your community
        </li>
      </ul>
      <br />
      <p>
        If this sounds like something you may be interested in, we’d love it if
        you could fill out your details below, and we’ll send you our latest
        fragrance.
      </p>
      <br />
      <p>Sincerely,</p>
      <p>Salma & the Ffern team</p>
    </div>
  );
};
