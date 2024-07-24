import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full  px-4 py-2 bg-white shadow justify-between items-start inline-flex">
      <div className="grow shrink basis-0 p-2 bg-[#17374e]/10 rounded flex-col justify-center items-center gap-1 inline-flex">
        <img className="w-6 h-6 relative" src='/assets/icons/house.svg' />
        <div className="text-center text-zinc-900 text-sm font-semibold">Home</div>
      </div>
      <div className="grow shrink basis-0 p-2 rounded flex-col justify-center items-center gap-1 inline-flex">
        <img className="w-6 h-6 relative" src='/assets/icons/phone.svg' />
        <div className="text-center text-zinc-400 text-sm font-semibold">Phone</div>
      </div>
      <div className="grow shrink basis-0 p-2 rounded flex-col justify-center items-center gap-1 inline-flex">
        <img className="w-6 h-6 relative" src='/assets/icons/chatText.svg' />
        <div className="text-center text-zinc-400 text-sm font-semibold">SMS</div>
      </div>
      <div className="grow shrink basis-0 p-2 rounded flex-col justify-center items-center gap-1 inline-flex">
        <img className="w-6 h-6 relative" src='/assets/icons/envelopeSimple.svg' />
        <div className="text-center text-zinc-400 text-sm font-semibold">Email</div>
      </div>
      <div className="grow shrink basis-0 p-2 rounded flex-col justify-center items-center gap-1 inline-flex">
        <img className="w-6 h-6 relative" src='/assets/icons/dotsThreeOutline.svg' />
        <div className="text-center text-zinc-400 text-sm font-semibold">More</div>
      </div>
    </div>
  )
}

export default Navbar
