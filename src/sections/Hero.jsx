import { Button, Heading } from "../components";
import { hero } from "../assets/images";

const Hero = () => {
  return (
    <div
      id="intro"
      className="w-full flex max-lg:flex-col-reverse items-center max-lg:justify-center gap-16"
    >
      <div className="flex-1">
        <Heading title="Ipsum sed adipiscing" marginBottom={"mb-8"} />
        <p className="text-desc mb-8">
          Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat
          magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus
          sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
        </p>
        <Button label={"Learn More"} />
      </div>
      <div className="rounded-full border border-[#dddddd] p-[0.65em]">
        <img
          src={hero}
          alt="hero"
          width={256}
          height={256}
          className="rounded-full block"
        />
      </div>
    </div>
  );
};

export default Hero;
