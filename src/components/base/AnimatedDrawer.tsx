import React from 'react';
import { Sheet, SheetContent } from '@/ui/sheet';

const AnimatedDrawer = ({
  open,
  onOpenChange,
  isHideOverlay = false,
  isHideCloseIcon = false,
  side = 'right',
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  isHideOverlay?: boolean;
  isHideCloseIcon?: boolean;
  side?: 'right' | 'top' | 'bottom' | 'left' | null | undefined;
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="!w-full !max-w-full p-4 py-6 !rounded-t-2xl bg-white !h-[calc(100dvh-228px)] top-[148px] focus:outline-none"
        isHideOverlay={isHideOverlay}
        isHideCloseIcon={isHideCloseIcon}
        side={side}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default AnimatedDrawer;
