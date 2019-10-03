function linearSearch(arr, x){
    console.log(arr);
    console.log(x);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            return "Find It :" + arr[i];
        }
    }
    return "Oppppssssss Someting is wrong";
}

let myarray = () => {
    let arr = [];
    for(let i = 0; i < 10; i++ ){
        arr.push(Math.floor((Math.random()* 100) + 1) );
    }

    return arr;
}
let result = myarray();
console.log(linearSearch(result, result[4]));