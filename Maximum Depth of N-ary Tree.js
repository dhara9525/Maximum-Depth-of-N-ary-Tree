//  Simple recursive Javascript JS solution , 75.65% of JavaScript online submissions 

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth = 0;
    if (root == null)
        return depth;
    for (let n of root.children)
    {
        depth = Math.max(depth, maxDepth(n));
    }
    return depth+1;
};