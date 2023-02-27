import React from 'react';
import allDetails from './componentHelpers/imageIndex';
import { type Detailes, type IndexProp } from './componentHelpers/component.interfaces';

function Info ({ index }: IndexProp): JSX.Element {
  const detailes: Detailes = allDetails[index - 1];
  const wrapper = 'wrapper md:flex  mt-20 w-full md:w-3/4 mx-auto';
  return (
    <div className={index % 2 === 0 ? 'bg-slate-100 py-20' : 'py-20'}>
      <div
        className={index % 2 === 0 ? `${wrapper} md:flex-row-reverse` : wrapper}
      >
        <div className="left w-full sm:w-2/5 md:w-2/4  sm:ml-24 mx-auto">
          <img className="sm:float-left sm:ml-15" src={detailes.image} alt="" />
        </div>
        <div className="right w-4/5 md:w-3/5 md:text-left align-middle  flex flex-col mx-auto text-center md:pl-15">
          <div className="top font-sans font-extrabold text-2xl md:text-5xl w-full sm:float-left mr-29 md:mr-0">
            <h2>{detailes.title}</h2>
          </div>
          <div className="bottom font-sans w-3/4 sm:float-left mt-5 text-lg mx-auto md:ml-0">
            <p>{detailes.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
