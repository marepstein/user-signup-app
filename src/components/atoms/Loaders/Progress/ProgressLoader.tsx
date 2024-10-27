export interface IProgressLoaderProps {
  progress: number;
}

export const ProgressLoader = ({ progress }: IProgressLoaderProps) => {
  return (
    <div className="w-full h-1 bg-ash300 rounded-3 text-ash900">
      <div
        className="h-1 rounded-3 bg-ash900"
        style={{ width: `${progress}%`, transition: 'width 0.3s' }}
      />
    </div>
  );
};
