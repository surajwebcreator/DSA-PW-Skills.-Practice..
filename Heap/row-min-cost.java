package Heap;

import java.util.*;
import java.util.PriorityQueue;

class Main {

    public int minCost(int[] arr) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int cost = 0;
        for (int ele : arr) {
            pq.add(ele);
        }
        
        while (pq.size()>1) {
            int x = pq.remove();
            int y = pq.remove();
            int sum = x + y;
            cost += sum;
            pq.add(sum);
        }   
        return cost;
    }
    public static void main(String[] args) {
        int[] arr = {2,7,1,4,8};
        Main s = new Main();
        System.out.println(s.minCost(arr));
    }
}