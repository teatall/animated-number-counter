//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
 const target = document.querySelector(qSelector);
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  target.innerText = Math.floor(progress * (end - start) + start).toLocaleString('en');
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
 counterAnim("#count1", 100, 21300, 1500);
 counterAnim("#count2", 0, 1132, 1000);
 counterAnim("#count3", -1000, -150, 2000);
 counterAnim("#count4", 500, -100, 2500);
});