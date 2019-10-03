function Sort(arr){
    let CountingArr = [];

    console.log(arr);
    
    for(let i = 0; i < arr.length; i++){
        CountingArr.push(0);
    }
    console.log(CountingArr);
    for(let i = 0; i < arr.length; i++){
        CountingArr[arr[i]] += 1;
    }
    let result = [];
    for(let i = 0; i < CountingArr.length; i++ ){
        for(let j = 0; j < CountingArr[i]; j++){
            
            result.push(i);
        }
    }

    return result;
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 13; i++ ){
        arr.push(Math.floor((Math.random()* 9) + 1) );
    }

    return arr;
}

console.log(Sort(myarray()));
