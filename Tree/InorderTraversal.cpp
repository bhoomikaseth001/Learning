#include <iostream>
#include <vector>
using namespace std;

struct node{
    int data;
    struct node* left;
    struct node* right;
    node(int val){
        data=val;
        left=right=NULL;
    }
};

void inorder_traversal(node* root, vector<int>arr){
    if(root==NULL)
        return ;
    inorder_traversal(root->left,arr);
    arr.push_back(root->data);
    inorder_traversal(root->right,arr);
}
vector<int> inorder(node* root){
    vector<int> arr;
    inorder_traversal(root,arr);
    return arr;
}
int main(){
    node* root=new node(1);
    root->left=new node(2);
    root->right=new node(3);
    root->left->left=new node(4);
    root->left->right=new node(5);

    vector<int>res=inorder(root);
    for(int i:res)
    cout<<i<<" ";
}
