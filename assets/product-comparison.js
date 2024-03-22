let table_heading = document.querySelectorAll(".comparison-item-top");
let max_table_heading = 0;
table_heading.forEach((item) => {
  let item_height = item.offsetHeight;
  max_table_heading =
    item_height > max_table_heading ? item_height : max_table_heading;
});
// console.log("Result: " + max_table_heading);
table_heading.forEach((item) => {
  item.style.height = max_table_heading + "px";
  // item.style.paddingTop = 0;
  // item.style.paddingBottom = 0;
});

let table_data = document.querySelectorAll(".comparison-list-item");
let max_table_data = 0;
table_data.forEach((item) => {
  let item_height = item.offsetHeight;
  max_table_data = item_height > max_table_data ? item_height : max_table_data;
});
table_data.forEach((item) => {
  item.style.height = max_table_data + "px";
  // item.style.paddingTop = 0;
  // item.style.paddingBottom = 0;
});
