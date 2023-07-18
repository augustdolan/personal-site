import { type NextPage } from "next";
import Head from "next/head";
import { Svg } from "types/Svg";
import dynamic from "next/dynamic";
import Navbar from "~/components/Navbar";
import Button from "~/components/Button";

const Card = dynamic(() => import("~/components/Card"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>August Dot Dolan</title>
        <meta
          name="My personal website!"
          content="Generated by create-t3-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto my-0 w-3/4 pt-24 sm:pt-0">
        <section className="flex flex-col justify-center max-sm:mb-32 sm:h-screen">
          <p className="mb-4 text-peach">Hey there, I'm</p>
          <h1 className="mb-4 text-4xl text-emerald-200 sm:text-6xl">
            August Dolan <i>(They/Them)</i>.
          </h1>
          <h2 className="mb-8 text-4xl sm:text-6xl ">
            I'm a fullstack software engineer.
          </h2>
          <p className="mb-8 sm:w-1/2">
            I've got a penchant for domain driven design and believe that the
            best applications are built when the developer and user experiences
            both are par excellence.
          </p>
          <Button href="/resume" text="Resume" />
        </section>
        <section
          id="about"
          className="flex flex-col justify-center sm:h-screen max-sm:mb-32"
        >
          <h1 className="mb-8 text-5xl text-emerald-200 sm:text-5xl">
            About Me
          </h1>
          <p className="mb-4 sm:w-1/2">
            I believe that user research and input is key to creating a robust
            and extensible model. By writing software in a language and with
            domain objects that reflect the expert's understanding of the world
            we're helping, we bind engineer and user understanding together,
            creating software that is both explicit and extensible.
          </p>
          <p className="sm:w-1/2">
            I bring passion and energy to the teams I am on, brightening the
            experience of my colleagues. I'm currently looking for a new, fast
            paced opportunity where I can show my chops and continue to grow at
            a rapid pace alongside a product and team.
          </p>
        </section>
        <section
          id="projects"
          className="flex flex-col justify-center sm:h-screen"
        >
          <h1 className="mb-8 text-5xl text-emerald-200">Recent Projects</h1>
          <ul className="grid sm:grid-cols-4 sm:gap-5">
            <Card
              src={Svg.Trove}
              description="a site for record collectors using Discogs"
              title="Trove"
              link="https://trove-silk.vercel.app"
              iconLink="https://github.com/augustdolan/trove"
              icon={Svg.Github}
            />
          </ul>
        </section>
        <section id="contact" className="flex h-screen flex-col justify-center">
          <h1 className="mb-8 text-5xl text-emerald-200">Drop a Line</h1>
          <p className="mb-8 w-1/2">
            I'm currently looking for my next big opportunity. If you want to
            chat, just reach out!
          </p>
          <Button href="mailto: august.dolan1@gmail.com" text="Contact Me" />
        </section>
      </main>
    </div>
  );
};

export default Home;
