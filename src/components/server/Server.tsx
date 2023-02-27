import React, { useRef } from 'react';

function Server () {
  const img = useRef<HTMLImageElement>(null);
  const hoverEl = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    if (hoverEl.current) {
      hoverEl.current.classList.toggle('hidden');
      hoverEl.current.classList.toggle('flex');
    }
  };
  const handleMouseLeave = () => {
    if (hoverEl.current) {
      hoverEl.current.classList.toggle('hidden');
      hoverEl.current.classList.toggle('flex');
    }
  };
  return (
    <div className=' w-16 relative my-2 '>
      <img onMouseOver={handleHover} onMouseLeave={handleMouseLeave} ref={img} data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='rounded-full hover:rounded-lg
       transition-all duration-900 ease-in-out cursor-pointer'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
        <div ref={hoverEl} className=" ml-3 hidden hover absolute left-16 top-5 w-40 text-center  bg-gray-700 text-white rounded-lg">
        {/* <!-- left center arrow --> */}
    <div id='tooltip-right' className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 "> </div>
    {/* <!-- end left center arrow --> */}
          <p className=' w-4/4'>this is a channel</p>
        </div>
    </div>
  );
}

export default Server;
