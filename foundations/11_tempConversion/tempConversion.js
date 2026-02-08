const convertToCelsius = function (degree)
{
  // (x - 32) * 9/5
  let converted = (degree - 32) * (5/9);
  return (Math.round( converted * 10) / 10);
};

const convertToFahrenheit = function (degree)
{
  // x * 9/5 + 32;
  let converted = degree * 9/5 + 32;
  return (Math.round(converted * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// let celsius = convertToCelsius(1);
// console.log(celsius);