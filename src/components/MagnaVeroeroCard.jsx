/* eslint-disable react/prop-types */

const MagnaVeroeroCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center last:col-span-1 last:md:col-span-2 last:lg:col-span-1 ">
      <div className="w-[170px] h-[170px] rounded-full border border-[#dddddd] p-[0.65em] mb-8">
        <div className="w-full h-full flex justify-center items-center rounded-full border border-[#dddddd]">
          <img src={icon} alt={title} width={100} height={100} />
        </div>
      </div>
      <h3 className="leading-6 font-sourceSans mb-[0.7em] tracking-tight text-xl text-textColor capitalize">
        {title}
      </h3>
      <p className="text-desc max-w-[400px]">{desc}</p>
    </div>
  );
};

export default MagnaVeroeroCard;
