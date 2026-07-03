// General utility functions

// Smooth scroll to element by ID
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Format date
export const formatYear = (dateString) => {
  return new Date(dateString).getFullYear();
};

// Check if iframe embedding is allowed (basic check)
export const canEmbedIframe = (url) => {
  try {
    const hostname = new URL(url).hostname;
    const blockedHosts = ['github.io', 'vercel.app']; // Some block iframes
    return !blockedHosts.some((host) => hostname.includes(host));
  } catch {
    return false;
  }
};

// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

// Get current year for copyright
export const getCurrentYear = () => new Date().getFullYear();
