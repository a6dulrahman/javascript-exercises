
const sumAll = function (start, end) 
{
    if (Number.isInteger(start) && Number.isInteger(end) && start > 0 && end > 0)
    {
        if (start < end)
        {
            let result = 0;

            for (let i = start; i <= end; i++) 
            {
                result += i;

            };

            return result;

        } else
        {
            let result = 0;

            for (let i = end; i <= start; i++) 
            {
                result += i;

            };

            return result;

        };

    } else
    {
        return "ERROR";

    };

};


// Do not edit below this line
module.exports = sumAll;
