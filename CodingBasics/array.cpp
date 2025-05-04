// #include<bits/stdc++.h>
// using namespace std;
// int  main(){
//     int arr[]={2,5,67,3,-23,546,0};
//     int smallest=INT_MAX;
//     int largest=INT_MIN;
//     int small_ind=-1;
//     int large_ind=-1;
//     for(int i=0;i<sizeof(arr)/sizeof(int);i++){
//         if(arr[i]==(largest=max(arr[i],largest)))
//             large_ind=i;
//         if(arr[i]==(smallest=min(arr[i],smallest)))
//              small_ind=i;
//         }
//         cout<<"Largest value in the array is : "<<largest<<" at position "<<large_ind<<endl;
//         cout<<"Smallest value in the array is : "<<smallest<<" at position "<<small_ind<<endl;
//   return 0;
// }

//REVERSE OF AN ARRAY
//Approach : TWO POINTERS APPROACH
//take two pointers ptr1=start index
 //                               ptr2 =last index
   //          terminal condition -> size=even : 4,5,6,7 : ptr1>ptr2 
     //                               size =odd : 4,5,6 : ptr1==ptr2
// #include<bits/stdc++.h>
// using namespace std;
// int Reverse_Array(int arr[],int size) {
//     int start=0;
//     int end=size-1;
//     while(start<end){
//         swap(arr[start],arr[end]);
//         start++;
//         end--;
//     }
// }
//     int main(){
//         int arr[]={3,6,7,8,2};
//         int size=sizeof(arr)/sizeof(int);

//         Reverse_Array(arr,size);

//         for(int i=0;i<size;i++)
//         cout<<arr[i]<<" ";
//     }

/*What is an array?? - is a linear ds, has collection of elements of same data type, stored in contiguous memory locations 
Why do require an array??  - to store multiple values in a single variable
*/
//check if the number is the power of 2 or not
// #include<iostream>
// #include <cmath>
// using namespace std;

// int main(){
//   int n;
//   cout<<"Enter a number: ";
//   cin>>n;
  // double intpart;
  // double isPower=log2(n);
  // double fracpart=modf(isPower,&intpart);
  // cout<<"Integral part "<<intpart<<endl;
  // cout<<"Fractional part "<<fracpart<<endl;

  //if(fracpart==0.0)
//   if((n & -n) == n)
//     cout<<n<<" is a power of 2";
//   else
//     cout<<n<<" is not a power of 2";
// }

//REVERSE THE ARRAY
/*   6          2         3          4         5  
  start                                       end

  Algo:
  ->swap(start,end)
  ->start++, end--
  ->terminating condition if(start>end)
 */

// #include <iostream>
// using namespace std;

// void reverse(int arr[],int n){
//   int start =0, end=n-1;
//   while(start<=end){
//     swap(arr[start],arr[end]);
//     start++;
//     end--;
//   }
// }

// void print(int arr[],int n){
//   for(int i=0;i<n;i++)
//   cout<<arr[i]<<" ";
// }
// int main(){
//   int arr[6]={1,4,7,-2,6,15};
//   reverse(arr,6);
//   print(arr,6);
// }


/*UNIQUE ELEMENTS*/
// #include <iostream>
// #include <algorithm>
// #include<set>
// #include<unordered_set>
// #include<vector>
// using namespace std;
// int main(){
   //int arr[13]={1,2,1,3,2,6,3,1,3,2,4,3,1};
//   sort(arr,arr+13);
//   for(int i=0;i<13;i++){
//       if(arr[i]!=arr[i+1]){
//          cout<<arr[i]<<" ";
         
//          }
//     }
  
// int arr[13]={1,2,1,3,2,6,3,1,3,2,4,3,1};
//   unordered_set<int>st(arr, arr+13);
//   for(int i:st)
//     cout<<i<<" ";


//   return 0;
//   }


/*SIMILAR QUESTION AS UNIQUE ELEMENT*/
// #include<bits/stdc++.h>
// using namespace std;
// int main(){
//   int arr[7]={2,3,1,6,3,6,2};
//   int uniq=0;
//   for(int i=0;i<7;i++)
//     uniq^=arr[i];
//   cout<<uniq;
//   return 0;
// }

/*Swap atlernate elements*/
// #include <bits/stdc++.h>
// using namespace std;
// int main() { 
// int arr[5]={1,3,2,7,11};
// int temp;
// for(int i=0;i<5;i+=2){
//   if (i+1<5)
//     // swap(arr[i],arr[i+1]);
//    temp=arr[i];
//     arr[i]=arr[i+1];
//     arr[i+1]=temp;
// }
//   for(int i=0;i<5;i++)
//     cout<<arr[i]<<" ";

// return 0;
// }

/*FIND DUPLICATES*/
// #include<bits/stdc++.h>
// using namespace std;
// int main (){
  // int arr[8]={3,5,4,7,6,2,3,1};
  // sort(arr,arr+8);
  // for(int i=0;i<7;i++){
  //     if(arr[i]==arr[i+1])
  //       cout<<"Duplicate element is "<<arr[i];
  // }

  // vector<int>vec={3,5,4,7,6,2,3,1};
  // unordered_map<int,int >mp;
  // for(int &v:vec)
  //   mp[v]++;
  // for(auto &i:mp){
  //   if (i.second==2)
  //     cout<<"Duplicate element is : "<<i.first;
  // }


//    vector<int>vec={5,4,3,7,6,2,3,1};
//    int dup=0;
//    for(int i=0;i<vec.size();i++)
//       dup^=vec[i];
//   for(int i=1;i<vec.size();i++)
//       dup^=i;
//   cout<<dup;
// return 0;
    
// }



/*INTERSECTION OF TWO ARRAYS*/

//BRUTE FORCE APP.
// #include<bits/stdc++.h>
// using namespace std;
// int main(){
//   int a1[7]={1,2,2,3,3,3,4};
//   int a2[3]={2,2,3};
//   vector<int>ans;
//   for(int i=0;i<7;i++){
//     int ele=a1[i];
//     for(int j=0;j<3;j++){
//       if(ele==a2[j]){
//         ans.push_back(ele);
//         a2[j]=INT_MIN; //IMPORTANT POINT
//         break;
//     }
//     }
//   }
//   for(auto i:ans)
//      cout<<i<<" ";
// return 0;
// }

//OPTIMIZED APPROACH
// #include<bits/stdc++.h>
// using namespace std;
// int main(){
//   int a1[7]={1,2,2,3,3,3,4};
//   int a2[3]={2,2,3};
//   int i=0,j=0;
//   vector<int>ans;
//   while(i<7 && j<3){
//     if(a1[i] == a2[j]){
//       ans.push_back(a1[i]);
//       i++;
//       j++;
//     }
//     else if(a1[i]<a2[j])
//       i++;
//     else
//       j++;
//   }
//   for(auto i:ans)
//      cout<<i<<" ";
// return 0;
// }

/*PAIR SUM*/
#include<bits/stdc++.h>
using namespace std;
int main(){
  int a1[7]={1,2,3,4,5};
  
  }