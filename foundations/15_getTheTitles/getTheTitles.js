const getTheTitles = function (array)
{
    let accumulator = [];

    for (let index = 0; index < array.length; index++)
    {
        accumulator.push(array[index].title);
    }

    return accumulator;
};


// Do not edit below this line
module.exports = getTheTitles;
