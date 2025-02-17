import { Button, Heading, MagnaVeroeroCard } from "../components";
import { magnaVeroeros } from "../constants";

const MagnaVeroeros = () => {
  return (
    <div id="first" className="w-full text-center">
      <Heading title={"Magna veroeros"} auto={"after:mx-auto"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {magnaVeroeros.map((item) => (
          <MagnaVeroeroCard key={item.title} {...item} />
        ))}
      </div>
      <Button label={"Learn More"} />
    </div>
  );
};

export default MagnaVeroeros;
