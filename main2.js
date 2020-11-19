// const createGraphData = () => {
const getWeekAgo = [];
const week = [];
const day = [];
const today = new Date();
for (let i = 0; i < 7; i++) {
  week[i] = today.getMonth() + 1 + "月" + today.getDate() + "日";
  today.setDate(today.getDate() - 1);
  day[i] = today.getDay();
  getWeekAgo.push({
    label: week[i],
    id: day[i],
    figure: 0,
  });
}

console.log(...getWeekAgo);



// const test = getWeekAgo.map((el) => {

// })

//   return getWeekAgo;
// };

// console.log(createGraphData());
