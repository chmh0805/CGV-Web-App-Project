export function getDefaultDates() {
  let today = new Date();
  let tmp = [];
  tmp.push(today);
  for (var i = 1; i < 7; i++) {
    tmp.push(new Date(new Date().valueOf() + 24 * 60 * 60 * 1000 * i));
  }
  return tmp;
}
