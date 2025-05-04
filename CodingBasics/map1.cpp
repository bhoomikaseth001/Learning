#include<iostream>
#include<string>
#include<map>
using namespace std;
int main(){
    map<string,int>mp;
    mp["Bhoomika"]=19;
    mp["Bhoomi"]=18;
    mp["Arnav"]=20;
    map<string,int>:: iterator it;
    for(it=mp.begin(); it!=mp.end();it++)
        cout<<(*it).first<<" "<<(*it).second<<endl;
        
return 0;
}