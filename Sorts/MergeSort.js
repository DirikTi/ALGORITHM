function MergeSort(arr, n){
    
    let temp = 0;
    if(arr.length == n){
        return arr;
    }

    if(n == 1){
        for(let i = 0; i < arr.length; i = i + 2){
            if(arr[i] > arr[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        return MergeSort(arr, 2);
    }

    for(let i = 0; i < arr.length; i = i + n * 2){
        if(i + n > arr.length){
            for(let j = 0; j < arr.length; j++){
                //Nothing                
            }
        }else{

            arr = Left(arr, i, n);
        }
    }

    n = n * 2;
    
    return MergeSort(arr, n);
}

function Left(arr, i, n){
    let temp = 0;
    let Index = i;
    let Much = i + n - 1;
    
    console.log(arr);
    while(Index < Much){
        for(let j = i + n; j < i + n * 2; j++){
            console.log(arr[j]);
            console.log(arr[Index]);
            console.log("\n");
            if(arr[Index] > arr[j]){
                temp = arr[Index];
                arr[Index] = arr[j];
                arr[j] = temp;
            }
        }
        Index = Index + 1;
        //Son Sayı Fethi İçin
    }
    
    for(let j = i + n * 2 - 1 ; j >= i + n;j--){
        console.log("In");
        if(arr[Index] > arr[j]){
            
            temp = arr[Index];
            arr[Index] = arr[j];
            arr[j] = temp;
        }
    }
    
    return arr;
}



let myarray = () => {
    let arr = [];
    for(let i = 0; i < 16; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

let result = myarray();
console.log(result);
console.log(MergeSort(result, 1));