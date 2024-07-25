'use client';

import React from 'react';
import {
  handleSelectedNavChange,
  IAppReducerState,
} from '@/redux/reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  {
    id: 'home',
    title: 'Home',
    iconSrc: '/assets/icons/house.svg',
  },
  {
    id: 'phone',
    title: 'Phone',
    iconSrc: '/assets/icons/phone.svg',
  },
  {
    id: 'sms',
    title: 'SMS',
    iconSrc: '/assets/icons/chatText.svg',
  },
  {
    id: 'email',
    title: 'Email',
    iconSrc: '/assets/icons/envelopeSimple.svg',
  },
  {
    id: 'more',
    title: 'More',
    iconSrc: '/assets/icons/dotsThreeOutline.svg',
  },
];

const BottomNavigationBar = () => {
  const selectedNav = useSelector(
    (state: { app: IAppReducerState }) => state.app.selectedNav
  );
  const dispatch = useDispatch();

  return (
    <div className="relative z-[99999] w-full px-4 py-2 bg-white navbar-shadow justify-between items-start inline-flex">
      {NAV_ITEMS.map((navItem) => (
        <div
          key={navItem.id}
          className={cn({
            'grow shrink basis-0 p-2 rounded flex-col justify-center items-center gap-1 inline-flex text-zinc-400 cursor-pointer transition-all':
              true,
            'bg-[#17374e]/10 text-zinc-900': selectedNav === navItem.id,
          })}
          onClick={() => dispatch(handleSelectedNavChange(navItem.id))}
        >
          <img
            className={cn({
              'w-6 h-6 relative opacity-40': true,
              'opacity-100': selectedNav === navItem.id,
            })}
            src={navItem.iconSrc}
          />
          <div className="text-center text-sm font-semibold">
            {navItem.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigationBar;
