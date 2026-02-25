const findTheOldest = function (array)
{
    function calculateAge(obj)
    {
        if ("yearOfDeath" in obj)
        {
            return obj.yearOfDeath - obj.yearOfBirth;
        } else
            return (new Date().getFullYear()) - obj.yearOfBirth;

    }

    const obj = array.reduce((total, current) =>
    {
        current["age"] = calculateAge(current);
        total.push(current);
        return total;
    }, []
    ).sort((a, b) =>
    {
        return b.age - a.age;
    }
    );

    return obj[0];

};



// Do not edit below this line
module.exports = findTheOldest;
