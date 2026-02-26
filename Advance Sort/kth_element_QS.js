    // swap function to swap two elements in the array
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // calculate the partition index
    function partition(arr,lo, hi) {
        let smallcount = 0;
        for(let i=lo+1; i<=hi; i++) {
            if(arr[i] <= arr[lo]) {
                smallcount++;
            }
        }
        // place the pivot element at its correct position
        let correctpos = lo + smallcount;
        swap(arr,lo,correctpos);
        // now all the elements on the left of the pivot are smaller than it and all the elements on the right of the pivot are greater than it
        let i = lo, j = hi;
        while (i<correctpos && j>correctpos) {
            if(arr[i]<= arr[correctpos]){
                i++;
            }else if(arr[j]> arr[correctpos]) {
                j--;
            }else if(arr[i]> arr[correctpos] && arr[j]< arr[correctpos]){
                swap(arr,i,j);
                i++;
                j--;
            }
        }
        // console.log("After partitioning: ", arr);
        return correctpos;
    }

    // calling quicksort function
    function quicksort(arr,lo, hi, k) {
        if(lo>hi) return;
        if(lo == hi) {
            res = arr[lo];
            return;
        }
        // arr[lo] is the pivot element
        let pidx = partition(arr,lo,hi);
        if(pidx == k-1) {
            // console.log("Kth smallest element is: ", arr[pidx]);
            res = arr[pidx];
            return;
        }
        if(pidx > k-1) {
            quicksort(arr,lo,pidx-1,k);
        } else {
        quicksort(arr,pidx+1,hi,k);
    }
}

    let arr = [4,9,1,2,6,5,8];
    let res = -1;
    let k = 4;
    function main(arr, k) {
        console.log("Before sorting: ", arr);
        quicksort(arr,0, arr.length-1,k);
        // return arr;
    };
    let ans = main(arr, k);
    console.log("Kth smallest element is: ", res);