function sort(arr, n){
    if(n == arr.length){
        return arr;
    }

    for(let i = n; i >= 0; i--){

        if(arr[i] > arr[i + 1]){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    
    return sort(arr, n + 1);
}


let myarray = () => {
    let arr = [];
    for(let i = 0; i < 10; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}
let result = myarray();

console.log(sort(result, 0));