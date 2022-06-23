function randomizeFromInterval(min, max) {
  if (min > max) {
    const temporary = min;
    min = max;
    max = temporary;
  }

  const result = Math.floor(Math.random() * (max - min + 1) + min); //Взял тут https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return result;
}
randomizeFromInterval(1, 10);

function randomizeFromIntervalWithDecimalPlaces(min, max, decimalPlaces) {
  if (min > max) {
    const temporary = min;
    min = max;
    max = temporary;
  }

  const randomizeResult = Math.random() * (max - min + 1) + min;
  const power = Math.pow(10, decimalPlaces); //Взял тут https://stackoverflow.com/questions/45735472/generate-a-random-number-between-2-values-to-2-decimals-places-in-javascript
  const result = Math.floor(randomizeResult * power) / power;
  return result;
}

randomizeFromIntervalWithDecimalPlaces(1, 10, 5);
