const args = process.argv.slice(2);
function alarmClock(times) {
  for (const time of times) {
    const second = parseInt(time, 10);
  if (isNaN(second) || second <= 0) {
    console.log('Invalid Input');
  } else {
      setTimeout(() => require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff"), second * 1000);
    }
  }
}
alarmClock(args)