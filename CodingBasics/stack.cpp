//Stack-> DS->LIFO 
//Functions-> push(to insert), pop(to delete), top(to get the top element, empty(to check if the stack is empty), 
//creation : stack<int>s;
//Without using STL stack can be implemented in 2 ways ->1. by using arrays 2.by using LL

#include<iostream>
#include<stack>
using namespace std;

class Stack{
    //properties
    public:
    int *arr;
    int top;
    int size;

    //behaviour
    Stack(int size){
        
    }
}




// int main() { 
//     stack<int>s;
//     s.push(3);
//     s.push(5);
//     s.pop();
//     cout<<"Printing top element "<<s.top()<<endl;

//     if(s.empty())
//         cout<<"Stack is empty"<<endl;
//     else
//         cout<<"Stack is not empty"<<endl;

//     cout<<"Size of stack is "<<s.size()<<endl;
// return 0;
// }
