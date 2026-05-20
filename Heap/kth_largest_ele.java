package Heap;
import java.util.PriorityQueue;

public class kth_largest_ele {
    public static void main(String[] args) {
        int[] arr = {10, 2, 3, 8, -4, -2, 6};

        int k = 3;

        // Create a min-heap
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int ele : arr) {
            pq.add(ele);

            // If the size of the heap exceeds k, remove the smallest element
            if(pq.size() > k) pq.remove();
        }
        System.out.println(pq.peek());
    }   
}
