//data hiding using private access modifier
#include<iostream>
#include<string>

using namespace std;


class Account{
private:
    double balance;
    string password; //data hiding using access modifiers
public:
    string accountId;
    string username;
};

int main() { 
    Account a1;
    a1.username="BHoomika";
    
    cout<<a1.username<<endl;

    return 0;
}