function HeapSort(arr){
    //0 index 1 ve 2 Child
    //1 index 3 ve 4 child
    //3 index 5 ve 6 child

    console.log(arr);
    let temp = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        
        let n = i;
        let changeIndex = i;
        while(n > 1){
            if(n % 2 == 1){
                //İkili kontrol yapılacak
                if(arr[n] > arr[n - 2] ){
                    temp = arr[n];
                    arr[n] = arr[n - 2];
                    arr[n- 2] = temp;

                }
            }else if(n % 2 == 0){
                if(arr[n] > arr[n - 1]){
                    temp = arr[n];
                    arr[n] = arr[n- 1];
                    arr[n - 1] = temp;

                }
            }
            n = n - 1;

        }

        if(arr[n] > arr[n - 1]){
            temp = arr[n];
            arr[n] = arr[n- 1];
            arr[n - 1] = temp;
        }
        temp = arr[0];
        arr[0] = arr[changeIndex];
        arr[changeIndex] = temp;
            
        changeIndex = changeIndex - 1;

    }


    return arr;
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 9; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

console.log(HeapSort(myarray()));