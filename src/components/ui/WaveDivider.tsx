import { FC } from 'react';

export interface WaveDividerProps {
  variant?: 'calm' | 'gentle' | 'smooth';
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  className?: string;
}

const WaveDivider: FC<WaveDividerProps> = ({
  variant = 'calm',
  topColor = '#ffffff',
  bottomColor = '#f8fafc',
  flip = false,
  className = '',
}) => {
  const variants = {
    calm: 'M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    gentle: 'M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    smooth: 'M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  };

  const pathData = variants[variant];
  const transform = flip ? 'scale(1, -1)' : '';
  const translateY = flip ? '-100%' : '0';

  return (
    <div className={`relative w-full ${className}`} style={{ transform: `translateY(${translateY})` }}>
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', transform }}
      >
        <path
          fill={topColor}
          fillOpacity="1"
          d={pathData}
        />
      </svg>
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: bottomColor }}
      />
    </div>
  );
};

export default WaveDivider;
