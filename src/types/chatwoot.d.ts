interface ChatwootConfig {
  baseUrl: string;
  websiteToken: string;
  locale: string;
  position: 'left' | 'right';
  launcherTitle: string;
  showPopoutButton: boolean;
  type: 'standard' | 'expanded_bubble';
  darkMode: 'light' | 'dark';
}

declare global {
  interface Window {
    $chatwoot: ChatwootConfig;
  }
  
  interface ImportMetaEnv {
    readonly VITE_CHATWOOT_BASE_URL?: string;
    readonly VITE_CHATWOOT_WEBSITE_TOKEN?: string;
    // add other env variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
} 