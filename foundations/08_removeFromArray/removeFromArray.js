const removeFromArray = function (array, ...theArgs)
{
    for (let item of theArgs) 
    {
        while (array.includes(item))
        {
            array.splice(array.indexOf(item), 1);

        };

    };

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
