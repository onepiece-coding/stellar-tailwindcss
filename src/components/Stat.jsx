/* eslint-disable react/prop-types */

const Stat = ({ icon, stat, name, bgColor }) => {
  return (
    <div
      className={`flex-1 p-6 font-sourceSans text-lg text-white first:rounded-tl-lg md:first:rounded-bl-lg max-md:first:rounded-tr-lg md:last:rounded-tr-lg last:rounded-br-lg max-md:last:rounded-bl-lg ${bgColor}`}
    >
      <span className="inline-block">
        <img src={icon} alt={name} width={55} height={55} />
      </span>
      <strong className="block text-[2em] leading-[1.1] text-inherit tracking-tighter font-light mb-1">
        {stat}
      </strong>
      {name}
    </div>
  );
};

export default Stat;
