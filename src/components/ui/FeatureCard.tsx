import { FC } from 'react';
import { cn } from '@/utils/cn';

export interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  badge?: string;
  className?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  badge,
  className = '',
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div
      className={cn(
        'flex flex-col gap-xs items-center',
        'md:flex-row md:gap-sm',
        !isImageLeft && 'md:flex-row-reverse',
        className
      )}
    >
      {/* Image Section - 40% on desktop */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content Section - 60% on desktop */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        {badge && (
          <div className="inline-flex mb-sm">
            <div className="w-16 h-16 flex items-center justify-center text-h6 font-bold glass-purple text-primary-700 rounded-2xl transition-all duration-300 hover:shadow-glow">
              {badge}
            </div>
          </div>
        )}
        <h3 className="text-h4 lg:text-h3 font-bold text-neutral-900 mb-2xs leading-tight">
          {title}
        </h3>
        <p className="text-body-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
