
const add = function (a, b)
{
  return a + b;
};

const subtract = function (a, b)
{
  return a - b;
};

const sum = function (array)
{
  if (array.length > 0)
  {
    const product = array.reduce((total, current) =>
    {
      return total + current;
    }, 0
    );
    return product;
  } else
    return 0;
};

const multiply = function (array)
{
  const product = array.reduce((total, current) =>
  {
    if (array.length > 0)
    {
      return total * current;
    };
  }, 1
  );

  return product;
};

const power = function (a, b)
{
  return a ** b;
};

const factorial = function (number)
{
  let factorial = 0;

  if (number > 2)
  {
    let spreed = [];
    for (let index = number; index >= 1; index--)
    {
      spreed.push(index);
    }
    factorial = spreed.reduce((total, current) =>
    {
      return total * current;
    },
      1
    );

  } else if (number <= 2 && number !== 0)
  {
    factorial = number;
  } else
    factorial = 1;

  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
