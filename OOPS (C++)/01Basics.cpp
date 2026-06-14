#include<iostream>
#include<string>

using namespace std;

class Teacher{
    //all the methods and attributes are private by default in cpp
private:
    double salary;
public:
    //properties/attribures
    string name;
    string dept;
    string subject;


    //methods/member funcitions
    void changeDept(string newDept){
        dept=newDept;
    }
    
    //setter 
    void setSalary(int s){
           salary=s;
    }
    //getter
    double getSalary(){
        return salary;
    }
};

int main() { 
    Teacher t1;
    t1.name="Bhoomika";
    t1.subject="C++";
    t1.dept="Computer Science";
    // t1.salary=25000; //we cannot directly acces the private members
    t1.setSalary(25000);

    cout<<t1.name<<endl;
    cout<<t1.getSalary()<<endl;

    return 0;
}