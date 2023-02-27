import React from 'react';
import img from '../../../assets/bottom_landing.svg';

function lastInfo (): JSX.Element {
  return (
    <div className="text-center w-full mx-auto bg-slate-100 pt-8">
      <div className="top">
        <h1 className="font-ginto font-black lg:mt-20 text-3xl sm:text-5xl 1-8/12">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p className="font-sans text-sm md:text-base lg:text-lg font-light lg:w-7/12 text-center mx-auto mt-7 p-5 md:p-0">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <div className="bottom">
        <img className="mx-auto w-8/12" src={img} alt="" />
      </div>
    </div>
  );
}

export default lastInfo;
