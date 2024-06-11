//  method to generate divisionShortname_mtxt from slug = slug seperated by '-' and capitalized
export const generateTitleCaseFromSlug = (slug: string) => {
  // example: "george-arents-collection" should be "George Arents Collection"
};

// method to generate slug from divisionShortname_mtxt = divisionShortname_mtxt lowercased and ' ' is replaced with '-'
export const generateSlugFromTitleCase = (slug: string) => {
  // example: "George Arents Collection" should be "george-arents-collection"
};

// methods from ./util.tss that would be good in this file

// function addCommas(number) {
//   // Return the formatted number
//   return Number(number).toLocaleString("en-US");
// }

// export function getCustomTimestamp() {
//   // Return the formatted number
//   // timestamp: date
//   const currentDate = new Date();
//   const currentDayOfMonth = currentDate.getDate();
//   const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
//   const currentYear = currentDate.getFullYear();
//   const dateString =
//     currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
//   // timestamp: time
//   const hh = currentDate.getUTCHours();
//   const mm = currentDate.getUTCMinutes();
//   const ss = currentDate.getSeconds();
//   const timeString = hh + ":" + mm + ":" + ss;
//   const timestamp = dateString + " " + timeString;

//   return timestamp;
// }
