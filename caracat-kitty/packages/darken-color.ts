export const darkenColor = (color, percent) => {
  // Validate input color
  if (!color || typeof color !== 'string' || !color.match(/^#[0-9a-f]{6}$/i)) {
    console.error('Invalid color format');
    return color;
  }

  // Parse hex color
  const hex = color.slice(1);
  const num = parseInt(hex, 16);

  // Calculate new color
  let r = (num >> 16) + percent;
  let g = ((num >> 8) & 0x00ff) + percent;
  let b = (num & 0x0000ff) + percent;

  // Clamp values to [0, 255]
  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);

  // Convert back to hex
  const rr = Math.round(r).toString(16).padStart(2, '0');
  const gg = Math.round(g).toString(16).padStart(2, '0');
  const bb = Math.round(b).toString(16).padStart(2, '0');

  return `#${rr}${gg}${bb}`;
};
