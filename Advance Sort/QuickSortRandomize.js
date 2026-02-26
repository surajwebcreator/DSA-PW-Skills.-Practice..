        // swap function to swap two elements in the array
        function swap(arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        // calculate the partition index
        function partition(arr,lo, hi) {
            let mid = Math.floor(lo + (hi-lo)/2);
            let pivot = arr[mid]; pidx = mid;
            let smallcount = 0;
            for(let i=lo; i<=hi; i++) {
                if(i==mid) continue;
                if(arr[i] <= pivot) {
                    smallcount++;
                }
            }
            // place the pivot element at its correct position
            let correctpos = lo + smallcount;
            swap(arr, pidx, correctpos);
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
        function quicksort(arr,lo, hi) {
            if(lo>=hi) return;
            // arr[lo] is the pivot element
            let pidx = partition(arr,lo,hi);
            quicksort(arr,lo,pidx-1);
            quicksort(arr,pidx+1,hi);
        }

        let arr = [4,9,7,1,2,3,6,5,8];
        function main(arr) {
            console.log("Before sorting: ", arr);
            quicksort(arr,0, arr.length-1);
            return arr;
        };
        let ans = main(arr);
        console.log("After sorting: ", ans);