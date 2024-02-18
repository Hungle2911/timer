const args = process.argv.slice(2);
function alarmClock(times) {
  for (const time of times) {
    const milSecond = parseInt(time, 10);
  if (isNaN(milSecond) || milSecond <= 0) {
    console.log('Invalid Input');
  } else {
      setTimeout(() => require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff"), milSecond * 1000);
    }
  }
}
alarmClock(args)