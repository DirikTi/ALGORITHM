function RadixSort(arr){
    //birler basmagı daha sonra 10 lar basamagı
    let MostCount = 0;
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        let theNumber = arr[i];
        let count = 0;
        while(theNumber >= 10){
            count = count + 1;

            theNumber = theNumber / 10;
        }

        if(count > MostCount){
            MostCount = count;
        }
    }

    //En buyuk Basamk Sayısı bulundu Sırada 1., 2., 3., 4. ...basamak Sayıyı Almak;
    for(let j = 0; j <= MostCount; j++){
        //Karesini Al
        arr = CountingSort(arr, j);
    }

    return arr;
}


function CountingSort(arr, exp){
    let CountingArr = [];

    
    for(let i = 0; i < 10; i++){
        CountingArr.push(0);
    }

    for(let i = 0; i < arr.length; i++){
        CountingArr[getNumber(arr[i], exp)] += 1;
    }

    let result = [];
    
    for(let i = 0; i < CountingArr.length; i++ ){
        for(let j = 0; j < CountingArr[i]; j++){    
            result.push(i);
        }
    }

    //Dogru Sıralayıp geri yollama Esas Array'ı
    console.log(result);
    for(let i = 0; i < result.length; i++){
        
        for(let j = 0; j < result.length; j++){
            if(result[i] == getNumber(arr[j], exp)){
                result[i] = arr[j];
                arr[j] = undefined;
            }
        }
    }

    console.log(result);
    return result;
}

function getNumber(number, j){
    return parseInt((number / Math.pow(10, j)) % 10);
}


let myarray = () => {
    let arr = [];
    for(let i = 0; i < 4; i++ ){
        arr.push(Math.floor((Math.random()* 4000) + 1) );
    }

    return arr;
}

console.log(RadixSort(myarray()));