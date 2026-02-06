
const repeatString = function (str, count)
{
    // count == 0 -> ''
    // count == 1 -> 'str'
    // count == num -> 'str' * num
    // count == negative -> 'ERROR'  
    let result = str;

    if (count < 0)
    {
        return "ERROR";

    } else if (count === 0)
    {
        return "";

    } else
    {
        for (let i = 1; i < count; i++) 
        {
            result += str;
        };
        return result;
    };
};

// Do not edit below this line
module.exports = repeatString;
