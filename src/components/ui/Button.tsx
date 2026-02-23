import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'gradient-accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, disabled, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transform';

    const variants = {
      primary: 'bg-action hover:bg-action-hover text-on-action focus:ring-focus shadow-depth-2 hover:shadow-depth-3',
      secondary: 'bg-surface hover:bg-action-hover-2 text-body border-2 border-primary hover:border-action-hover focus:ring-focus shadow-depth-1 hover:shadow-depth-2',
      outline: 'border-2 border-primary bg-transparent hover:bg-action-hover-2 text-action hover:text-action-hover focus:ring-focus hover:shadow-depth-1',
      ghost: 'hover:bg-action-hover-2 text-body focus:ring-focus',
      gradient: 'gradient-primary text-on-action focus:ring-focus shadow-elevated hover:shadow-elevated-lg relative overflow-hidden transition-all',
      'gradient-accent': 'gradient-accent text-on-action focus:ring-focus shadow-elevated hover:shadow-elevated-lg relative overflow-hidden transition-all',
    };

    const sizes = {
      // sm: Reduced 50% - px-sm (12px) + py-xs (8px) = ~36px height
      sm: 'px-sm py-xs text-body-sm rounded-round',
      // md: Reduced 50% - px-md (16px) + py-xs (8px) = ~40px height
      md: 'px-md py-xs text-body-md rounded-round',
      // lg: Reduced 50% - px-lg (24px) + py-sm (12px) = ~56px height
      lg: 'px-lg py-sm text-body-lg rounded-round',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;