
// PROBLEM: Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.  Modify list in place with memory usage O(1).  
//  @param {number[]} nums
//  @param {number} k
//  @return {void} Do not return anything, modify nums in-place instead.
//  

// SOLUTION SUMMARY:  I created an algorithm that would rotate a list in place IF the list length was evenly divisible by the rotation amount (and included a minimum of three values).   Then I used a while loop to decrement a placeholder value "sub_k" from the value of k until it found a number that the array could be evenly divided by.  I iterated through this, subtracting sub_k from k until the aggregated "sub_k"s had rotated the list by the required "k" amount.  
var rotate = function(nums, k) {

    function rotateArrayByK(nums, k){
    
    if(nums.length == 2){
        
        if(k % 2 != 0 ){
            let a = nums[0], b = nums[1]
            nums[0]= b
            nums[1] = a
        } 
        return
    }
    //NOTE:  This algorithm actually rotates the list in the wrong direction.  Line 23 inverts it by setting k to its complement vs the array length.
    k <= nums.length ? k = nums.length - k : k = nums.length + (nums.length - k)
    while(k != 0){
        let sub_k = k;
        while(nums.length % sub_k != 0){
            sub_k --
        }
        unshiftBySubK(nums, sub_k)
        k -= sub_k
        }
    
    }
    function unshiftBySubK(nums, k){    
        // The nested for loop below looks like O(n^2) but j decreases as i increases and vice versa.                            
        for(let i=0; i<k; i++){     //  0(n)     
            for(let j = 0; j< ((nums.length / k)-1); j++){ //0(n)
                a_value = nums[i]  //declaring 3 values 0(1)
                b_value = nums[i + j*k]
                c_value = nums[i + ((j+1)*k)]

                nums[i + ((j+1)*k)] = b_value //Set C position to B Value
                nums[i + j*k] = c_value       //Set B position to C Value
                if(j == 0){continue}           
            }
        }
    }
    rotateArrayByK(nums, k)
}