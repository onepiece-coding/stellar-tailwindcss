import { Nav } from "./components";
import {
  Hero,
  MagnaVeroeros,
  IpsumConsequat,
  CongueImperdiet,
} from "./sections";

const App = () => {
  return (
    <main className={"relative"}>
      <Nav />
      <section className="padding mt-[90px]">
        <Hero />
      </section>
      <section className="padding border-t border-[#dddddd]">
        <MagnaVeroeros />
      </section>
      <section className="padding border-t border-[#dddddd]">
        <IpsumConsequat />
      </section>
      <section className="padding border-t border-[#dddddd]">
        <CongueImperdiet />
      </section>
    </main>
  );
};

export default App;
