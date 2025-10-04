import { NextPage } from "next";
import dynamic from "next/dynamic";
const ContinueWatching = dynamic(() => import("@/components/sections/Home/ContinueWatching"));
const HomePageList = dynamic(() => import("@/components/sections/Home/List"));
import BannerAd from "@/components/ads/BannerAd";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-8">
      <ContinueWatching />
      <HomePageList />
            {/* ✅ Banner Ad at the bottom */}
      <div className="flex justify-center my-8">
        <BannerAd
          adKey="297ed86b29d181f660479ebab2f97717"
          width={300}
          height={250}
          id="ad-bottom"
        />
      </div>
    </div>
  );
};

export default HomePage;
