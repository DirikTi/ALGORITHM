function sort (arr, n){
    let temp = 0;
    if(n == 1){
        return arr;
    }else{
        
        for(let i = 0; i < n - 1; i++){
            if(arr[i] > arr[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        return sort(arr, n - 1);
    }
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 10; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

let result = myarray();
console.log(sort(result, result.length));