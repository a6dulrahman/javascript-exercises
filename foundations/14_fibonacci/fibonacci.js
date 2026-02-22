
const fibonacci = function (number)
{
    let arr = [0, 1, ];

    if (number == 0) return 0;
    if (number < 0) return "OOPS";
    
    for (let index = 2; index <= number; index++)
    {
        let fibonacciValue = (index - 1) + (index - 2);
        if (fibonacciValue >= 0)
        {
            arr[index] = arr[index -1] + arr[index - 2];
        }

    };

    return arr[number];
};
// Do not edit below this line
module.exports = fibonacci;
