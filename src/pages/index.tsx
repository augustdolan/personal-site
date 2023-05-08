import { type NextPage } from "next";
import Head from "next/head";
// import Card from "~/components/Card";
import { Svg } from "types/Svg";

import { api } from "~/utils/api";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("~/components/Card"), { ssr: false })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>August Dot Dolan</title>
        <meta
          name="My personal website!"
          content="Generated by create-t3-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-4">
        <h1 className="text-center text-4xl mb-16 mt-2">
          August Dolan <i className="text-xs">(They/Them)</i>
        </h1>
        <div className="w-1/2 translate-x-1/2">
          <div className="mb-8">
            <h2 className="text-sm italic text-gray-500">Site Links</h2>
            <ul className="grid grid-cols-3 gap-5">
              <Card
                src={"/mock-img.webp"}
                title="Resume"
                link="/resume"
              />
              <Card
                src="/mock-img.webp"
                title="LinkedIn"
                link="https://www.linkedin.com/in/august-dolan"
                // icon={Svg.Linkedin}
              />
              <Card
                src="/mock-img.webp"
                title="Github"
                link="http://www.github.com/augustdolan"
              />
            </ul>
          </div>
          <div>
            <h2 className="text-sm italic text-gray-500">Current Projects</h2>
            <ul className="grid grid-cols-3 gap-5">
              <Card
                src={Svg.Trove}
                description="a site for record collectors using Discogs"
                title="Trove"
                link="https://trove-silk.vercel.app"
                iconLink="https://github.com/augustdolan/trove"
                icon={Svg.Github}
              />
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
