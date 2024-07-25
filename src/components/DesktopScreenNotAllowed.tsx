'use client';

import React, { useState, useEffect } from 'react';
// import { isMobile, isTablet, isIPad13 } from 'react-device-detect';
import { Ban } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

const DeviceCheckerWrapper = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMobileOrTabletDevice, setIsMobileOrTabletDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsLoading(true);
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
      setIsMobileOrTabletDevice(mobile);
      setIsLoading(false);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isLoading) return null;
  return (
    <>
      {
        // isMobile || isTablet || isIPad13
        isMobileOrTabletDevice ? (
          <>{children}</>
        ) : (
          <div className="w-screen h-dvh flex justify-center items-center">
            <div className="max-w-xl bg-white h-[250px] text-black p-6 rounded-lg border-2 border-zinc-900 shadow-lg text-center flex flex-col gap-4">
              <div className="flex-1 flex justify-center items-center">
                <Ban className="w-14 h-14" />
              </div>
              <div>
                <h1 className="text-xl font-bold mb-4">Device not allowed</h1>
                <p>
                  This website is only supported on mobile and tablet devices.
                  For the best experience, please access this site using a
                  mobile or tablet device. Thank you!
                </p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default DeviceCheckerWrapper;
