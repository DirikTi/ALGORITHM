function sort(arr){
    let temp = 0;

    let theCountIndex = 0;
    for(let i = 0; i < arr.length - 1; i++){

        for(let j = theCountIndex; j >= 0; j--){
            console.log(theCountIndex);
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

        theCountIndex = theCountIndex + 1;

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