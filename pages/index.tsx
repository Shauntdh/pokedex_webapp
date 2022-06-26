import type { NextPage } from "next";
import Searchbar from "../components/Searchbar";
import PokemonLogo from "../public/svg/Pokemon.svg";

const Home: NextPage = () => {
  return (
    <main className="my-0 mx-auto w-full max-w-8xl min-h-screen py-0 px-60">
      <section className="flex flex-col justify-center items-center p-0 min-h-screen max-w-5xl -my-20">
        <div>
          <PokemonLogo className=" text-512xl" />
        </div>
        <div className=" mt-12">
          <Searchbar />
        </div>
      </section>
    </main>
  );
};

export default Home;
