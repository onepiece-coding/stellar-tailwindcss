import { Button, Heading } from "../components";
import { statistics } from "../constants";
import { Stat } from "../components";

const IpsumConsequat = () => {
  return (
    <div id="second" className="w-full text-center">
      <Heading title={"Ipsum consequat"} auto={"after:mx-auto"}>
        <p className="font-sourceSans text-xl max-md:text-base leading-8 tracking-tight font-light">
          Donec imperdiet consequat consequat. Suspendisse feugiat congue
          <br className="max-md:hidden" /> posuere. Nulla massa urna, fermentum
          eget quam aliquet.
        </p>
      </Heading>
      <div className="flex max-md:flex-col max-md:w-[20em] max-md:max-w-full max-md:mx-auto mb-12">
        {statistics.map((stat) => {
          return <Stat key={stat.name} {...stat} />;
        })}
      </div>
      <Button label={"Learn More"} />
    </div>
  );
};

export default IpsumConsequat;
