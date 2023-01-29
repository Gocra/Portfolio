export function setIntervalDelay(func, interval) {
  const wait = setTimeout(() => {
    clearTimeout(wait);
    return setInterval(func, interval);
  }, 2000);
}
