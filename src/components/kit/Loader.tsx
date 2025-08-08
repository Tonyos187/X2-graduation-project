import React from 'react';

type LoaderProps = {
  size?: string;      // e.g., 'w-8 h-8'
  color?: string;     // e.g., 'border-blue-500'
  center?: boolean;   // center in the parent container
};

const Loader: React.FC<LoaderProps> = ({
  size = 'w-10 h-10',
  color = 'border-blue-500',
  center = true,
}) => {
  const loader = (
    <div
      className={`border-4 border-t-transparent rounded-full animate-spin ${size} ${color}`}
    />
  );

  if (!center) return loader;

  return (
    <div className="flex items-center justify-center w-full h-full">
      {loader}
    </div>
  );
};

export default Loader;