// Umami Tracking for Socials - social.elijahu.me and devsoc.elijahu.me
(function() {
  // Configuration - REPLACE WITH YOUR ACTUAL UMAMI IDs
  const TRACKING_CONFIG = {
    // Production environment - social main
    'social.elijahu.me': 'b18cfd3f-b88d-4df0-b98e-3e67246fcb7d',  
    
    // Development environment - social sub
    'devsoc.elijahu.me': 'a9cbd410-f14a-43f6-8e68-e56934f06bb0', 
    
    // Add other domains as needed
    'localhost': null, // Disable on localhost
    '127.0.0.1': null  // Disable on localhost
  };

  const hostname = window.location.hostname;
  const websiteId = TRACKING_CONFIG[hostname] || TRACKING_CONFIG['devsoc.elijahu.me'];
  
  if (websiteId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://stats.elijahu.me/script.js';
    script.setAttribute('data-website-id', websiteId);
    document.head.appendChild(script);
    
    console.log('Umami tracking loaded for social:', hostname, 'ID:', websiteId);
  } else {
    console.log('Umami tracking disabled for:', hostname);
  }
})();
