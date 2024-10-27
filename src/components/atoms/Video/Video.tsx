import classnames, { Argument } from 'classnames';
import { FC, VideoHTMLAttributes } from 'react';

export interface IVideoProps
  extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'className'> {
  url: string;
  mimeType: string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  autoPlay?: boolean;
  showControls?: boolean;
  className?: Argument;
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
  width,
  height,
  ...rest
}) => {
  return (
    <video
      className={classnames('', className)}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      autoPlay={autoPlay}
      controls={showControls}
      width={width}
      height={height}
      {...rest}
    >
      <source src={url} type={mimeType} />
    </video>
  );
};
