function CocktailSort(arr){
    let n = 0;
    let t = arr.length - 1;
    let gap = 0;
    let isFront = 1;
    let temp = 0;
    console.log(arr);
    console.log("\n");

    while( n != parseInt(arr.length / 2)){
        if(isFront == 1){
            for(let i = n; i < arr.length - 1 - n; i++){
                if(arr[i] > arr[i + 1]){
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
            n = n + 1;
            gap = n;
            isFront = 0;

        }else{
            for(let i = arr.length - 1 - n; i >= n - 1; i--){
                if(arr[i] < arr[i - 1]){
                    temp = arr[i];
                    arr[i] = arr[i - 1];
                    arr[i - 1] = temp;
                }
            }
            isFront = 1;
        }
        
    }
   
    return arr;
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 7; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

console.log(CocktailSort(myarray()));