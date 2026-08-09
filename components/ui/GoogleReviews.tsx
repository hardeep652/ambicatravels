"use client";

import Script from "next/script";
import { useEffect } from "react";

export function GoogleReviews() {
  useEffect(() => {
    const SELECTORS = [
      ".eapps-widget-toolbar",
      "[class*='eapps-widget-toolbar']",
      "[class*='eapps-link']",
      "[class*='eapps-branding']",
      "a[href*='elfsight.com'][target]",
    ];

    const removeBadge = () => {
      SELECTORS.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          el.remove();
        });
      });
    };

    // Run immediately, after short delay, and keep watching
    removeBadge();
    const t1 = setTimeout(removeBadge, 500);
    const t2 = setTimeout(removeBadge, 1500);
    const t3 = setTimeout(removeBadge, 3000);

    const observer = new MutationObserver(removeBadge);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-a6a9cf0b-7919-4798-bdc0-4b1897611ef2 w-full"
        data-elfsight-app-lazy
      />
      {/* White box overlay to hide the Elfsight free badge */}
      <div className="absolute bottom-0 left-1/2 z-[99] h-12 w-80 -translate-x-1/2 bg-white pointer-events-none" />
    </div>
  );
}
