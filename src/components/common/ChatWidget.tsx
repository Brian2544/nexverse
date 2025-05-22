import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Add type declaration for Chatwoot
declare global {
  interface Window {
    $chatwoot?: {
      baseUrl: string;
      websiteToken: string;
      locale: string;
      position: 'left' | 'right';
      launcherTitle: string;
      showPopoutButton: boolean;
      type: 'standard' | 'expanded_bubble';
      darkMode: 'light' | 'dark';
      widgetStyle?: {
        launcher: {
          backgroundColor: string;
          borderRadius: string;
          boxShadow: string;
        };
        header: {
          backgroundColor: string;
        };
      };
    };
  }
}

const ChatWidget = () => {
  useEffect(() => {
    if ((window as any).$chatwoot) return; // Prevent multiple script loads

    (function(d, t) {
      const BASE_URL = (import.meta as any).env.VITE_CHATWOOT_BASE_URL || "https://app.chatwoot.com";
      const g = d.createElement(t) as HTMLScriptElement, s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;
      g.onload = function() {
        (window as any).chatwootSDK.run({
          websiteToken: (import.meta as any).env.VITE_CHATWOOT_WEBSITE_TOKEN || "59nScwVh3LUxU7NonyfW2KPb",
          baseUrl: BASE_URL
        });
      };
      if (s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
    })(document, "script");
  }, []);

  return null;
};

export default ChatWidget; 