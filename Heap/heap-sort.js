class HeapSort {

    swap(arr, i, j) {

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    downheapify(arr, index, size) {

        let left = 2 * index + 1;
        let right = 2 * index + 2;

        let largest = index;

        if(left < size &&
           arr[left] > arr[largest]) {

            largest = left;
        }

        if(right < size &&
           arr[right] > arr[largest]) {

            largest = right;
        }

        if(largest !== index) {

            this.swap(arr, index, largest);

            this.downheapify(arr, largest, size);
        }
    }

    heapSort(arr) {

        let n = arr.length;

        // STEP 1 -> build max heap
        for(let i = Math.floor(n/2)-1; i >= 0; i--) {

            this.downheapify(arr, i, n);
        }

        // STEP 2 -> sorting
        for(let i = n-1; i > 0; i--) {

            // root -> last
            this.swap(arr, 0, i);

            // heap fix
            this.downheapify(arr, 0, i);
        }

        return arr;
    }
}

let hs = new HeapSort();

let arr = [4,10,3,5,1];
console.log(arr);
console.log(hs.heapSort(arr));