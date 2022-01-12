const talkingCalendar = function (date) {
  const monthNames = [
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

  let parts = date.split("/");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  let year = parts[0];
  let day = parts[2];
  let string = "th ";
  if (day.slice(-1) == 2) {
    string = "nd ";
  }
  if (day < 10) {
    day = day.slice(day[0]);
  }

  const d = new Date(date);
  return (
    monthNames[d.getMonth()] +
    " " +
    day.replace(day[slice(0)], "") +
    string +
    year
  );
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
