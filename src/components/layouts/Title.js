import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mt-5 mb-10">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-4xl text-center text-gray-100 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title