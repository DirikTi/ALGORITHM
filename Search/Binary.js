function BinarySearch(arr, x, orta, min, max){

    orta = parseInt(orta);
    if(arr[orta] == x){
        console.log(arr[orta] );
        return "Found it : ";
    }else if(arr[orta] < x){
        console.log("In Sag " + orta + " " + min);
        
        let mMin = orta;
        orta = (orta + max) / 2;
        BinarySearch(arr, x, orta, mMin, max);
        //Sag taraf
    }else{
        console.log("Sol")
        let mMax = orta;    
        orta = (orta + min) / 2 ;

        BinarySearch(arr, x, orta, min, mMax );
        //Sag taraf
    }
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
console.log("Bulunacak Sayi " + result[6]);
BinarySearch(result, result[6], result.length / 2, 0, result.length);