function bubbleSort(arr, n = 0, len) {
    let temp;
    if(len == 0)
        return arr; 


    if(n < len){
        if(arr[n] < arr[n - 1]){
            temp = arr[n];
            arr[n] = arr[n - 1];
            arr[n - 1] = temp;
        }
        
        return bubbleSort(arr, n + 1, len);
    }else{
        len -= 1;
        return bubbleSort(arr, 0, len);
    }
}
