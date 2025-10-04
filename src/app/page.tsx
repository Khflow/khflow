import { NextPage } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

const ContinueWatching = dynamic(() => import("@/components/sections/Home/ContinueWatching"));
const HomePageList = dynamic(() => import("@/components/sections/Home/List"));

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-8">
      <ContinueWatching />
      <div className="w-full max-w-[300px] mx-auto h-[250px]">
        <div id="ad-container-297ed86b29d181f660479ebab2f97717"></div>
        <Script id="ad-script" strategy="afterInteractive">
          {`
            atOptions = {
              'key': '297ed86b29d181f660479ebab2f97717',
              'format': 'iframe',
              'height': 250,
              'width': 300,
              'params': {}
            };
          `}
        </Script>
        <Script
          src="//www.highperformanceformat.com/297ed86b29d181f660479ebab2f97717/invoke.js"
          strategy="afterInteractive"
        />
      </div>
      <HomePageList />
    </div>
  );
};

export default HomePage;
