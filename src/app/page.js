import Hero from "../../src/components/layout/Hero";
import HomeMenu from "../../src/components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex
         flex-col gap-4">
          <p>
            Lorem ipsumwjdhudbv iwdqewibqoihuqefdjidohvwbsnc
            dkoqijewvqoeifwrfvhi e90fuwrhfnwkqqe9fw0hnkdqweoqw
            kodeifjh owiqeihwfj wjiehwj
            koieduifhwnqkijhew, oqequhrfwoieuhfenmwkojhebdf ijdhefb
          </p>
          <p>
            Lorem ipsumwjdhudbv iwdqewibqoihuqefdjidohvwbsnc
            dkoqijewvqoeifwrfvhi e90fuwrhfnwkqqe9fw0hnkdqweoqw
            kodeifjh owiqeihwfj wjiehwj
            koieduifhwnqkijhew, oqequhrfwoieuhfenmwkojhebdf ijdhefb
          </p>
          <p>
            Loreiwuefgvbshqiqfhewfvnwokmq, jiwqhudh wqheuwo
            kwoqefhuvfijqk vfhiunr4jffhu werfd
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+4978462097423">
            +49 784 62097423
          </a>
        </div>
      </section>
    </>
  );
}
