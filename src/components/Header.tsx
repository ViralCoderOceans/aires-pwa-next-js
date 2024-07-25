import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full px-4 pt-4 pb-5 bg-[#17374e] flex-col justify-center items-start gap-4 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-12 h-12 bg-white rounded-lg" />
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-gray-100 text-lg font-semibold leading-[30px]">
              Sequoia
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
        </div>
        <div className="w-12 h-12 p-2 rounded flex-col justify-center items-center gap-1 inline-flex">
          <img
            className="w-6 h-6 justify-center items-center inline-flex"
            src="/assets/icons/bell.svg"
          />
        </div>
      </div>
      <div className="self-stretch justify-start items-start inline-flex">
        <div className="grow shrink basis-0 h-12 px-4 py-3 bg-white/25 rounded-lg border border-[#2e2b2e]/20 justify-start items-center gap-4 flex">
          <img
            className="w-6 h-6 relative"
            src="/assets/icons/magnifyingGlass.svg"
          />
          <input
            className="text-white text-base font-medium leading-tight bg-transparent focus:outline-none placeholder:text-white"
            placeholder="Jump to or search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
