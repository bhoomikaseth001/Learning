#include <bits/stdc++.h>
using namespace std;

class AdjacencyMatrix{
    public:
    void printGraph(vector<vector<int>> &grid, int n){
        for(int i=0;i<n;i++){
            cout<<i<<" : ";
            for(int j=0;j<n;j++){
                if(grid[i][j]==1)
                    cout<<j<<" ";
            }
            cout<<endl;
        }
    }

};

int main(){
    vector<vector<int>>grid={{ 0, 1, 0, 0 },
                               { 1, 0, 1, 0 },
                               { 0, 1, 0, 1 },
                               { 0, 0, 1, 0 } };
                               int n=4;

    AdjacencyMatrix adjacencyMatrix;
    adjacencyMatrix.printGraph(grid, n);
    
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<grid[i][j]<<" ";
        }
        cout<<endl;

    }
}

 
