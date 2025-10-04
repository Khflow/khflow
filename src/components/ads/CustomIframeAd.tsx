"use client";

import React, { useEffect } from "react";

interface BannerAdProps {
  adKey: string; // The key from Adsterra
  width?: number;
  height?: number;
  id: string; // Unique container ID
}

const BannerAd: React.FC<BannerAdProps> = ({ adKey, width = 728, height = 90, id }) => {
  useEffect(() => {
    // Define atOptions before script loads
    (window as any).atOptions = {
      key: adKey,
      format: "iframe",
      height,
      width,
      params: {},
    };

    // Create script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
    script.async = true;

    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = ""; // clear on re-render
      container.appendChild(script);
    }
  }, [adKey, width, height, id]);

  return (
    <div className="flex justify-center">
      <div id={id} style={{ width, height }} />
    </div>
  );
};

export default BannerAd;
