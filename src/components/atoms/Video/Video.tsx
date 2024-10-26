import classnames, { Argument } from 'classnames';
import { FC } from 'react';

export interface IVideoProps {
  url: string;
  mimeType: string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  autoPlay?: boolean;
  showControls?: boolean;
  className?: Argument;
  preload?: string;
  width?: string;
  height?: string;
}

export const Video: FC<IVideoProps> = ({
  className,
  mimeType,
  url,
  loop,
  muted,
  playsInline,
  autoPlay,
  showControls,
  preload,
  width,
  height,
}) => {
  return (
    <video
      className={classnames('', className)}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      autoPlay={autoPlay}
      preload={preload}
      controls={showControls}
      width={width}
      height={height}
    >
      <source src={url} type={mimeType} />
    </video>
  );
};
