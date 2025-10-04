import { FC, useEffect } from 'react';

interface CustomIframeAdProps {
  adKey: string; // Your ad key, e.g., '297ed86b29d181f660479ebab2f97717'
  width?: number; // Default: 300
  height?: number; // Default: 250
  format?: string; // Default: 'iframe'
}

const CustomIframeAd: FC<CustomIframeAdProps> = ({
  adKey,
  width = 300,
  height = 250,
  format = 'iframe',
}) => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Remove any existing script to avoid duplicates
    const existingScript = document.getElementById(`ad-script-${adKey}`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create the config script
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.id = `ad-config-${adKey}`;
    configScript.innerHTML = `
      atOptions = {
        'key': '${adKey}',
        'format': '${format}',
        'height': ${height},
        'width': ${width},
        'params': {}
      };
    `;
    document.body.appendChild(configScript);

    // Create the invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.id = `ad-script-${adKey}`;
    invokeScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
    document.body.appendChild(invokeScript);

    // Cleanup on unmount
    return () => {
      if (configScript.parentNode) configScript.parentNode.removeChild(configScript);
      if (invokeScript.parentNode) invokeScript.parentNode.removeChild(invokeScript);
    };
  }, [adKey, width, height, format]);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: '0 auto', // Center it
      }}
      className="border border-gray-200 rounded" // Optional: Visual placeholder
    >
      {/* Ad will render here via the script */}
      <div id={`ad-placeholder-${adKey}`} />
    </div>
  );
};

export default CustomIframeAd;
