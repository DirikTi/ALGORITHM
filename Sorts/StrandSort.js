function StrandSort(arr, Store){
    
    let newArr = [];
    if(arr.length == 0){
        return Store;
    }
    Store.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(arr[0] > arr[i]){
            Store.push(arr[i]);
        }else if(arr[0] < arr[i]){
            newArr.push(arr[i]);
        }
    }
    let temp = 0;
    //Bubble Sort
    for(let i = 0; i < Store.length; i ++){
        for(let j = i + 1; j < Store.length; j++){
            if(Store[i] > Store[j]){
                temp = Store[i];
                Store[i] = Store[j];
                Store[j] = temp;
            }
        }
    }
    
    console.log("Store");
    console.log(Store);
    console.log("NewArr");
    console.log(newArr);
    console.log("\n");
    return StrandSort(newArr, Store);
    
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
let myarrarary = [ 57, 55, 5, 27, 11, 85, 95, 39, 100, 64 ];
console.log(StrandSort(result, []));