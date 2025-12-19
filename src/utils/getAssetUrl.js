/**
 * Get the correct asset URL for both development and production
 * @param {string} path - Path relative to public folder (e.g., 'images/logo.png')
 * @returns {string} - Full URL to the asset
 */
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the base URL
  // In development, just use the root path
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
};