function InterpolationSearch(arr, Start, End, Pos, x ){
    Pos = parseInt(Start + ((End - Start) / (arr[End] - arr[Start])) * (x - arr[Start]));
    console.log(Pos);
    
    if(arr[Pos] == x){

        console.log("Find Out :" + arr[Pos]);
        return 0;
    }else if(arr[Pos] < x  ){
        Start = Pos + 1;
        
    }else {
        End = Pos - 1;
        
    }
    InterpolationSearch(arr, Start, End, Pos, x);
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 10; i++ ){
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
InterpolationSearch(result, 0, result.length - 1, 0, result[5]);