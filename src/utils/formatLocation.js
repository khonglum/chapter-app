// Format location string from country, state, city fields
// e.g. "🇲🇾 Malaysia, Selangor, Ampang" or "🇲🇾 Malaysia" if no state/city
const formatLocation = (country, state, city) => {
  const parts = [country, state, city].filter(Boolean);
  return parts.join(', ');
};

export default formatLocation;
