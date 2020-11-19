// const createGraphData = () => {
const getWeekAgo = [];
const test = [];
const today = new Date();
for (let i = 0; i < 7; i++) {
  test[i] = today.getMonth() + 1 + "月" + today.getDate() + "日";
  const info = today.setDate(today.getDate() - 1);
  getWeekAgo.push({
    label: test,
    figure: 0,
  });
}

console.log(...getWeekAgo);

// const test = getWeekAgo.map((el) => {

// })

//   return getWeekAgo;
// };

// console.log(createGraphData());
