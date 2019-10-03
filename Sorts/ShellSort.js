function sort(arr){
    let n = arr.length / 2;
    n = parseInt(n);
    let temp = 0;

    console.log(arr);
    while(n > 1){
        for(let i = 0; i < arr.length / 2; i++){
            if(arr[i] > arr[i + n]){
                temp = arr[i];
                arr[i] = arr[i + n];
                arr[i + n] = temp;
            }
        }
        
        n = parseInt(n / 2);
    }
    console.log(arr);
    arr =  bubbleSort(arr);
    return arr;
    

}

function bubbleSort(arr){
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


let myarray = () => {
    let arr = [];
    for(let i = 0; i < 10; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

console.log(sort(myarray()));