export function convertTo12HourFormat(timeString: string) {
  const [hour, minute] = timeString.split(":");
  let period = "AM";
  let hour12 = parseInt(hour, 10);

  if (hour12 === 0) {
    hour12 = 12;
  } else if (hour12 >= 12) {
    period = "PM";
    if (hour12 > 12) {
      hour12 -= 12;
    }
  }

  return `${hour12}:${minute} ${period}`;
}
