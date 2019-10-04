function MergeSort(arr){
    //Divisions
    //Conqueror
    //Merge (Mercy)
    let temp = 0;


    for(let i = 0; i < arr.length; i += 2){
        if(arr[i + 1] < arr[i] ){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    let Divisions = 2;

    while(Divisions < arr.length )
    {
        for(let i = 0; i < arr.length; i += Divisions * 2){
            
            for(let j = 0; j < Divisions; j++){
                if(arr[i] > arr[j + i + Divisions]){
                    temp = arr[i];
                    arr[i] = arr[j + i + Divisions];
                    arr[j + i + Divisions] = temp;
                }
            }

            for(let k = 1; k < Divisions; k++){
                    
                for(let j = Divisions - 1; j >= 0; j--){
                    if(arr[i + k] > arr[Divisions + i + j] ){
                        temp = arr[i + k];
                        arr[i + k] = arr[Divisions + i + j];
                        arr[Divisions + i + j] = temp;
                    }
                }
            }

            //Son Bolme
            if(i + Divisions * 2 > arr.length ){
                console.log("In");
                for(let k = i; k < arr.length; k++){
                    for(let m = i; m < arr.length; m++){
                        if(arr[i] > arr[m]){
                            temp = arr[i];
                            arr[i] = arr[m];
                            arr[m] = temp;
                        }
                    }
                }
            }
            
        }
        Divisions = Divisions * 2;
        console.log(arr);
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

let result = myarray();
console.log(result);
console.log(MergeSort(result, 1));
