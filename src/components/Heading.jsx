/* eslint-disable react/prop-types */

const Heading = ({ title, marginBottom, auto, children }) => {
  return (
    <header className={`${marginBottom ? marginBottom : "mb-12 max-md:mb-8"}`}>
      <h2
        className={` text-textColor font-sourceSans text-[2em] max-md:text-2xl leading-6 tracking-tight capitalize after:bg-heading after:w-[3.25em] after:h-[3px] after:block after:mt-[0.7em] after:mb-[1em] after:rounded-full ${
          auto && auto
        }`}
      >
        {title}
      </h2>
      {children}
    </header>
  );
};

export default Heading;
