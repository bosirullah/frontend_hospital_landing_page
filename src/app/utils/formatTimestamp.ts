export const formatTimestamp = (dateStr: string): string => {
  // Parse the date string into a Date object
  const dateObj = new Date(dateStr);

  dateObj.setTime(dateObj.getTime());

  // Convert to IST (UTC+5:30)
  const offset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
  const istDateObj = new Date(dateObj.getTime() + offset);

  // Get hours and minutes
  let hours = istDateObj.getUTCHours();
  let minutes = istDateObj.getUTCMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  // Format hours and minutes to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();

  const time = `${hours}:${minutesStr}${ampm}`;

  // Get day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[istDateObj.getUTCDay()];

  // Get day, month, and year
  const day = istDateObj.getUTCDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[istDateObj.getUTCMonth()];
  const year = istDateObj.getUTCFullYear();

  // Format the final string
  const formattedDate = `${time} - ${dayName}, ${day} ${monthName} ${year}`;

  return formattedDate;
};
