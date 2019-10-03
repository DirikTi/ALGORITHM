function Sort(arr) {
    let temp = 0;
    let MyLittleSweetIndex = 0;// <3

    for(let i = 0; i < arr.length; i++) {
        MyLittleSweetIndex = i;
        for(let j = i + 1; j < arr.length; j++){

            if(arr[MyLittleSweetIndex] > arr[j]){
                MyLittleSweetIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[MyLittleSweetIndex];
        arr[MyLittleSweetIndex] = temp;
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

console.log(Sort(myarray()));