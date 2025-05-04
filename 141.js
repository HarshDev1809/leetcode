/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    if(!head){
        return false
    }
    let fast = head.next;
    let slow = head;
    while(fast && slow && fast.next){
        if(fast === slow){
            return true;
        }
        fast = fast.next.next
        slow = slow.next;
    }
    return false
};
