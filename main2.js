let getWeekAgo = [];
let today = new Date();
for (let i = 0; i < 7; i++) {
  getWeekAgo[i] = today.getMonth() + 1 + "月" + today.getDate() + "日";
  today.setDate(today.getDate() - 1);
}
console.log(getWeekAgo);
