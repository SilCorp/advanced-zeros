module.exports = function getZerosCount(number, base) {
    let primeFactor = {};
    let i = 2;
    while (i <= base) {
        if (base % i === 0) {
            if (!primeFactor[i]){
                primeFactor[i] = 0;
            }
            primeFactor[i] ++;
            base /= i;
        }
        else {
            i++;
        }
    }

    let mass = [];
    for (let key in primeFactor) {
        let prime = +key;
        let div = 2, sum = 0;
        while (div > 1) {
            div = parseInt(number / prime);
            sum += div;
            prime *= +key;
        }
        sum /= primeFactor[key];
        mass.push(parseInt(sum));
    }

    let min = mass[0];
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] < min) {
            min = mass[i];
        }
    }

    return min;
};
