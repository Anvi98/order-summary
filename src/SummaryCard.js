import React from "react";
import iconMusic from './images/icon-music.svg';
import hero from './images/illustration-hero.svg';

const SummaryCard = () => {
  return ( 
    <div className="z-10 bg-white w-3/4 h-auto rounded-2xl shadow-xl shadow-indigo-300/50 max-w-custom">
      <img src={hero} alt="illustration" className="w-auto rounded-t-2xl "/>
      <h1 className="font-bold text-center p-5 text-dark-blue text-md">Order Summary</h1>
      <p className="text-center text-desaturated-blue px-3 text-sm mx-4">You can now listen to millions of songs, audiobooks, and podcasts on any device
      anywhere you like!
      </p>
      <div className="mx-4 mt-5 bg-very-pale-blue rounded-xl flex p-4">
        <img src={iconMusic} alt="icon music" className="w-1/6 h-1/6 mr-4" />
        <span className="w-2/5">
          <p className="font-bold text-sm text-dark-blue ">Annual Plan</p>
          <p className="text-sm text-desaturated-blue">$59.99/year</p>
        </span>
        <a href="/" className="text-sm underline items-center text-bright-blue mt-2 w-2/5 text-right hover:no-underline hover:text-indigo-500">Change</a>
      </div>
      <button className="mt-5 mx-4 mb-5 px-4 p-2 w-11/12 text-center bg-bright-blue text-white rounded-xl shadow-xl shadow-indigo-300/50 hover:bg-violet-700">Proceed to payment</button>
      <p className="text-center text-desaturated-blue mb-5 text-sm mx-4 cursor-pointer">Cancel Order</p>
    </div>
   );
}
 
export default SummaryCard;