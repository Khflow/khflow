import dynamic from "next/dynamic";

// Dynamic imports for your sections (these can stay as-is if they're Client Components or static)
const ContinueWatching = dynamic(() => import("@/components/sections/Home/ContinueWatching"));
const HomePageList = dynamic(() => import("@/components/sections/Home/List"));

// Dynamic import for the ad (no { ssr: false } needed—'use client' handles it)
const CustomIframeAd = dynamic(() => import("@/components/ads/CustomIframeAd"));

const HomePage = () => { // No NextPage needed in App Router
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
