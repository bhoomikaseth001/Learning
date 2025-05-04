#include<bits/stdc++.h>
using namespace std;
int main(){
  int a1[7]={1,2,2,3,3,3,4};
  int a2[3]={2,2,3};
  vector<int>ans;
  for(int i=0;i<7;i++){
    int ele=a1[i];
    for(int j=0;j<3;j++){
      if(ele<a2[j]){
        ans.push_back(ele);
        a2[j]=INT_MIN;
        break;
    }
    }
  }
  for(auto i:ans)
     cout<<ans[i]<<" ";
return 0;
}