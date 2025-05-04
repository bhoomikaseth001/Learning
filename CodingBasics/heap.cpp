// Heap is a DS - is a complete BT(1.every level is completely filled except the last level 2.nodes always added from the left(lean toward the left)) that comes with a heap order property
// ->Max Heap: value of child node is less than that of the parent node.
// ->Min heap: value of child node is greater than that of the parent node.

//Insertion and deletion in heap

#include<iostream>
#include<queue>
using namespace std;

class heap{
    public:
    int arr[100];
    int size=0;

    heap(){
        arr[0]=-1;
        size=0;
    }
    
    void insert(int val){
        size+=1;
        int index=size;
        arr[index]=val;

        while(index>1){
            int parent=index/2;

            if(arr[parent]<arr[index]){
                swap(arr[parent],arr[index]);
                index=parent;
            }
            else
            return;
        }
    }
    void print(){
        for(int i=1;i<=size;i++)
            cout<<arr[i]<<" ";
        cout<<endl;
    }

    //deleting in heap means deleting the first element or the root element
    void deletefromHeap(){
        if(size==0){
            cout<<"Nothing to delete"<<endl;
            return;
        }
        //step 1: put last element to first element
        arr[1]=arr[size];
        //step 2: remove the last element
        size--;

        //step 3: take root node to its correct position
        int i=1;
        while(i<size){

            int LC=2*i;
            int RC=2*i+1;

            if(LC<size && arr[i]<arr[LC]){
                swap(arr[i], arr[LC]);
                i=LC;
        }

        else if(RC<size && arr[i]<arr[RC]){
                swap(arr[i], arr[RC]);
                i=RC;
        }
        else 
        return;

        }
    }


    void heapify(int arr[],int size, int i){
        int largest =i;
        int LC=2*i;
         int RC=2*i+1;

         if(LC<size && arr[LC]>arr[largest])
            largest=LC;
        if(RC<size && arr[RC]>arr[largest])
            largest=RC;
        if(largest !=i){
            swap(arr[largest],arr[i]);
            heapify(arr,size,largest);
        }
    return;
    }
};

int main(){
    heap h;
    h.insert(50);
    h.insert(55);
    h.insert(53);
    h.insert(52);
    h.insert(54);
    h.print();
    h.deletefromHeap();
    h.print();

    int arr1[6]={-1,54,53,55,52,51};
    int n=5;
    for(int i=n/2;i>0;i--)
        h.heapify(arr1,n,i);
    for(int i=1;i<=n;i++)
        cout<<arr1[i]<<" ";
    return 0;

}

