//LINEAR SEARCH
#include <iostream>
using namespace std;

bool search(int arr[],int size, int key){
    for(int i=0;i<size;i++){
        if(arr[i]==key)
            return 1;
    }
    return 0;
}
int main(){
  int size;
  cout<<"Enter the size of the array : ";
  cin>>size;
  int *arr=new int[size];
  cout<<"Enter the elements of the array : ";
  for(int i=0;i<size;i++)
     cin>>arr[i];

  int key;
  cout<<"\nEnter the number to be searched : ";
  cin>>key;

  bool found = search(arr,size,key);
  if(found)
    cout<<"Key is found ";
    else
    cout<<"Key is not found ";

}