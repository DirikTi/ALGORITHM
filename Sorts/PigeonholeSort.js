function PigeonholeSort(arr){

    let BigCountIndex = 0;
    let SmallCountIndex = 0;
    console.log(arr);
    for(i = 1; i < arr.length; i++){
        if(arr[i] > arr[BigCountIndex]){
            BigCountIndex = i;
        }

        if(arr[i] < arr[SmallCountIndex]){
            SmallCountIndex = i;
        }
    }
    let Range = arr[BigCountIndex] - arr[SmallCountIndex] + 1;

    let result = [];

    for(let i = 0; i < arr.length;i++){
        result.push([]);
    }


    for(let i = 0; i < arr.length; i++){
        let count =  arr[i] - arr[SmallCountIndex];
        result[count].push(arr[i]); 
    }

    arr = [];
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result[i].length; j++){
            arr.push(result[i][j]);
        }
    }

    return arr;
}

let arr = [2,8,9,9,6,5,7,1,3,4];
console.log(PigeonholeSort(arr))