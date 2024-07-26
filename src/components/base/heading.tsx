import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva(
  'font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
  {
    variants: {
      variant: {
        h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'text-3xl font-extrabold tracking-tight lg:text-4xl',
        h3: 'text-2xl font-extrabold tracking-tight lg:text-3xl',
        h4: 'text-xl font-extrabold tracking-tight lg:text-2xl',
        h5: 'text-lg font-bold tracking-tight lg:text-xl',
        h6: 'text-base font-bold tracking-tight lg:text-lg',
      },
      padding: {
        none: 'py-0',
        default: 'py-2',
        sm: 'py-1',
        lg: 'py-3',
      },
    },
    defaultVariants: {
      variant: 'h3',
      padding: 'default',
    },
  }
);

export interface HeadingProps
  extends React.ComponentPropsWithRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
}

const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ className, variant = 'h3', as: Component = variant, ...props }, ref) => {
    // Ensure Component is a valid element type
    const Element = Component as React.ElementType;

    return (
      <Element
        className={cn(
          headingVariants({
            variant,
            padding: props.padding, // Ensure padding variant is used
          }),
          className // Apply the className prop
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </Element>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
