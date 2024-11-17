import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-6/12 lg:w-4/12 space-y-3 my-12">
      <p className="text-yellow-500 font-mono tracking-wide text-lg">
        {subHeading}
      </p>
      <h3 className="uppercase text-3xl lg:text-4xl border-t-2 border-b-2 border-yellow-500 py-3 font-bold text-gray-800 tracking-widest">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
