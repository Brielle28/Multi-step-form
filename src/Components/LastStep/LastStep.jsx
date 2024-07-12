import React from 'react'

const LastStep = () => {
  return (
    <>
      <div className="flex flex-col max-w-[65%] items-center justify-center text-black mt-7 gap-7 ">
      <div className='w-full flex items-center justify-center text-center mt-20'>
        <img src="/icon-thank-you.svg" alt="" />
      </div>
      <div>
        <h1 className='text-blue-950 font-extrabold text-[30px]'>
            Thank You !
        </h1>
        <p className='text-gray-600'>
            Thanks for confirming your subscription! we hope you have fun using our Platform. If you ever need support please feel free to email us at support@loremgaming.com.
        </p>
      </div>
      </div>
    </>
  )
}

export default LastStep
