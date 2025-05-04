 //https://cplusplus.com/reference/vector/vector/
 #include<iostream>
 #include<vector>
 #include<utility>
 #include<set>
 using namespace std;
        template <class T>
 void display(vector<T> &vec){
    cout<<"displaying this vector"<<endl;
    for(int i=0;i<vec.size();i++)
        cout<<vec.at(i)<<" ";
    cout<<endl;
 }
 int main() { 
    //Ways to create vector
    vector<int>vec;//zero length integer vector
    vector<char>vec2(4);//4-element character vector
    vector<char>vec3(vec2);//4-eleement char vector from vec2
    vector<int>vec4(6,3);
    //display(vec);
    // vec2.push_back('6');
    // display(vec2);
    //display(vec3);
    display(vec4); 

    int ele,size;
    
//     cout<<"Enter the size of the vector : "<<endl;
//     cin>>size;
//     cout<<"Enter the elements of the vector : ";

//     for(int i=0;i<size;i++){
//     cin>>ele;
//     vec.push_back(ele);
//     }
//         //vec.pop_back();

//     display(vec);
// vec.insert(vec.begin()+1,5,24);

//     display(vec);




 return 0;
 }