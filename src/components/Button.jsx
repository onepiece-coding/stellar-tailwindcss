/* eslint-disable react/prop-types */

const Button = ({ label, bgColor }) => {
  return (
    <button
      className={`font-sourceSans text-lg rounded-lg border-0 cursor-pointer inline-block h-11 min-w-36 px-6 text-center decoration-0 whitespace-nowrap ${
        bgColor
          ? bgColor
          : "shadow-outline text-textColor bg-transparent hover:bg-grayColor"
      } transition-all duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
