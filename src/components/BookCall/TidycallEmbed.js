import React, { useEffect } from "react";

const TidycalEmbed = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="tidycal-container">
      <div className="tidycal-embed" data-path="hasnatnaveed00"></div>
    </div>
  );
};

export default TidycalEmbed;
