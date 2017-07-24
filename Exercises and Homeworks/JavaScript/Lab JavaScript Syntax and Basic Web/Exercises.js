function multiplyANumberBy2(nums) {
    let num = Number(nums[0]);
    console.log(num * 2);
}

function multiplyTwoNumbers(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    console.log(num1 * num2);
}

function multiplyOrDivideNumberByGivenSecondNumber(nums) {
    let n = Number(nums[0]);
    let x = Number(nums[1]);

    if(n > x){
        console.log(n / x);
    }else {
        console.log(n * x);
    }
}

function  productOf3Numbers(nums) {
    let count = 0;
    for (let item of nums){
        if(item === 0){
            console.log("Positive");
            return;
        }
        let num = Number(item);
        if(num < 0){
            count ++;
        }
    }
    if(count % 2 == 0){
        console.log("Positive");
    }else{
        console.log("Negative");
    }
}

function printNumbersFrom1TtoN(num) {
    let n = Number(num[0]);
    for(let i = 1; i <= n; i ++){
        console.log(i);
    }
    
}

function printNumbersFromNTo1(num) {
    let n = Number(num[0]);
    for(let i = n; i > 0; i --){
        console.log(i);
    }
}

function printLines(args) {
    let index = 0;
    let line = args[index];
    while(line !== 'Stop'){
        console.log(line);
        line = args[++ index];
    }
}

function reversedOrder(args) {
    let arr = args.reverse();
    console.log(arr.join("\n"));
}

function setValuesToIndexes(args) {
    let arr = new Array(Number(args[0])).fill(0);
    for(let i = 1; i < args.length; i ++){
        let input = args[i].split(" - ");
        let index = Number(input[0]);
        let value = input[1];
        arr[index] = value;
    }
    console.log(arr.join("\n"));
}

function addRemoveElements(args) {
    let arr = [];
    for(let item of args){
        let input = item.split(' ');
        let command = input[0];
        switch(command){
            case  "add" :{
                let value = input[1];
                arr.push(value);
                break;
            }
            case "remove":{
                let index = input[1];
                if(index >= 0 && index < arr.length){
                    arr.splice(index, 1);
                }
            }
        }
    }
    console.log(arr.join("\n"));
}

function keyValuePairs(args) {
    let arr = {};
    for(let item of  args.slice(0, args.length - 1)){
        let token = item.split(' ');
        let key = token[0];
        arr[key] = token[1]
    }
    let key = args[args.length - 1];
    console.log(arr[key] || "None");
}

keyValuePairs(["3 test","3 test1","4 test2","4 test3","4 test5","4"]);