function sort(arr){
    let bucketArr = [];

    for(let i = 0; i < 10; i++){
        bucketArr.push([]);
    }

    for(let i = 0; i < arr.length; i ++){
        let theCount =  getNumber(arr[i], 1);
        bucketArr[theCount].push(arr[i]);
    }


    console.log(bucketArr);
    let temp = 0;
    let resultArr = [];

    for(let i = 0; i < bucketArr.length; i++){
        for(let j = 0; j < bucketArr[i].length; j++){
            for(let k = j + 1; k < bucketArr[i].length; k++){
                if(bucketArr[i][j] > bucketArr[i][k]){
                    temp = bucketArr[i][j];
                    bucketArr[i][j] = bucketArr[i][k];
                    bucketArr[i][k] = temp;
                }
            }
        }
    }

    for(let i = 0; i < bucketArr.length; i++){
        for(let j = 0; j < bucketArr[i].length; j++){
            resultArr.push(bucketArr[i][j]);
        }
    }


    console.log("\n");
    console.log(bucketArr);
    return resultArr;
}


function getNumber(number, j){
    return parseInt((number / Math.pow(10, j)) % 10);
}


let myarray = () => {
    let arr = [];
    for(let i = 0; i < 10; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}

let result = myarray();

console.log(sort(result));


//Sayilar 2 basamaklı olucak şekilde array
//Sayiları 2. basamak sayısına gore atıcaz,
