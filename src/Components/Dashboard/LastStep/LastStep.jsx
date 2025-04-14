import React from 'react';

const LastStep = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4 py-8 mx-auto text-center sm:px-6 md:px-8 sm:py-12 md:py-16">
      <div className="flex items-center justify-center w-full mb-6 sm:mb-8">
        <img 
          src="/icon-thank-you.svg" 
          alt="Thank you" 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        />
      </div>
      
      <div className="w-full max-w-md mx-auto">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-blue-950">
          Thank You!
        </h1>
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
          Thanks for confirming your subscription! We hope you have fun using our platform. 
          If you ever need support, please feel free to email us at 
          <a href="mailto:support@loremgaming.com" className="ml-1 text-blue-600 hover:underline">
            support@loremgaming.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default LastStep;