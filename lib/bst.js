class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null
   }
   insert(val, root = this.root){
       if(!this.root) {
           this.root = new TreeNode(val)
           return
        }
        if (val >= root.val){
            if(!root.right){
                root.right = new TreeNode(val)
            }
            else {
                this.insert(val, root.right)
            }
        }
        else {
            if(!root.left){
                root.left = new TreeNode(val)
            }
            else {
            this.insert(val, root.left)
            }
        }
   }
   searchRecur(val, root = this.root){
        if(!root){
           return false
        }
        if (val === root.val) return true
        if (val > root.val){
          return this.searchRecur(val, root.right)
        }
        else if(val < root.val){
          return this.searchRecur(val, root.left)
        }
    }

    searchIter(val) {
        if (this.root.val === val) {
            return true;
        } 
        else if (this.root.val < val) {

        }
        else if (this.root.val > val) {

        }

        return false;

    }
}


module.exports = {
    TreeNode,
    BST
};
