function CombSort(arr){
    let gap = parseInt(arr.length / 1.3);

    let temp = 0;
    while(gap >= 1){

        for(let i = 0; i < arr.length - gap; i++){
            if(arr[i] > arr[i + gap]){
                temp = arr[i];
                arr[i] = arr[i + gap];
                arr[i + gap] = temp;
            }
        }

        gap = parseInt(gap / 1.3);
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

console.log(CombSort(myarray()));