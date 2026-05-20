package Heap;
import java.util.PriorityQueue;



class kth_smallest_ele {
    public static void main(String[] args) {
        // for max
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        pq.add(5);
        pq.add(2);
        pq.add(8);
        pq.add(1);
        System.out.println(pq.peek());
        pq.remove();
        System.out.println(pq);
        System.out.println(pq.peek());
        // getting size
        System.out.println("Size: " + pq.size());
    }
}