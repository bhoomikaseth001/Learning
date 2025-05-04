#include<iostream>
#include<vector>
#include<utility>
#include<set>
using namespace std;
int main() { 
    int ch='A';
cout<<ch<<endl;

char ch1=66;
cout<<ch1<<endl;

char ch2=123456;
cout<<ch2<<endl;

unsigned int b=5;
cout<<b<<endl;

unsigned int a=-5;//unsigned int will store only +ve values, hence the 2's complement of -5 will some large number have MSB as 1 with means -ve bit but due to 'unsigned int' compiler will treat it as a +ve bit and therefore a large number is printed instead of -5
cout<<a<<endl;

//n^n=0
//n^0=n

return 0;
}