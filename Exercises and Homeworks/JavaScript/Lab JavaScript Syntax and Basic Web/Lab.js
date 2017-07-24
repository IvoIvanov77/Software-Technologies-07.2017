function solve() {
    let val = ((30 + 25) * 1/3 * (35 - 14 - 12));

    console.log(val * val);
    return val * val;
}

function sum(nums) {
    return Number(nums[0]) + Number(nums[1]);
}


function threeIntegersSum(arr) {

    let nums = arr[0].split(' ').map(Number);

    console.log(
        checkSum(nums[0], nums[1], nums[2]) ||
        checkSum(nums[0], nums[2], nums[1]) ||
        checkSum(nums[1], nums[2], nums[0]) || 'No'
    );

    function checkSum(num1, num2, sum) {
        if(num1 + num2 != sum){
            return false;
        }
        if(num1 > num2){
            [num1, num2] = [num2, num1];
            return `${num1} + ${num2} = ${sum}`
        }
    }
}

function symmetricNumbers(arr) {
    let n = Number(arr[0]), result = ''
    for (let i = 1; i <= n; i++)
        if (isSymmetric("" + i))
            result += i + " "
    console.log(result)
    function isSymmetric(str) {
        for (let i = 0; i < str.length /2; i++)
            if (str[i] != str[str.length - i - 1])
                return false
        return true
    }
    return result;
}

function calcSumsByTown(arr) {
    let objects = arr.map(JSON.parse);
    let sums = {};

    for(let obj of objects){
        if(obj.town in sums){
            sums[obj.town] += obj.income;
        }else {
            sums[obj.town] = obj.income;
        }
    }
    let towns = Object.keys(sums).sort();
    for(let town of towns){
        console.log(`${town} -> ${sums[town]}`);
    }
}

function largest3Numbers(arr) {
    let nums = arr.map(Number);
    let numsSorted = nums.sort((a,b) => b - a);
    let count = Math.min(numsSorted.length, 3);
    for(let i = 0; i < count; i ++){
        console.log(numsSorted[i]);
    }
}

function extractCapitalCaseWords(arr) {
    let text = arr.join(",");
    let words = text.split(/\W+/);
    let notEmptyWords = words.filter(w => w.length > 0);

    function isUppercase(str) {
        return str == str.toUpperCase();
    }

    let upWords = notEmptyWords.filter(isUppercase);
    console.log(upWords.join(", "));
}

solve();