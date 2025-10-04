import { NextPage } from "next";
import dynamic from "next/dynamic";

// Dynamic imports for your sections
const ContinueWatching = dynamic(() => import("@/components/sections/Home/ContinueWatching"));
const HomePageList = dynamic(() => import("@/components/sections/Home/List"));

// Dynamic import for the ad (client-side only)
const CustomIframeAd = dynamic(() => import("@/components/ads/CustomIframeAd"), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-8">
      <ContinueWatching />
      
      {/* Ad placement: Between sections */}
      <div className="my-4 md:my-8 text-center">
        <CustomIframeAd
          adKey="297ed86b29d181f660479ebab2f97717"
          width={300}
          height={250}
          format="iframe"
        />
      </div>
      
      <HomePageList />
    </div>
  );
};

export default HomePage;
