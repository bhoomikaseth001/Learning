#include<iostream>
#include<vector>
#include<utility>
#include<set>
using namespace std;
int main() { 
vector<int>vec;
vec.push_back(1);
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
vec.push_back(2);
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
vec.push_back(3);
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
vec.push_back(4);
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
vec.push_back(5);
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
vec.push_back(6);
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;

cout<<"Before pop : ";
for(int i:vec)
    cout<<i<<" ";

vec.pop_back();

cout<<"\nAfter pop : ";
for(int i:vec)
    cout<<i<<" ";

cout<<"\nSize-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
vec.clear();
cout<<"Size-> "<<vec.size()<<"Capacity-> "<<vec.capacity()<<endl;
cout<<vec.front()<<endl;


return 0;
}


//for(auto &i:nums) -> here 'i' is not the index of the array but the value of the array
