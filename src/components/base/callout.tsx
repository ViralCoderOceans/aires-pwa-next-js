import * as React from 'react';
import { cn } from '@/lib/utils';

type CalloutType = 'default' | 'danger' | 'warning';

interface CalloutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  type?: CalloutType;
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn('my-6 flex items-start rounded-md border border-l-4 p-4', {
        'border-red-900 bg-red-50': type === 'danger',
        'border-yellow-900 bg-yellow-50': type === 'warning',
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
