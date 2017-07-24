function multipleValuesForAKey(args) {
    let obj = {};
    for(let item of  args.slice(0, args.length - 1)){
        let token = item.split(' ');
        let key = token[0];
        let value = token[1];
        if(obj[key]){
            obj[key].push(value);
        }else{
            obj[key] = [];
            obj[key].push(value);

        }
    }
    let key = args[args.length - 1];
    console.log(obj[key].join("\n") || "None");
}
multipleValuesForAKey(["3 test","3 test1","4 test2","4 test3","4 test5","4"]);