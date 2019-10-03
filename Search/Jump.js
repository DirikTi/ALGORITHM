function JumpSearch(arr, x, m, n){
    if(arr[m] == x){
        console.log("Found it :" + arr[m]);
    }else if(arr[m] < x){
        JumpSearch(arr, x, m + n, n);
    }else {
        //Linear Search
        console.log("In");
        for(let i = m - n; i < m; i++){
            if(arr[i] == x){
                
                console.log("Found it if else :" + arr[i]);
                return "";
            }
        }
    }
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 20; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

function BubbleSort(arr){
    let temp = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}

let result = myarray();
result = BubbleSort(result);
console.log(result);
let searhCount = result[3];
console.log("Aranan Sayi " + searhCount);
let n = parseInt(Math.sqrt(result.length));
JumpSearch(result, searhCount ,0 , n )
