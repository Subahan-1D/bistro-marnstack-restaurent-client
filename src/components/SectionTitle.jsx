import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 space-y-2 my-8">
      <p className="text-yellow-500">{subHeading}</p>

      <h3 className="uppercase text-2xl border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
