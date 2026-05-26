import java.util.*;
import java.util.Collection;
import java.util.Collections;
import java.util.PriorityQueue;

class Solution  {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); 
        for(int ele : stones){
            pq.add(ele);
        }
        while(pq.size()>1){
            int last = pq.remove();
            int slast = pq.remove();
            if(last!=slast) pq.add(last-slast);
        }
        return (pq.size()!=0 ? pq.remove() : 0);      
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        int[] arr = {2,7,4,1,8,1};
        System.out.println(s.lastStoneWeight(arr));
    }
}