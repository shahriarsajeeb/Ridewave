export const parseDuration = (durationText: any) => {
  const regex = /(\d+)\s*(hour|minute|min|mins)?/g;
  let match;
  let totalMinutes = 0;
  while ((match = regex.exec(durationText)) !== null) {
    if (match[2].startsWith("hour")) {
      totalMinutes += parseInt(match[1], 10) * 60;
    } else {
      totalMinutes += parseInt(match[1], 10);
    }
  }
  return totalMinutes;
};
