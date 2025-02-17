import { Button, Heading } from "../components";

const CongueImperdiet = () => {
  return (
    <div id="started" className="w-full text-center">
      <Heading title={"Congue imperdiet"} auto={"after:mx-auto"}>
        <p className="font-sourceSans text-xl max-md:text-base leading-8 tracking-tight font-light">
          Donec imperdiet consequat consequat. Suspendisse feugiat congue
          <br className="max-md:hidden" /> posuere. Nulla massa urna, fermentum
          eget quam aliquet.
        </p>
      </Heading>
      <div className="mt-12 flex justify-center gap-4">
        <Button
          label={"Get Started"}
          bgColor={"text-white bg-blueColor hover:bg-transparentedBlueColor"}
        />
        <Button label={"Learn More"} />
      </div>
    </div>
  );
};

export default CongueImperdiet;
