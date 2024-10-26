import { motion } from 'framer-motion';
import { FC } from 'react';

interface IFlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped?: boolean;
}

export const FlipCard: FC<IFlipCardProps> = ({ front, back, isFlipped }) => {
  console.log('isFlipped', isFlipped);

  return (
    <div
      className="w-full h-full"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '2000px',
      }}
    >
      <motion.div
        transition={{ duration: 0.7, animationDirection: 'normal' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        className="grid grid-cols-1 w-full h-full shadow-custom-light rounded-lg bg-sand100 p-6"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="row-[1/1] col-[1/1] h-full z-[1]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        <div
          className="z-10 transform-gpu row-[1/1] col-[1/1] h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};
