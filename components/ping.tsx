import React from 'react'

const ping = () => {
  return (
    <div className='relative'>
      <div className='absolute -left-4 top-1'>
        <span className='flex size-[11px]'>
            <span className='absolute inline-flex size-[11px] h-full w-full animate-ping rounded-full bg-primary opacity-75'></span>
            <span className='relative inline-flex size-[11px] rounded-full bg-primary'></span>
        </span>
      </div>
    </div>
  )
}

export default ping