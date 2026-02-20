/**
 * Calculate approximate age bracket based on birth year and chapter date.
 * Returns strings like "in their 20s", "in their 30s", etc.
 * Returns null if birth year or chapter date is missing.
 */
const getAgeBracket = (birthYear, chapterDate) => {
  if (!birthYear || !chapterDate) return null;

  let chapterYear;
  if (chapterDate.toDate) {
    chapterYear = chapterDate.toDate().getFullYear();
  } else if (typeof chapterDate === 'number') {
    chapterYear = chapterDate;
  } else {
    const str = String(chapterDate);
    if (str.includes('-')) {
      chapterYear = parseInt(str.split('-')[0], 10);
    } else {
      chapterYear = parseInt(str, 10);
    }
  }

  if (!chapterYear || isNaN(chapterYear)) return null;

  const age = chapterYear - Number(birthYear);
  if (age < 0) return null;
  if (age < 10) return 'as a child';
  if (age < 20) return 'in their teens';

  const decade = Math.floor(age / 10) * 10;
  if (decade >= 100) return null;
  return `in their ${decade}s`;
};

export default getAgeBracket;
